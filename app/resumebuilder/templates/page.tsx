
"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";

import PreviewModal from "@/components/resume/PreviewModal";

const templates = [
  {
    id: 1,
    name: "Classic",
    description: "Simple, clean and ATS-friendly.",
  },
  {
    id: 2,
    name: "Modern",
    description: "Minimal design with elegant sections.",
  },
  {
    id: 3,
    name: "Professional",
    description: "Perfect for experienced professionals.",
  },
  {
    id: 4,
    name: "Developer",
    description: "Designed especially for software engineers.",
  },
];

export default function ResumeTemplates() {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handlePreview = (template: string) => {
    setSelectedTemplate(template.toLowerCase());
    setOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black py-24 text-white">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Resume Builder
            </span>

            <h1 className="mt-6 text-5xl font-bold">
              Choose Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Template
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Pick a professional template and start building your ATS-friendly
              resume.
            </p>
          </div>

          {/* Templates */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 transition hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
              >
                {/* Mini Preview */}
                <div className="flex h-80 items-center justify-center border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950">
                  <div className="h-64 w-44 rounded-lg border border-slate-700 bg-white p-3">
                    <div className="h-4 w-20 rounded bg-slate-300" />

                    <div className="mt-4 h-2 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-5/6 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-4/6 rounded bg-slate-200" />

                    <div className="mt-6 h-3 w-16 rounded bg-slate-400" />

                    <div className="mt-3 h-2 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-3/5 rounded bg-slate-200" />

                    <div className="mt-6 h-3 w-14 rounded bg-slate-400" />

                    <div className="mt-3 h-2 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-2/3 rounded bg-slate-200" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{template.name}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {template.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    {/* Preview */}
                    <button
                      onClick={() => handlePreview(template.name)}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 transition hover:border-cyan-500 hover:text-cyan-400"
                    >
                      <Eye size={18} />
                      Preview
                    </button>

                    {/* Use */}
                    <Link
                      href={`/resumebuilder/editor?template=${template.name.toLowerCase()}`}
                      className="flex flex-1"
                    >
                      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-medium transition hover:bg-cyan-400">
                        Use
                        <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      <PreviewModal
        open={open}
        onClose={() => setOpen(false)}
        template={selectedTemplate}
      />
    </>
  );
}