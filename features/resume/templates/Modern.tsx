import { ResumeData } from "../types/resume.types";

import ResumeHeader from "@/components/resume/ResumeHeader";
import ResumeSection from "@/components/resume/ResumeSection";
import Skillsection from "@/components/resume/Skillsection";
import Projectsection from "@/components/resume/Projectsection";
import ExperienceSection from "@/components/resume/ExperienceSection";

interface Props {
  data: ResumeData;
}

export default function Modern({ data }: Props) {
  return (
    <div className="mx-auto min-h-[1123px] w-[794px] bg-white text-black shadow-lg">
      <div className="grid grid-cols-12">
        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="col-span-4 bg-slate-900 px-6 py-8 text-white">
          {/* Profile */}

          <div className="flex flex-col items-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-cyan-400 bg-slate-700 text-4xl font-bold">
              {data.personal.firstName[0]}
              {data.personal.lastName[0]}
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold">
              {data.personal.firstName} {data.personal.lastName}
            </h2>

            <p className="text-cyan-300">
              {data.personal.jobTitle}
            </p>
          </div>

          {/* Contact */}

          <div className="mt-10">
            <h3 className="mb-4 border-b border-slate-700 pb-2 text-lg font-semibold uppercase">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-slate-300">
              <p>{data.personal.email}</p>
              <p>{data.personal.phone}</p>
              <p>{data.personal.location}</p>
              <p>{data.personal.linkedin}</p>
              <p>{data.personal.github}</p>
              <p>{data.personal.portfolio}</p>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-10">
            <h3 className="mb-4 border-b border-slate-700 pb-2 text-lg font-semibold uppercase">
              Skills
            </h3>

            <Skillsection skills={data.skills} dark />
          </div>

          {/* Education */}

          <div className="mt-10">
            <h3 className="mb-4 border-b border-slate-700 pb-2 text-lg font-semibold uppercase">
              Education
            </h3>

            <div className="space-y-5">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-semibold">{edu.degree}</h4>

                  <p className="text-sm text-slate-300">
                    {edu.college}
                  </p>

                  <p className="text-xs text-slate-400">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ================= RIGHT CONTENT ================= */}

        <main className="col-span-8 px-8 py-8">
          <ResumeHeader personal={data.personal} />

          <ResumeSection title="Professional Summary">
            <p>{data.personal.summary}</p>
          </ResumeSection>

          <ExperienceSection experience={data.experience} />

          <Projectsection projects={data.projects} />

          {data.certificates.length > 0 && (
            <ResumeSection title="Certificates">
              <div className="space-y-4">
                {data.certificates.map((item) => (
                  <div key={item.id}>
                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-sm">
                      {item.organization}
                    </p>
                  </div>
                ))}
              </div>
            </ResumeSection>
          )}
        </main>
      </div>
    </div>
  );
}
