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
    description:
      "Sign up in seconds and unlock your personalized placement workspace.",
  },
  {
    icon: User,
    title: "Complete Profile",
    description:
      "Add your academic and professional details to personalize your journey.",
  },
  {
    icon: FileText,
    title: "Build Resume",
    description:
      "Choose a modern template and generate an ATS-friendly resume effortlessly.",
  },
  {
    icon: Bot,
    title: "AI Mock Interview",
    description:
      "Practice realistic interview questions with instant AI-powered feedback.",
  },
  {
    icon: CheckSquare,
    title: "Smart Todo",
    description:
      "Organize your preparation, manage daily goals, and stay consistent.",
  },
  {
    icon: Briefcase,
    title: "Get Hired",
    description:
      "Apply confidently with a polished resume and strong interview skills.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Your Journey to{" "}
            <span className="text-cyan-400">Placement Success</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            WithAI simplifies your placement preparation by combining resume
            building, AI mock interviews, and smart productivity tools into one
            modern platform.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-400/50 to-transparent"></div>

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative flex items-start gap-6"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-500 bg-slate-950 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  {/* Card */}
                  <div className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 p-6 transition-all duration-300 hover:border-cyan-500/60 hover:bg-slate-900 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                      Step {index + 1}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
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