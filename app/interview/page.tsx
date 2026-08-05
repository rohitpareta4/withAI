"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function InterviewPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold">
          AI Mock Interview
        </h1>

       <div className="mt-8 space-y-4 text-left">
  <div className="flex items-start gap-3">
    <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
    <p className="text-lg leading-7 text-slate-400">
      <span className="font-semibold text-cyan-400">Practice</span> real technical and HR interviews with an AI interviewer.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
    <p className="text-lg leading-7 text-slate-400">
      <span className="font-semibold text-cyan-400">Practice</span> answering questions naturally using your voice.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
    <p className="text-lg leading-7 text-slate-400">
      <span className="font-semibold text-cyan-400">Practice</span> with instant AI feedback to improve every response.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <ArrowRight size={18} className="mt-1 text-cyan-400 flex-shrink-0" />
    <p className="text-lg leading-7 text-slate-400">
      <span className="font-semibold text-cyan-400">Practice</span> until you're confident enough to crack your dream job.
    </p>
  </div>
</div>

        <button
          onClick={() => router.push("/interview/setup")}
          className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
        >
          Start Interview
        </button>
      </div>
    </main>
  );
}