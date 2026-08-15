import api from "@/lib/axios"
import { createinterviewrequest } from "../types/interview.types"


export const create_interview=async(data:createinterviewrequest)=>{
    console.log("interview.......................data",data)
 try {
    const res=await api.post("/Interview/session",data)
    return res.data
 } catch (error) {
    console.log(error)
 }

}

export const get_interview=async(id:string)=>{
    try {
        const res=await api.get(`/Interview/getdetails/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const addGithub=async(data:string)=>{
    try {
        const res=await api.post("/Interview/giturl",{github_url:data})
        return res.data
    } catch (error) {
        console.log(error)
    }
}