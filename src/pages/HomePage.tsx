import {useState} from "react";
import {Approach} from "@/components/sections/Approach";
import {Contact} from "@/components/sections/Contact";
import {FieldNotes} from "@/components/sections/FieldNotes";
import {Hero} from "@/components/sections/Hero";
import {Programs} from "@/components/sections/Programs";
import {Sectors} from "@/components/sections/Sectors";
import {Services} from "@/components/sections/Services";
import {Work} from "@/components/sections/Work";
import {SECTORS} from "@/data";

interface HomePageProps {
  handleNavClick: (id: string) => (e?: React.MouseEvent) => void;
}

export function HomePage(props: HomePageProps) {
  const {handleNavClick} = props;
  const [sectorId, setSectorId] = useState(SECTORS[0].id);

  const pickSector = (id: string) => {
    setSectorId(id);
    handleNavClick("sectors")();
  };

  return (
    <>
      <Hero onPickSector={pickSector} />
      <Sectors activeId={sectorId} onChange={setSectorId} />
      <Services />
      <Programs />
      <Work />
      <Approach />
      <FieldNotes />
      <Contact />
    </>
  );
}
