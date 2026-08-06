import api from "@/lib/axios";
import { ResumeData } from "../types/resume.types";
// import Savedresume from "@/app/resumes/page";
import { SavedResume } from "../types/resume.types";


export const createresume=async(  title: string,
  template: string,
  resumeData: ResumeData)=>{
    console.log("**********ResumeData***********",resumeData)

    try {
        const res=await api.post("/resume/create",{title,template,resume_data:resumeData})
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// export const get_resume=async()=>{
//     try {
//         const res=await api.get("/resume/getresume")
//         return res.data
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// }
export const get_resume = async (): Promise<SavedResume[]> => {
  try {
    const res = await api.get<SavedResume[]>("/resume/getresume");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};