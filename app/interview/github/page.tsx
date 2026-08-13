"use client";

import { useState } from "react";
import { addGithub } from "@/features/interview/services/interview_service";
import { FolderGit2, ArrowRight } from "lucide-react";

export default function GithubInterview() {
  const [repoUrl, setRepoUrl] = useState("");

  const handleGitUrl = async() => {
    try {
        const res=await addGithub(repoUrl)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-6 text-white sm:px-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-8">

        <div className="text-center">
          <FolderGit2
            size={36}
            className="mx-auto text-cyan-400 sm:h-10 sm:w-10"
          />

          <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
            GitHub Interview
          </h1>

          <p className="mt-2 text-xs text-slate-400 sm:text-sm">
            Enter your public GitHub repository.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGitUrl();
          }}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="url"
            required
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/user/repo"
            className="w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-500"
          />

          <button
            type="submit"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400 sm:w-auto"
          >
            Start
            <ArrowRight size={17} />
          </button>
        </form>

      </div>
    </main>
  );
}