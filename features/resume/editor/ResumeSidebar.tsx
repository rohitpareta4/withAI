"use client";

import {
  User,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Wrench,
  Award,
  Download,
} from "lucide-react";
import React from "react";


import { ResumeData } from "../types/resume.types";
import { createresume } from "../services/resume.services";

const sections = [
  {
    id: "personal",
    label: "Personal",
    icon: User,
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Wrench,
  },
  {
    id: "certificates",
    label: "Certificates",
    icon: Award,
  },
];

interface props{
  template:string
    resumeData:ResumeData;
    activesection:string;
    setActivesection:React.Dispatch<React.SetStateAction<string>>;
}

export default function ResumeSidebar({template,resumeData,activesection,setActivesection}:props) {


  const handleresume=async()=>{
    try {
       const res=await createresume("My resume",template,resumeData)
       console.log(res)
    } catch (error) {
      console.log(error)
      throw error
    }
  }


  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950">
        <div className="border-b border-slate-800 p-6">

        <h2 className="text-2xl font-bold text-white">
          Resume Builder
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Build your ATS-friendly resume
        </p>

      </div>
        <div className="flex-1 p-2">
            {sections.map((item)=>{
                const Icon=item.icon
                return(

                 <div key={item.id}>
                    <button onClick={()=>setActivesection(item.id)} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-300 transition-all hover:bg-cyan-500/10 hover:text-cyan-400">
                    <Icon size={20}/>
                    <h2>
                        {item.label}
                    </h2>
                    </button>
                 </div>
                )
})}
        </div>

         <div className="border-t border-slate-800 p-4">

        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400 bottom-0"
          onClick={handleresume}
        >
          <Download size={18} />

          Download PDF
        </button>

      </div>
    </aside>
  )}