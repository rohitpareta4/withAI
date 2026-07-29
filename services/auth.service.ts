import api from "@/lib/axios"
import { LoginFormData, RegisterFormData } from "@/schemas/auth.schemas"

export const register=async(data:RegisterFormData)=>{
   console.log("register data",data)
   try {
    const res=await api.post("/auth/register",data)
    return res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}

export const login=async(data:LoginFormData)=>{
   console.log("data;;;;;;;;;;;",data)
   try {
    const res=await api.post("/auth/login",data)
    return res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}

export const authme=async()=>{
   try {
      const res=await api.get("/auth/authme")
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}
