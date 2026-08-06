"use client"

import React from "react";
import { PersonalInfo } from "../types/resume.types"
import { ResumeData } from "../types/resume.types"


interface props{
    personal:PersonalInfo;
    setResumeData:React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function PersonalForm({personal,setResumeData}:props){

    const handlechange=(field:keyof PersonalInfo,value:string)=>{
      setResumeData((prev)=>({
        ...prev,
        personal:{
            ...prev.personal,
            [field]:value
        }
      }))
    }

    return(
        <div>
              <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white">
                      Personal Information
                 </h2>

        <p className="mt-2 text-sm text-slate-400">
          Enter your basic details.
        </p>
      </div>
      
       <form className="space-y-8">
        {/* Basic */}

        <div className="space-y-5">
          <h3 className="border-b border-slate-800 pb-2 text-lg font-semibold text-cyan-400">
            Basic Information
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={personal.firstName}
              onChange={(e) =>
                handlechange("firstName", e.target.value)
              }
            />

            <Input
              label="Last Name"
              value={personal.lastName}
              onChange={(e) =>
                handlechange("lastName", e.target.value)
              }
            />
          </div>

          <Input
            label="Job Title"
            value={personal.jobTitle}
            onChange={(e) =>
              handlechange("jobTitle", e.target.value)
            }
          />

          <Input
            type="date"
            label="Date of Birth"
            value={personal.dob}
            onChange={(e) =>
              handlechange("dob", e.target.value)
            }
          />
        </div>

        {/* Contact */}

        <div className="space-y-5">
          <h3 className="border-b border-slate-800 pb-2 text-lg font-semibold text-cyan-400">
            Contact Information
          </h3>

          <Input
            type="email"
            label="Email"
            value={personal.email}
            onChange={(e) =>
              handlechange("email", e.target.value)
            }
          />

          <Input
            label="Phone"
            value={personal.phone}
            onChange={(e) =>
              handlechange("phone", e.target.value)
            }
          />

          <Input
            label="Location"
            value={personal.location}
            onChange={(e) =>
              handlechange("location", e.target.value)
            }
          />
        </div>

        {/* Links */}

        <div className="space-y-5">
          <h3 className="border-b border-slate-800 pb-2 text-lg font-semibold text-cyan-400">
            Professional Links
          </h3>

          <Input
            label="LinkedIn"
            value={personal.linkedin}
            onChange={(e) =>
              handlechange("linkedin", e.target.value)
            }
          />

          <Input
            label="GitHub"
            value={personal.github}
            onChange={(e) =>
              handlechange("github", e.target.value)
            }
          />

          <Input
            label="Portfolio"
            value={personal.portfolio}
            onChange={(e) =>
              handlechange("portfolio", e.target.value)
            }
          />
        </div>

        {/* Summary */}

        <div className="space-y-5">
          <h3 className="border-b border-slate-800 pb-2 text-lg font-semibold text-cyan-400">
            Professional Summary
          </h3>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Summary
            </label>

            <textarea
              rows={6}
              value={personal.summary}
              onChange={(e) =>
                handlechange("summary", e.target.value)
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />
          </div>
        </div>
      </form>



        </div>
    )
}

interface InputProps {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  type?: string;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>
  );
}