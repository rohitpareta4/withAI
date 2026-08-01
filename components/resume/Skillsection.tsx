import { Skill } from "@/features/resume/types/resume.types";
import ResumeSection from "./ResumeSection";

interface props{
    Skills:Skill[];
}

export default function Skillsection({Skills}:props){
    return(
      <ResumeSection title="Skills">
      <div className="space-y-5">
        {Skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="font-semibold text-gray-900">
              {skill.category}
            </h3>

          <p className="mt-1 text-sm leading-6 text-gray-700">
            {skill.items.join(" • ")}
         </p>
          </div>
        ))}
      </div>
    </ResumeSection>
    )
}