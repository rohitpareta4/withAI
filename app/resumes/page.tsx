"use client"

import { get_resume } from "@/features/resume/services/resume.services";
// import ClassicATS from "../templates/ClassicATS";
import ClassicATS from "@/features/resume/templates/ClassicATS";
// import Modern from "../templates/Modern";
import Modern from "@/features/resume/templates/Modern";
// import Professional from "../templates/Professional";
import Professional from "@/features/resume/templates/Professional";
import { useState } from "react";
import { useEffect } from "react";
// import { ResumeData } from "@/features/resume/types/resume.types";
import { SavedResume } from "@/features/resume/types/resume.types";


export default function Savedresume(){

    // const [resumeData, setResumeData] = useState<ResumeData | null>(null);
    // const [resumeData, setResumeData] = useState([]);
    // const [resumeData, setResumeData] = useState<any[]>([]);
    const [resumeData, setResumeData] = useState<SavedResume[]>([]);

    // const [temp, setTemp] = useState<string | null>(null);

useEffect(()=>{
  const callIt=async()=>{
      try {
        const res=await get_resume()
        console.log("saved-----------------resume--------",res)
        setResumeData(res)
        // setTemp(res.template)
      } catch (error) {
        console.log(error)
      }
  }
  callIt()
},[])

  if (!resumeData) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  
    return(
        <div className="flex flex-1 items-start justify-center overflow-auto bg-slate-900 p-8">
            {
    resumeData.map((item) => {
        switch(item?.template){

            case "classic":
                return (
                    <ClassicATS
                        key={item.id}
                        data={item.resume_data}
                    />
                );

            case "modern":
                return (
                    <Modern
                        key={item.id}
                        data={item.resume_data}
                    />
                );

            case "professional":
                return (
                    <Professional
                        key={item.id}
                        data={item.resume_data}
                    />
                );

            default:
                return null;
        }
    })
}
     </div>
    )
}

// export default function SavedResume() {
//   return <h1>Saved Resume Page</h1>;
// }