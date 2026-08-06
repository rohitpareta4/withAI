"use client";

import { ResumeData, Project } from "../types/resume.types";

interface Props {
  projects: Project[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function ProjectForm({
  projects,
  setResumeData,
}: Props) {

  const handleChange = <K extends keyof Project>(
  index: number,
  field: K,
  value: Project[K]
) => {
  setResumeData((prev) => {
    const updatedProjects = [...prev.projects];

    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };

    return {
      ...prev,
      projects: updatedProjects,
    };
  });
};

const addProject = () => {
  setResumeData((prev) => ({
    ...prev,
    projects: [
      ...prev.projects,
      {
        id: crypto.randomUUID(),
        title: "",
        techStack: [],
        github: "",
        liveLink: "",
        startDate: "",
        endDate: "",
        description: [],
      },
    ],
  }));
};

  const removeProject = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Projects
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Showcase your best projects.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-cyan-400">
                Project {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeProject(index)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            <div className="space-y-4">
              <Input
                label="Project Title"
                value={project.title}
                placeholder="AI Resume Builder"
                onChange={(e) =>
                  handleChange(
                    index,
                    "title",
                    e.target.value
                  )
                }
              />

              <Input
  label="Technologies Used"
  value={project.techStack.join(", ")}
  placeholder="Next.js, FastAPI, Tailwind CSS"
  onChange={(e) =>
    handleChange(
      index,
      "techStack",
      e.target.value
        .split(",")
        .map((item) => item.trim())
    )
  }
/>

              <Input
                label="GitHub URL"
                value={project.github}
                placeholder="https://github.com/..."
                onChange={(e) =>
                  handleChange(
                    index,
                    "github",
                    e.target.value
                  )
                }
              />

              <Input
                label="Live Demo URL"
                value={project.liveLink}
                placeholder="https://project.vercel.app"
                onChange={(e) =>
                  handleChange(
                    index,
                    "liveLink",
                    e.target.value
                  )
                }
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Description
                </label>
<textarea
  rows={5}
  value={project.description.join("\n")}
  onChange={(e) =>
    handleChange(
      index,
      "description",
      e.target.value
        .split("\n")
        .filter((line) => line.trim() !== "")
    )
  }
/>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          + Add Project
        </button>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  type?: string;
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
      />
    </div>
  );
}