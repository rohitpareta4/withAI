import { PersonalInfo } from "@/features/resume/types/resume.types";
import { Mail,MapPin,Phone  } from "lucide-react";

interface resumeheaderprops{
    personal:PersonalInfo
}

export default function ResumeHeader({
    personal,
}:resumeheaderprops){
    return(
        <header className="border-b border-gray-300 pb-6">

      {/* Name */}

      <h1 className="text-center text-[34px] font-light uppercase tracking-[3px]">
        {personal.firstName} {personal.lastName}
      </h1>

      {/* Job Title */}

      <p className="mt-2 text-center text-lg text-gray-600">
        {personal.jobTitle}
      </p>

      {/* Contact */}

      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[13px] text-gray-700">

        <div className="flex items-center gap-2">
          <Phone size={14} />
          <span>{personal.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} />
          <span>{personal.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>{personal.location}</span>
        </div>

      </div>

      <div className="mt-3 flex justify-center">

        <div className="flex items-center gap-2 text-[13px] text-gray-700">

          {/* <Linkedin size={14} /> */}

          <span>{personal.linkedin}</span>

        </div>

      </div>

    </header>
    )
}