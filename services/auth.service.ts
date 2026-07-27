import api from "@/lib/axios"

export const register=async()=>{
   try {
    const res=await api.post("/auth/register")
    return res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}

export const login=async()=>{
   try {
    const res=await api.post("/auth/login")
    return res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}
