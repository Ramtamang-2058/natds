import {Approach} from "@/components/sections/Approach";
import {Contact} from "@/components/sections/Contact";
import {Events} from "@/components/sections/Events";
import {Hero} from "@/components/sections/Hero";
import {ManagerAI} from "@/components/sections/ManagerAI";
import {QuoteBar} from "@/components/sections/QuoteBar";
import {ResearcherProgram} from "@/components/sections/ResearcherProgram";
import {Services} from "@/components/sections/Services";
import {Training} from "@/components/sections/Training";

interface HomePageProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function HomePage(props: HomePageProps) {
  const {handleNavClick} = props;

  return (
    <>
      <Hero handleNavClick={handleNavClick} />
      <QuoteBar />
      <ResearcherProgram />
      <Events />
      <ManagerAI />
      <Services />
      <Training />
      <Approach />
      <Contact />
    </>
  );
}