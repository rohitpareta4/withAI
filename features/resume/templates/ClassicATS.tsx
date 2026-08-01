import { ResumeData } from "../types/resume.types";
import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSection from "@/components/resume/ResumeSection";
import Skillsection from "@/components/resume/Skillsection";
import Projectsection from "@/components/resume/Projectsection";
import ExperienceSection from "@/components/resume/ExperienceSection";

interface props{
    data:ResumeData
}

export default function ClassicATS({
    data,
}:props){

return(
     <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-10 text-black shadow-lg">

      <ResumeHeader personal={data.personal} />
      <ResumeSection title="summary">
         <p>{data.personal.summary}</p>
      </ResumeSection>

      <Skillsection Skills={data.skills}/>
      <Projectsection projects={data.projects}/>
      <ExperienceSection experience={data.experience}/>

    </div>
 )

}