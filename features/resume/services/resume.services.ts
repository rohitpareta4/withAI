import api from "@/lib/axios";
import { ResumeData } from "../types/resume.types";


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

export const get_resume=async()=>{
    try {
        const res=await api.get("/resume/getresume")
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}