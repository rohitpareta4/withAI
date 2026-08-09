import api from "@/lib/axios";
import { createTodo,Todo } from "../types/todo.types";
import { UpdateTodo } from "../types/todo.types";
import { title } from "process";

export const add_todo=async(data:createTodo):Promise<Todo>=>{
   try {
      const res=await api.post("/todo/Add",data)
      return  res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}

export const get_todos=async()=>{
   try {
      const res=await api.get("/todo/getTodos")
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}

export const update_todo=async(data:UpdateTodo):Promise<Todo>=>{
   try {
      const res=await api.post(`/todo/update/${data.id}`,{title:data.title,completed:data.completed})
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}

export const getupdate_todo=async()=>{
   try {
      const res=await api.get("/todo/getupdateTodo")
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}

export const deleteTodo=async(id:number)=>{
   try {
      const res=await api.post(`/todo/deleteTodo/${id}`)
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}

export const updateTitle=async(id:number,title:string)=>{
   try {
      const res=await api.post(`/todo/updatetitle/${id}`,{title})
      return res.data
   } catch (error) {
      console.log(error)
      throw error
   }
}