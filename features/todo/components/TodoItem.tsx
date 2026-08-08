 
interface Todo{
    id:number;
    title:string;
    completed:boolean
}

interface itemsoftodo{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}



 export default function Todoitems({todos,setTodos}:itemsoftodo){
   
    const handleChange=(item:Todo)=>{
      setTodos((prev)=>
        prev.map((todo)=>
            todo.id===item.id?{...todo,completed:!todo.completed}:todo
        )
    )
}

    return(
      <div>
         {todos.map((item)=>(
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
             </div>
         ))}
      </div>
    )
 }

