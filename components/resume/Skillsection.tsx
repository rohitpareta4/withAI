import { Skill } from "@/features/resume/types/resume.types";
import ResumeSection from "./ResumeSection";

interface props{
    skills:Skill[];
    dark?:boolean;
}

export default function Skillsection({skills,dark=false}:props){
    return(
      <ResumeSection title="Skills">
      <div className="space-y-5">
        {skills?.map((skill,index) => (
          <div key={index}>
            <h3 className={`font-semibold ${dark?"text-white":"text-gray-900"}`}>
              {skill.category}
            </h3>

          <p className={`mt-1 text-sm leading-6 ${dark?"text-gray-300":"text-gray-700"}`}>
            {skill.items.join(" • ")}
         </p>
          </div>
        ))}
      </div>
    </ResumeSection>
    )
}