"use client";

import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default function ResumeBuilderPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-950/70 p-10 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.08)]">
        {/* Icon */}

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
          <FileText size={40} />
        </div>

        {/* Badge */}

        <span className="mt-6 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Resume Builder
        </span>

        {/* Heading */}

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Build an
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {" "}ATS-Friendly Resume
          </span>
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Choose a professional template, fill in your details once,
          and generate a clean, recruiter-ready resume in minutes.
        </p>

        {/* CTA */}
   <Link href={"resumebuilder/templates"}>
        <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400">
          Create Resume
          <ArrowRight size={20} />
        </button>
    </Link>    
      </div>
    </section>
  );
}