import {useCallback, useEffect, useState} from "react";
import {NAV_LINKS} from "@/data";

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

function getActiveSection(): string {
  const scrollPos = window.scrollY + 120;
  let current = "";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollPos) {
      current = id;
    }
  }
  return current;
}

export function useNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setShowTopButton(y > 600);
      setActiveSection(getActiveSection());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: "smooth", block: "start"});
      history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handleNavClick = useCallback(
    (id: string) => (e?: React.MouseEvent) => {
      e?.preventDefault();
      scrollTo(id);
    },
    [scrollTo]
  );

  const scrollTop = useCallback(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);

  return {
    scrolled,
    activeSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    showTopButton,
    handleNavClick,
    scrollTop,
  };
}

export type Navigation = ReturnType<typeof useNavigation>;