"use client";

import { useState } from "react";
import { ArrowLeft, Briefcase, Brain, Clock, ListChecks } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InterviewSetupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    difficulty: "Medium",
    interviewType: "Technical",
    questionCount: "10",
    skills: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerate = () => {
    console.log(formData);

    // Call API here
    // router.push("/interview/session/1");
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1 className="text-4xl font-bold">
          Interview Setup
        </h1>

        <p className="mt-3 text-slate-400">
          Configure your interview preferences and let AI create a personalized
          interview experience.
        </p>

        <div className="mt-10 space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8">

          {/* Job Role */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <Briefcase size={18} className="text-cyan-400" />
              Job Role
            </label>

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Frontend Developer"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <Clock size={18} className="text-cyan-400" />
              Experience
            </label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option value="">Select Experience</option>
              <option>Fresher</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3-5 Years</option>
              <option>5+ Years</option>
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <Brain size={18} className="text-cyan-400" />
              Difficulty
            </label>

            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Interview Type */}
          <div>
            <label className="mb-2 flex items-center gap-2 font-medium">
              <ListChecks size={18} className="text-cyan-400" />
              Interview Type
            </label>

            <select
              name="interviewType"
              value={formData.interviewType}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option>Technical</option>
              <option>HR</option>
              <option>Mixed</option>
            </select>
          </div>

          {/* Number of Questions */}
          <div>
            <label className="mb-2 font-medium">
              Number of Questions
            </label>

            <select
              name="questionCount"
              value={formData.questionCount}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            >
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>

          {/* Skills */}
          <div>
            <label className="mb-2 font-medium">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="React, Next.js, JavaScript"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-400"
            />

            <p className="mt-2 text-sm text-slate-500">
              Separate multiple skills with commas.
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
          >
            Generate Interview
          </button>
        </div>
      </div>
    </main>
  );
}