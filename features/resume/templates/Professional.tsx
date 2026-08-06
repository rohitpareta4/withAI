import { ResumeData } from "../types/resume.types";

import ResumeSection from "@/components/resume/ResumeSection";
import Skillsection from "@/components/resume/Skillsection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import Projectsection from "@/components/resume/Projectsection";

interface Props {
  data: ResumeData;
}

export default function Professional({ data }: Props) {
  return (
    <div className="mx-auto min-h-[1123px] w-[794px] overflow-hidden bg-white text-black shadow-xl">

      <div className="grid grid-cols-12">

        {/* ================= LEFT SIDEBAR ================= */}

        <aside className="col-span-4 bg-[#0F2745] px-7 py-8 text-white">

          {/* Profile */}

          <div className="flex flex-col items-center">

            <div className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-white bg-slate-500 text-5xl font-bold">
              {data.personal.firstName[0]}
              {data.personal.lastName[0]}
            </div>

            <h2 className="mt-5 text-center text-2xl font-bold">
              {data.personal.firstName} {data.personal.lastName}
            </h2>

            <p className="mt-1 text-sm tracking-widest text-yellow-400 uppercase">
              {data.personal.jobTitle}
            </p>

          </div>

          {/* Contact */}

          <div className="mt-12">

            <h3 className="mb-5 border-b border-yellow-400 pb-2 text-lg font-semibold uppercase tracking-wider text-yellow-400">
              Contact
            </h3>

            <div className="space-y-3 text-sm">

              <p>{data.personal.email}</p>

              <p>{data.personal.phone}</p>

              <p>{data.personal.location}</p>

              <p>{data.personal.linkedin}</p>

              <p>{data.personal.github}</p>

              <p>{data.personal.portfolio}</p>

            </div>

          </div>

          {/* Skills */}

          <div className="mt-12">

            <h3 className="mb-5 border-b border-yellow-400 pb-2 text-lg font-semibold uppercase tracking-wider text-yellow-400">
              Skills
            </h3>

            <Skillsection skills={data.skills} dark/>

          </div>

          {/* Education */}

          <div className="mt-12">

            <h3 className="mb-5 border-b border-yellow-400 pb-2 text-lg font-semibold uppercase tracking-wider text-yellow-400">
              Education
            </h3>

            <div className="space-y-6">

              {data.education.map((edu) => (
                <div key={edu.id}>

                  <h4 className="font-semibold">
                    {edu.degree}
                  </h4>

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

        {/* ================= RIGHT ================= */}

        <main className="col-span-8 px-8 py-8">

          {/* Header */}

          <div>

            <h1 className="text-5xl font-extrabold tracking-wide text-[#0F2745] uppercase">
              {data.personal.firstName} {data.personal.lastName}
            </h1>

            <p className="mt-3 text-xl font-semibold uppercase tracking-[0.3em] text-yellow-600">
              {data.personal.jobTitle}
            </p>

          </div>

          {/* Summary */}

          <ResumeSection title="Professional Summary">

            <p>{data.personal.summary}</p>

          </ResumeSection>

          {/* Experience */}

          <ExperienceSection experience={data.experience} />

          {/* Projects */}

          <Projectsection projects={data.projects} />

          {/* Certificates */}

          <ResumeSection title="Certifications">

            <div className="space-y-5">

              {data.certificates.map((certificate) => (

                <div key={certificate.id}>

                  <h4 className="font-semibold">
                    {certificate.title}
                  </h4>

                  <p className="text-sm text-gray-600">
                    {certificate.organization}
                  </p>

                </div>

              ))}

            </div>

          </ResumeSection>

        </main>

      </div>

    </div>
  );
}