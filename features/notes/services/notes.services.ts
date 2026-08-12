import { CreateNote } from "../types/notes.types";
import api from "@/lib/axios";

export const add_note = async (data: CreateNote) => {
  try {
    const res = await api.post("/note/addnote", data);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};