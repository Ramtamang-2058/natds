/* NATDS certificate verification — shared library.
   Used by /verify, /admin, /certificate (browser) and scripts/encrypt-records.mjs + tests (node). */
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.NatdsVerify = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  /* NATDS-AIM-26B1-0001-W  →  issuer-PROG-YYB<batch>-<SEQ4>-<check> */
  var ID_RE = /^NATDS-[A-Z]{2,6}-\d{2}[A-Z]\d-[0-9]{4}-[0-9A-Z]$/;

  function normalizeId(raw) {
    return String(raw == null ? "" : raw).trim().toUpperCase().replace(/\s+/g, "");
  }

  function isValidFormat(id) {
    return ID_RE.test(normalizeId(id));
  }

  /* Mod-36 check character. Legacy IDs (e.g. 0001-W from the printed template)
     are exempt from validation on lookup — exact match only — so old certs keep working. */
  function checkChar(base) {
    var sum = 0;
    for (var i = 0; i < base.length; i++) sum += base.charCodeAt(i);
    return ((sum * 7 + 8) % 36).toString(36).toUpperCase();
  }

  function makeId(programmeCode, batch, seq) {
    var s = String(seq);
    while (s.length < 4) s = "0" + s;
    var base = "NATDS-" + programmeCode + "-" + batch + "-" + s;
    return base + "-" + checkChar(base);
  }

  /* records: array of {id, name, programme, date, revoked, ...} */
  function lookup(records, rawId) {
    var want = normalizeId(rawId);
    if (!want) return null;
    for (var i = 0; i < records.length; i++) {
      if (normalizeId(records[i].id) === want) return records[i];
    }
    return null;
  }

  /* Client-side rate limit: 10 attempts per 5 minutes (state kept in localStorage). */
  var RATE_LIMIT = 10;
  var RATE_WINDOW_MS = 5 * 60 * 1000;

  function rateGate(state, now) {
    var attempts = (state && state.attempts) || [];
    var recent = attempts.filter(function (t) {
      return now - t < RATE_WINDOW_MS;
    });
    if (recent.length >= RATE_LIMIT) {
      return {allowed: false, retryMs: RATE_WINDOW_MS - (now - recent[0]), attempts: recent};
    }
    return {allowed: true, retryMs: 0, attempts: recent.concat([now])};
  }

  function hexToBytes(hex) {
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function bytesToHex(buf) {
    return Array.prototype.map
      .call(new Uint8Array(buf), function (b) {
        return (b + 0x100).toString(16).substr(1);
      })
      .join("");
  }

  /* dat: {v:1, iv:"hex", ct:"hex"} — AES-256-GCM, key is 32-byte hex (see key.js). */
  function decryptRecords(dat, keyHex) {
    var cryptoObj = globalThis.crypto;
    return cryptoObj.subtle
      .importKey("raw", hexToBytes(keyHex), {name: "AES-GCM"}, false, ["decrypt"])
      .then(function (key) {
        return cryptoObj.subtle.decrypt({name: "AES-GCM", iv: hexToBytes(dat.iv)}, key, hexToBytes(dat.ct));
      })
      .then(function (pt) {
        return JSON.parse(new TextDecoder().decode(pt));
      });
  }

  function encryptRecords(obj, keyHex) {
    var cryptoObj = globalThis.crypto;
    var iv = cryptoObj.getRandomValues(new Uint8Array(12));
    var pt = new TextEncoder().encode(JSON.stringify(obj));
    return cryptoObj.subtle
      .importKey("raw", hexToBytes(keyHex), {name: "AES-GCM"}, false, ["encrypt"])
      .then(function (key) {
        return cryptoObj.subtle.encrypt({name: "AES-GCM", iv: iv}, key, pt);
      })
      .then(function (ct) {
        return {v: 1, iv: bytesToHex(iv), ct: bytesToHex(ct)};
      });
  }

  function formatDate(iso) {
    var parts = String(iso).split("-");
    if (parts.length !== 3) return iso;
    var months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var m = months[parseInt(parts[1], 10) - 1];
    if (!m) return iso;
    return parseInt(parts[2], 10) + " " + m + " " + parts[0];
  }

  return {
    normalizeId: normalizeId,
    isValidFormat: isValidFormat,
    checkChar: checkChar,
    makeId: makeId,
    lookup: lookup,
    rateGate: rateGate,
    RATE_LIMIT: RATE_LIMIT,
    RATE_WINDOW_MS: RATE_WINDOW_MS,
    hexToBytes: hexToBytes,
    bytesToHex: bytesToHex,
    decryptRecords: decryptRecords,
    encryptRecords: encryptRecords,
    formatDate: formatDate
  };
});
