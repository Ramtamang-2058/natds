import {Navbar} from "@/components/layout/Navbar";
import {Footer} from "@/components/layout/Footer";
import {WhatsAppDock} from "@/components/layout/WhatsAppDock";
import {HomePage} from "@/pages/HomePage";
import {useNavigation} from "@/hooks/useNavigation";
import {MotionConfig} from "motion/react";

export function App() {
  const nav = useNavigation();

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="min-h-screen flex flex-col font-sans bg-paper text-ink overflow-x-hidden"
        id="natds-main"
      >
        <Navbar
          scrolled={nav.scrolled}
          activeSection={nav.activeSection}
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
    </MotionConfig>
  );
}

export default App;