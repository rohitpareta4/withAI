"use client";

import { ResumeData, Experience } from "../types/resume.types";

interface Props {
  experience: Experience[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function ExperienceForm({
  experience,
  setResumeData,
}: Props) {
  const handleChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.experience];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return {
        ...prev,
        experience: updated,
      };
    });
  };

  const handleDescriptionChange = (
    index: number,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.experience];

      updated[index] = {
        ...updated[index],
        description: value
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      };

      return {
        ...prev,
        experience: updated,
      };
    });
  };

  const addExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now().toString(),
          company: "",
          jobTitle: "",
          employmentType: "",
          location: "",
          startDate: "",
          endDate: "",
          description: [],
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Work Experience
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Add your professional experience.
        </p>
      </div>

      <div className="space-y-6">
        {experience.map((item, index) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-cyan-400">
                Experience {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            <div className="space-y-4">
              <Input
                label="Company"
                value={item.company}
                placeholder="Google"
                onChange={(e) =>
                  handleChange(index, "company", e.target.value)
                }
              />

              <Input
                label="Job Title"
                value={item.jobTitle}
                placeholder="Software Engineer"
                onChange={(e) =>
                  handleChange(index, "jobTitle", e.target.value)
                }
              />

              <Input
                label="Employment Type"
                value={item.employmentType}
                placeholder="Full Time / Internship"
                onChange={(e) =>
                  handleChange(
                    index,
                    "employmentType",
                    e.target.value
                  )
                }
              />

              <Input
                label="Location"
                value={item.location}
                placeholder="Bangalore, India"
                onChange={(e) =>
                  handleChange(index, "location", e.target.value)
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Start Date"
                  type="date"
                  value={item.startDate}
                  onChange={(e) =>
                    handleChange(index, "startDate", e.target.value)
                  }
                />

                <Input
                  label="End Date"
                  type="date"
                  value={item.endDate}
                  onChange={(e) =>
                    handleChange(index, "endDate", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Responsibilities / Achievements
                </label>

                <textarea
                  rows={6}
                  value={item.description.join("\n")}
                  onChange={(e) =>
                    handleDescriptionChange(
                      index,
                      e.target.value
                    )
                  }
                  placeholder={`Developed REST APIs\nReduced API latency by 40%\nLed a team of 5 developers`}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                />

                <p className="mt-2 text-xs text-slate-500">
                  Write one achievement per line.
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addExperience}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          + Add Experience
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