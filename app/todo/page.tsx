"use client";

import { useEffect, useState } from "react";
import Todoheaders from "@/features/todo/components/Todoheaders";
import Todoitems from "@/features/todo/components/TodoItem";
import { add_todo,get_todos } from "@/features/todo/services/todo.services";
import { updateTitle } from "@/features/todo/services/todo.services";
import { number } from "zod";

 
interface Todo{
    id:number;
    title:string;
    completed:boolean
}

export default function Todo() {
   const [todos, setTodos] = useState<Todo[]>([]);
  const [showform, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [istodoupdate,setIstodoupdate]=useState(false)
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const addTodo = async() => {
    if (!todo.trim()) return;
    try {
        const res=await add_todo({title:todo.trim()})
        console.log("....................res",res)
        setTodos((prev) => [...prev, res]);

    setTodo("");
    setShowForm(false);
    } catch (error) {
        console.log(error)
    }
  };

  const updateTodofn=async()=>{
    if (selectedTodoId === null) return;
     if (!todo.trim()) return;
    try {
      const res=await updateTitle(selectedTodoId,todo.trim())
      setTodos((prev) =>
     prev.map((item) =>
     item.id === res.id ? res : item
  )
);
      setShowForm(false)
      setSelectedTodoId(null)
      setIstodoupdate(false)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
    console.log("todos.................",todos)

    useEffect(()=>{
       const gettododata=async()=>{
          try {
            const res=await get_todos()
            setTodos(res)
            console.log("get--------------res",res)
          } catch (error) {
            console.log(error)
          }
       }
       gettododata()
    },[])


  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="
          w-full
          max-w-5xl
          mx-auto
          px-4
          py-6
          sm:px-6
          sm:py-8
          lg:px-8
          lg:py-10
        "
      >
        {/* Header */}
        <Todoheaders
          Totaltodo={todos?.length}
          onAddtodo={() => setShowForm(true)}
        />

        {/* Add Todo Form */}
        {showform && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if(!istodoupdate){
                addTodo();
              }
              else{
                updateTodofn();
              }
            }}
            className="
              mt-6
              w-full
              rounded-xl
              border border-zinc-800
              bg-zinc-950
              p-4
              sm:p-5
              md:p-6
            "
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write today's todo..."
                className="
                  min-w-0
                  flex-1
                  rounded-lg
                  border border-zinc-700
                  bg-zinc-900
                  px-4
                  py-3
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-zinc-500
                  focus:border-zinc-400
                  focus:ring-1
                  focus:ring-zinc-400
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-zinc-200
                  sm:w-auto
                "
              >
                {!istodoupdate?"Add Todo":"UPDATE Todo"}
              </button>
            </div>
          </form>
        )}

        {/* Todo List */}
        <div className="mt-6 space-y-3">
             <Todoitems todos={todos} setTodo={setTodo} setSelectedTodoId={setSelectedTodoId} setIstodoupdate={setIstodoupdate} setShowForm={setShowForm} setTodos={setTodos}/>
        </div>

        {/* Empty State */}
        {todos?.length === 0 && !showform && (
          <div
            className="
              mt-10
              rounded-xl
              border border-dashed border-zinc-800
              px-4
              py-12
              text-center
              sm:py-16
            "
          >
            <p className="text-sm text-zinc-500 sm:text-base">
              No todos yet.
            </p>

            <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
              Click "Add Todo" to create your first task.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}