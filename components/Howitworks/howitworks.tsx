"use client";

import {
  UserPlus,
  User,
  FileText,
  Bot,
  CheckSquare,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description: "Sign up and unlock your AI placement workspace.",
  },
  {
    icon: User,
    title: "Complete Profile",
    description: "Personalize your journey with academic details.",
  },
  {
    icon: FileText,
    title: "Build Resume",
    description: "Generate an ATS-friendly resume in minutes.",
  },
  {
    icon: Bot,
    title: "AI Interview",
    description: "Practice interviews with instant AI feedback.",
  },
  {
    icon: CheckSquare,
    title: "Daily Progress",
    description: "Track goals and maintain your learning streak.",
  },
  {
    icon: Briefcase,
    title: "Get Hired",
    description: "Apply confidently and land your dream job.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Your Placement
            <span className="text-cyan-400"> Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Follow six simple steps and prepare for placements with AI.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Line */}

          <div className="absolute left-7 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent" />

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="group relative flex items-start gap-8"
                >
                  {/* Circle */}

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.25)] transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  {/* Card */}

                  <div className="relative flex-1 overflow-hidden rounded-3xl border border-slate-800 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]">
                    {/* Number */}

                    <div className="absolute right-6 top-4 text-6xl font-black text-slate-800">
                      0{index + 1}
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl leading-7 text-slate-400">
                      {step.description}
                    </p>

                    {/* Bottom Glow */}

                    <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}