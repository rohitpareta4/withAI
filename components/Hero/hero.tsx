export default function HeroSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <div className="mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
          🚀 AI Powered Placement Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Crack Your Dream Job with{" "}
          <span className="text-cyan-400">WithAI</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
          Build ATS-friendly resumes, practice AI mock interviews,
          manage your preparation with smart todos, and track your
          placement journey—all in one platform.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400">
            Explore Features
          </button>
        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-400">
              📄 Resume Builder
            </h3>

            <p className="mt-3 text-slate-400">
              Choose professional templates, fill your details once,
              and generate beautiful ATS-friendly resumes instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-400">
              🤖 AI Mock Interview
            </h3>

            <p className="mt-3 text-slate-400">
              Practice real interview questions with AI and receive
              instant feedback to improve your confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition hover:border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-400">
              ✅ Smart Todo
            </h3>

            <p className="mt-3 text-slate-400">
              Organize your preparation with intelligent task
              management and never miss an important deadline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}