// export default function HeroSection() {
//   return (
//     <section className="bg-black text-white">
//       <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
//         {/* Badge */}
//         <div className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
//           🚀 AI Powered Placement Platform
//         </div>

//         {/* Heading */}
//         <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
//           Crack Your Dream Job with{" "}
//           <span className="text-cyan-400">WithAI</span>
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
//           Build ATS-friendly resumes, practice AI mock interviews,
//           manage your preparation with smart todos, and track your
//           placement journey—all in one platform.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//           <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600">
//             Get Started
//           </button>

//           <button className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
//             Explore Features
//           </button>
//         </div>

//         {/* Feature Cards */}
//         <div className="mt-20 grid w-full gap-6 md:grid-cols-3">
//           <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
//             <h3 className="text-xl font-semibold text-cyan-400">
//               📄 Resume Builder
//             </h3>

//             <p className="mt-3 text-slate-400">
//               Choose professional templates, fill your details once,
//               and generate beautiful ATS-friendly resumes instantly.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
//             <h3 className="text-xl font-semibold text-cyan-400">
//               🤖 AI Mock Interview
//             </h3>

//             <p className="mt-3 text-slate-400">
//               Practice real interview questions with AI and receive
//               instant feedback to improve your confidence.
//             </p>
//           </div>

//           <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
//             <h3 className="text-xl font-semibold text-cyan-400">
//               ✅ Smart Todo
//             </h3>

//             <p className="mt-3 text-slate-400">
//               Organize your preparation with intelligent task
//               management and never miss an important deadline.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HeroSection() {
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
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            🚀 AI Powered Placement Platform
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Crack Your
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Dream Job
            </span>
            with WithAI
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Build ATS resumes, practice AI interviews and manage your placement
            journey—all in one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold transition hover:bg-cyan-400">
              Get Started
            </button>

            <button className="rounded-xl border border-slate-700 px-7 py-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
              Explore
            </button>
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
                <span>🔥 Learning Streak</span>
                <span className="text-cyan-400">25 Days</span>
              </div>

              <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4">
                <p className="text-sm text-slate-300">
                  Everything you need to prepare for placements in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}