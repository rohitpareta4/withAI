import api from "@/lib/axios";
import { createTodo,Todo } from "../types/todo.types";

export const add_todo=async(data:createTodo):Promise<Todo>=>{
   try {
      const res=await api.post("/todo/Add",data)
      return  res.data
   } catch (error) {
    console.log(error)
    throw error
   }
}