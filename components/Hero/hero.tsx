"use client"

import Link from "next/link";
import { useState,useEffect } from "react";
import { get_todos } from "@/features/todo/services/todo.services";
import { object } from "zod";
import { data } from "framer-motion/client";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt:Date
}

export default function HeroSection() {

  const [todos, setTodos] = useState<Todo[]>([]);

   useEffect(() => {
    const getTodoData = async () => {
      try {
        const res = await get_todos();

        console.log("todos:", res);

        setTodos(res);
      } catch (error) {
        console.log(error);
      }
    };

    getTodoData();
  }, []);

  const todosByDate = todos.reduce((acc, todo) => {
  const date = new Date(todo.createdAt)
    .toISOString()
    .split("T")[0];

  if (!acc[date]) {
    acc[date] = {
      total: 0,
      completed: 0,
      percent:0
    };
  }

  acc[date].total++;

  if (todo.completed) {
    acc[date].completed++;
  }

  acc[date].percent=(acc[date].completed/acc[date].total)*100

  return acc;
}, {} as Record<string, { total: number; completed: number, percent:number}>);

console.log("todosByDate..............",todosByDate)
console.log(typeof todosByDate)

  // -----------------------------
  // TODO ACTIVITY CALCULATION
  // -----------------------------

  const totalTodos = todos.length;

  let completedTodos = 0;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i]?.completed === true) {
      completedTodos++;
    }
  }

  let percentage = 0;

  if (totalTodos > 0) {
    percentage = Math.round(
      (completedTodos / totalTodos) * 100
    );
  }

  // -----------------------------
  // ACTIVITY COLOR
  // -----------------------------

  let activityColor = "bg-slate-800";

  if (percentage > 0 && percentage < 25) {
    activityColor = "bg-green-950";
  } else if (percentage >= 25 && percentage < 50) {
    activityColor = "bg-green-800";
  } else if (percentage >= 50 && percentage < 75) {
    activityColor = "bg-green-600";
  } else if (percentage >= 75) {
    activityColor = "bg-green-400";
  }
  

  //streak code
  let streak=0;
  let previousDatepreviousDate=null
  for(const [date,data] of Object.entries(todosByDate)){
    const currentDate=new Date(date)
    if(previousDatepreviousDate!==null){
      const diff=(currentDate.getTime()-previousDatepreviousDate.getTime())/(1000*60*60*24)
      if(diff>1){
        streak=0;
      }
    }
  
    if(data.total-data.completed==0){
      streak++;
    }
    else{
      streak=0;
    }
    previousDatepreviousDate=currentDate

  }
  console.log("streak.............",streak)

  const dates=[]
  for(let i=0;i<30;i++){
    const date=new Date()
    date.setDate(date.getDate()-i)

    dates.push(date)
  }



  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]" />

        <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center gap-16 px-6 lg:flex-row flex-col">
        {/* Left */}

        <div className="max-w-2xl">
        

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Build Your
         <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
               Career
         </span>
            with AI
          </h1>

<p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
  Create resumes, practice interviews, make notes, manage your tasks,
  and stay on track—all in one place.
</p>

          <div className="mt-10 flex flex-wrap gap-4">
          

          <Link
         href="#features"
         className="rounded-xl border border-slate-700 px-7 py-3 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-400 hover:text-black hover:font-semibold"
                 >
             Explore
           </Link>
          </div>
        </div>

        {/* Right */}

  

        <div className="w-full max-w-md">



          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,.12)]">
            <h3 className="text-lg font-semibold">Your Dashboard</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl bg-slate-900 p-4 flex items-center justify-between">
                <span>📄 Resume Builder</span>
                <span className="text-cyan-400">Ready</span>
              </div>

              <div className="rounded-xl bg-slate-900 p-4 flex items-center justify-between">
                <span>🤖 Mock Interview</span>
                <span className="text-cyan-400">Start</span>
              </div>

              <div className="rounded-xl bg-slate-900 p-4 flex items-center justify-between">
                <span>🔥 Streak</span>
                <span className="text-cyan-400">{streak} Days</span>
              </div>

              
               <div className="mt-4 flex flex-wrap gap-1.5">
                 {dates.map((item) => {
    const dateKey = item.toISOString().split("T")[0];
    const data = todosByDate[dateKey];

    let color = "bg-gray-200";

    if (data) {
        if (data.percent === 100) {
            color = "bg-green-700";
        } else if (data.percent >= 75) {
            color = "bg-green-500";
        } else if (data.percent >= 50) {
            color = "bg-green-400";
        } else if (data.percent > 0) {
            color = "bg-green-200";
        }
    }

    return (
        <div
            key={dateKey}
            className={`w-6 h-6 rounded-sm ${color}`}
            title={`${dateKey}`}
        />
    );
})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}