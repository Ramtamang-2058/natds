import {Contact} from "@/components/sections/Contact";
import {Hero} from "@/components/sections/Hero";
import {ManagerAI} from "@/components/sections/ManagerAI";
import {Marquee} from "@/components/sections/Marquee";
import {ResearcherProgram} from "@/components/sections/ResearcherProgram";
import {Services} from "@/components/sections/Services";
import {Training} from "@/components/sections/Training";
import {WhyNATDS} from "@/components/sections/WhyNATDS";

interface HomePageProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function HomePage(props: HomePageProps) {
  const {handleNavClick} = props;

  return (
    <>
      <Hero handleNavClick={handleNavClick} />
      <Marquee />
      <ResearcherProgram />
      <ManagerAI />
      <Services />
      <Training />
      <WhyNATDS />
      <Contact />
    </>
  );
}