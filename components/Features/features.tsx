
"use client";

import {
  Bot,
  FileText,
  CheckSquare,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    name:'resumebuilder',
    title: "Resume Builder",
    desc: "Professional ATS-friendly resumes.",
    icon: FileText,
  },
  {
    name:'interview',
    title: "AI Interview",
    desc: "Practice with AI anytime.",
    icon: Bot,
  },
  {
    name:'todo',
    title: "Smart Todo",
    desc: "Track daily preparation.",
    icon: CheckSquare,
  },
  {
    name:'notes',
    title: "Notes",
    desc: "Make Notes",
    icon: Sparkles,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need to
            <span className="text-cyan-400"> Get Hired</span>
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            One platform for resumes, AI interviews and placement
            preparation.
          </p>
        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Link key={feature.title} href={`/${feature.name}`}>
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
              >
                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.desc}
                </p>

                {/* Fake Preview */}

                <div className="mt-8 rounded-2xl border border-slate-800 bg-black/40 p-4">
                  <div className="mb-3 h-2 w-20 rounded bg-cyan-400" />

                  <div className="mb-2 h-2 rounded bg-slate-800" />
                  <div className="mb-2 h-2 w-4/5 rounded bg-slate-800" />
                  <div className="h-2 w-2/3 rounded bg-slate-800" />
                </div>

                {/* Link */}

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  Explore
                  <ArrowUpRight size={16} />
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}