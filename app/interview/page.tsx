// "use client";

// import { useRouter } from "next/navigation";
// import { ArrowRight } from "lucide-react";

// export default function InterviewPage() {
//   const router = useRouter();

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
//       <div className="max-w-2xl text-center">
//         <h1 className="text-5xl font-bold">
//           AI Mock Interview
//         </h1>

//        <div className="mt-8 space-y-4 text-left">
//   <div className="flex items-start gap-3">
//     <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
//     <p className="text-lg leading-7 text-slate-400">
//       <span className="font-semibold text-cyan-400">Practice</span> real technical and HR interviews with an AI interviewer.
//     </p>
//   </div>

//   <div className="flex items-start gap-3">
//     <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
//     <p className="text-lg leading-7 text-slate-400">
//       <span className="font-semibold text-cyan-400">Practice</span> answering questions naturally using your voice.
//     </p>
//   </div>

//   <div className="flex items-start gap-3">
//     <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
//     <p className="text-lg leading-7 text-slate-400">
//       <span className="font-semibold text-cyan-400">Practice</span> with instant AI feedback to improve every response.
//     </p>
//   </div>

//   <div className="flex items-start gap-3">
//     <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
//     <p className="text-lg leading-7 text-slate-400">
//       <span className="font-semibold text-cyan-400">Practice</span> until you're confident enough to crack your dream job.
//     </p>
//   </div>
// </div>

//         <button
//           onClick={() => router.push("/interview/setup")}
//           className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
//         >
//           Start Interview
//         </button>
//       </div>
//     </main>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

export default function InterviewPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col items-center justify-center">

        {/* Header */}
        <div className="max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            <Sparkles size={16} />
            AI Mock Interview
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Prepare for your next
            <span className="text-cyan-400"> interview.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Practice with an AI interviewer or let WithAI analyze your
            GitHub project and create a personalized technical interview.
          </p>
        </div>

        {/* Options */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">

          {/* General Interview */}
          <button
            onClick={() => router.push("/interview/setup")}
            className="
              group rounded-2xl border border-slate-800
              bg-slate-900/70 p-6 text-left
              transition duration-200
              hover:-translate-y-1
              hover:border-cyan-500/40
              hover:bg-slate-900
              sm:p-8
            "
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Code2 size={24} />
              </div>

              <ArrowRight
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                size={22}
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
              Start a General Interview
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              Choose your interview domain, difficulty level, and number of
              questions. Practice technical or HR interviews with AI.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                DSA
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Web Development
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                HR
              </span>
            </div>

            <div className="mt-7 text-sm font-medium text-cyan-400">
              Configure interview →
            </div>
          </button>

          {/* GitHub Interview */}
          <button
            onClick={() => router.push("/interview/github")}
            className="
              group rounded-2xl border border-slate-800
              bg-slate-900/70 p-6 text-left
              transition duration-200
              hover:-translate-y-1
              hover:border-purple-500/40
              hover:bg-slate-900
              sm:p-8
            "
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                {/* <Github size={24} /> */}
              </div>

              <ArrowRight
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-purple-400"
                size={22}
              />
            </div>

            <h2 className="mt-6 text-xl font-semibold sm:text-2xl">
              Interview From GitHub
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
              Enter your GitHub repository and let AI analyze your project,
              technologies, architecture, and code to generate personalized
              questions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Project Based
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Code Analysis
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Personalized
              </span>
            </div>

            <div className="mt-7 text-sm font-medium text-purple-400">
              Analyze repository →
            </div>
          </button>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-xs text-slate-600 sm:text-sm">
          Practice technical, project-based, and behavioral interviews with AI.
        </p>
      </div>
    </main>
  );
}