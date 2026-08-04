"use client";

import { useSearchParams } from "next/navigation";

import { dummyResume } from "../data/dummyResume";
import { useState } from "react";
import ClassicATS from "../templates/ClassicATS";
import Modern from "../templates/Modern";
import Professional from "../templates/Professional";

import ResumeSidebar from "./ResumeSidebar";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import SkillForm from "./SkillForm";
import ProjectForm from "./ProjectForm";
import ExperienceForm from "./ExperienceForm";
// import { resume } from "react-dom/server";
import CertificateForm from "./CertificateForm";

export default function ResumeEditor() {
  const searchParams = useSearchParams();
  const template = searchParams.get("template");

  const [resumeData,setResumeData]=useState(dummyResume)
  console.log("resume_data..............",resumeData)

  const [activesection,setActivesection]=useState("personal")

  let ResumeComponent;

  switch (template) {
    case "classic":
      ResumeComponent = <ClassicATS data={resumeData} />;
      break;

    case "modern":
      ResumeComponent = <Modern data={resumeData} />;
      break;

    case "professional":
      ResumeComponent = <Professional data={resumeData} />;
      break;

    default:
      ResumeComponent = <ClassicATS data={resumeData} />;
  }

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="flex h-screen">
        <ResumeSidebar template={template ?? "classic"} resumeData={resumeData} activesection={activesection} setActivesection={setActivesection}/>

        <div className="w-[420px] overflow-y-auto border-r border-slate-800 bg-slate-950 p-6"> 
          {activesection==="personal" && (
            <PersonalForm
           personal={resumeData.personal}
           setResumeData={setResumeData}
           />
          )}

          {activesection==="education" && (
             <EducationForm education={resumeData.education} setResumeData={setResumeData}/>
          )}

          {activesection==="skills" && (
            <SkillForm skills={resumeData.skills} setResumeData={setResumeData}/>
          )}

          {activesection==="projects" && (
            <ProjectForm projects={resumeData.projects} setResumeData={setResumeData}/>
          )}

          {activesection==="experience" && (
            <ExperienceForm experience={resumeData.experience} setResumeData={setResumeData}/>
          )}

          {activesection==="certificates" && (
            <CertificateForm certificates={resumeData.certificates} setResumeData={setResumeData}/>
          )}
        </div> 

        <div className="flex flex-1 items-start justify-center overflow-auto bg-slate-900 p-8">
          {ResumeComponent}
        </div>
      </div>
    </section>
  );
}

