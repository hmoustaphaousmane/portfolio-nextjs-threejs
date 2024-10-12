import Image from "next/image";

// image the background image
import bg from '../../../../public/background/projects-background.png'
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Stuff from "@/components/models/Stuff";

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
      <ProjectList projects={projectsData} />


      <div className="flex justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <Stuff />
        </RenderModel>
      </div>
    </>
  );
}
