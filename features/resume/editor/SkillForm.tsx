"use client";

import { ResumeData, Skill } from "../types/resume.types";

interface Props {
  skills: Skill[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function SkillForm({
  skills,
  setResumeData,
}: Props) {
  const handleCategoryChange = (
    index: number,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.skills];

      updated[index] = {
        ...updated[index],
        category: value,
      };

      return {
        ...prev,
        skills: updated,
      };
    });
  };

  const handleItemsChange = (
    index: number,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.skills];

      updated[index] = {
        ...updated[index],
        items: value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      return {
        ...prev,
        skills: updated,
      };
    });
  };

  const addSkillCategory = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          category: "",
          items: [],
        },
      ],
    }));
  };

  const removeCategory = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Skills
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Organize your skills into categories.
        </p>
      </div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-cyan-400">
                Skill Category {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeCategory(index)}
                className="text-sm text-red-400"
              >
                Remove
              </button>
            </div>

            <div className="space-y-4">
              <Input
                label="Category"
                value={skill.category}
                placeholder="Frontend"
                onChange={(e) =>
                  handleCategoryChange(
                    index,
                    e.target.value
                  )
                }
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Skills
                </label>

                <textarea
                  rows={4}
                  value={skill.items.join(", ")}
                  onChange={(e) =>
                    handleItemsChange(
                      index,
                      e.target.value
                    )
                  }
                  placeholder="React, Next.js, Tailwind CSS"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Separate skills with commas.
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addSkillCategory}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          + Add Skill Category
        </button>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
      />
    </div>
  );
}