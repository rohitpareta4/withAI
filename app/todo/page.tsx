"use client"
import { useState } from "react"
import Todoheaders from "@/features/todo/components/Todoheaders"

export default function Todo(){
  
    const [todos,setTodos]=useState([])
    const [showform,setShowForm]=useState(false)

    const showtodos=()=>{
        setShowForm(true)
        setTodos(todos)
    }

    return(
        <div>
        <div>
          <Todoheaders Totaltodo={todos.length} onAddtodo={showtodos}/>
        </div>
    <div>
        {showform && (
            <form>
              <input placeholder="Todo"/>
            </form>
            
        )}
     </div>
     </div>
    )
}