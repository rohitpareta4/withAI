import { Experience } from "@/features/resume/types/resume.types";
import ResumeSection from "./ResumeSection";

interface ExperienceSectionProps {
  experience: Experience[];
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <ResumeSection title="Experience">
      <div className="space-y-8">
        {experience.map((exp) => (
          <div key={exp.id}>
            {/* Company & Duration */}

            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {exp.company}
                </h3>

                <p className="text-sm font-medium text-gray-700">
                  {exp.jobTitle}
                  {exp.employmentType &&
                    ` • ${exp.employmentType}`}
                </p>
              </div>

              <div className="text-right text-xs text-gray-500">
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>

                <p>{exp.location}</p>
              </div>
            </div>

            {/* Responsibilities */}

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
              {exp.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}