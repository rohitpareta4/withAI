import { convertOffsetToTimes } from "framer-motion";
import { CreateNote } from "../types/notes.types";
import api from "@/lib/axios";
import { UpdateNote } from "../types/notes.types";

export const add_note = async (data: CreateNote) => {
  try {
    const res = await api.post("/note/addnote", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const get_notes = async () => {
  try {
    const res = await api.get("/note/getNote");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const delete_note=async(id:number)=>{
  try {
    const res=await api.post(`/note/deleteNote/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const editNote=async(data:UpdateNote)=>{
  try {
    const res=await api.post(`/note/editNote/${data.id}`,{title:data.title,note:data.note})
    return res.data
  } catch (error) {
    console.log(error)
  }
}