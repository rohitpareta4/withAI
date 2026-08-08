"use client"
import { Plus } from "lucide-react";

interface Todoheadersprops{
    Totaltodo:number;
    onAddtodo:()=>void;
}

export default function Todoheaders({Totaltodo,onAddtodo}:Todoheadersprops){
    return(
          <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          My Todos
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          {Totaltodo} {Totaltodo === 1 ? "task" : "tasks"} in total
        </p>
      </div>

      <button
        onClick={onAddtodo}
        className="flex items-center gap-2 px-4 py-2 rounded-lg
                   bg-white text-black font-medium
                   hover:bg-gray-200 transition"
      >
        <Plus size={18} />
        Add Todo
      </button>
    </div>
    )
}