import ResumeSection from "./ResumeSection";
import { Project } from "@/features/resume/types/resume.types";

interface Projectsectionprops{
    projects:Project[];
}

export default function Projectsection({projects}:Projectsectionprops){
    return(
        <ResumeSection title="Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id}>
            {/* Project Name */}

            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                {project.title}
              </h3>

              <span className="text-xs text-gray-500">
                {project.startDate} - {project.endDate}
              </span>
            </div>

            {/* Tech Stack */}

            <p className="mt-1 text-sm italic text-gray-600">
              {project.techStack.join(" • ")}
            </p>

            {/* Links */}

            {(project.github || project.liveLink) && (
              <div className="mt-1 text-xs text-blue-600">
                {project.github && (
                  <span>GitHub: {project.github}</span>
                )}

                {project.github && project.liveLink && " | "}

                {project.liveLink && (
                  <span>Live: {project.liveLink}</span>
                )}
              </div>
            )}

            {/* Description */}

            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ResumeSection>
    )
}