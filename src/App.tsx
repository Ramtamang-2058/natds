import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {WhatsAppDock} from "@/components/layout/WhatsAppDock";
import {HomePage} from "@/pages/HomePage";
import {useNavigation} from "@/hooks/useNavigation";

export function App() {
  const nav = useNavigation();

  return (
    <div
      className="min-h-screen flex flex-col font-sans bg-ink-950 text-lumen selection:bg-aurora selection:text-ink-950 overflow-x-hidden"
      id="natds-main"
    >
      <Navbar
        scrolled={nav.scrolled}
        activeSection={nav.activeSection}
        mobileMenuOpen={nav.mobileMenuOpen}
        setMobileMenuOpen={nav.setMobileMenuOpen}
        handleNavClick={nav.handleNavClick}
      />

      <main className="flex-1 flex flex-col">
        <HomePage handleNavClick={nav.handleNavClick} />
      </main>

      <Footer handleNavClick={nav.handleNavClick} />

      <WhatsAppDock
        showTopButton={nav.showTopButton}
        scrollTop={nav.scrollTop}
      />
    </div>
  );
}

export default App;