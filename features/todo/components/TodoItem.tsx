 
interface Todo{
    id:number;
    title:string;
    completed:boolean
}

interface itemsoftodo{
    todos:Todo[];
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setSelectedTodoId:React.Dispatch<React.SetStateAction<number | null>>;
    setIstodoupdate:React.Dispatch<React.SetStateAction<boolean>>;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

import Todo from "@/app/todo/page";
import { update_todo,getupdate_todo } from "../services/todo.services";
import { useEffect } from "react";
import { deleteTodo } from "../services/todo.services";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { error } from "console";

 export default function Todoitems({todos,setTodo,setSelectedTodoId,setIstodoupdate,setShowForm}:itemsoftodo){

     const updateTodo=(item:Todo)=>{
      console.log("item-----data",item)
      setShowForm(true)
      setTodo(item.title)
      setIstodoupdate(true)
      setSelectedTodoId(item.id)
     }

     const queryclient= useQueryClient()

 

 const deleteMutation = useMutation({
  mutationFn: ({ id }: { id: number }) => deleteTodo(id),

  onSuccess: (_, variables) => {
    queryclient.setQueryData<Todo[]>(
      ["todos"],
      (oldtodos = []) =>
        oldtodos.filter((item) => item.id !== variables.id)
    );
  },

  onError: (error) => {
    console.log(error);
  },
});

const handledelete = (id: number) => {
  deleteMutation.mutate({ id });
};

   
    const handleChange=async(item:Todo)=>{

      const updateObj={
        id:item.id,
        title:item.title,
        completed:item.completed
      }

      const res=await update_todo(updateObj)
      console.log("updateObj----------------res",res)
     
    console.log("check-----------------",item)

      setTodos((prev)=>
        prev.map((todo)=>
            todo.id===item.id?{...todo,completed:!todo.completed}:todo
        )
    )
}


    return(
      <div className="flex flex-col gap-3">
         {todos?.map((item)=>(
             <div key={item.id} 
               className="
              flex items-center gap-3
              rounded-xl
              border border-zinc-800
              bg-zinc-950
              px-4 py-4
              transition
              hover:border-zinc-700
          "
             >
                <input type="checkbox" checked={item.completed} onChange={()=>handleChange(item)} 
                   className="
                   h-5 w-5
                   shrink-0
                   cursor-pointer
                   accent-white
                  "
                />
                          <h2
            className={`
              min-w-0 flex-1
              break-words
              text-sm sm:text-base
              ${
                item.completed
                  ? "text-zinc-500 line-through"
                  : "text-zinc-200"
              }
            `}
          >
            {item.title}
          </h2>
            <div className="flex items-center gap-2">
  <button
    type="button" className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white active:scale-95"
    onClick={()=>updateTodo(item)}
  >
    UPDATE
  </button>

  <button
    type="button" className=" rounded-lg border border-red-900/60 bg-red-950/30 px-3 py-2 text-xs font-medium text-red-400 transition  hover:border-red-700  hover:bg-red-950/60 hover:text-red-300 active:scale-95"
    onClick={()=>handledelete(item.id)}
  >
    DELETE
  </button>
</div>
             </div>
         ))}
      </div>
    )
 }

