"use client";

// import { ResumeData, Education } from "@/features/resume/types/resume.types";
import { Education } from "../types/resume.types";
import { ResumeData } from "../types/resume.types";

interface Props {
  education: Education[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function EducationForm({
  education,
  setResumeData,
}: Props) {

  const handleChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    setResumeData((prev) => {
      const updatedEducation = [...prev.education];

      updatedEducation[index] = {
        ...updatedEducation[index],
        [field]: value,
      };

      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };

  const addEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          school: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
          cgpa: "",
          location: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Education
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Add your educational qualifications.
        </p>
      </div>

      <div className="space-y-8">

        {education.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >

            <div className="mb-4 flex items-center justify-between">

              <h3 className="text-lg font-semibold text-cyan-400">
                Education {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="text-sm text-red-400"
              >
                Remove
              </button>

            </div>

            <div className="space-y-4">

              <Input
                label="College / School"
                value={item.school}
                onChange={(e) =>
                  handleChange(index, "school", e.target.value)
                }
              />

              <Input
                label="Degree"
                value={item.degree}
                onChange={(e) =>
                  handleChange(index, "degree", e.target.value)
                }
              />

              <Input
                label="Field of Study"
                value={item.field}
                onChange={(e) =>
                  handleChange(index, "field", e.target.value)
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

              <Input
                label="CGPA / Percentage"
                value={item.cgpa}
                onChange={(e) =>
                  handleChange(index, "cgpa", e.target.value)
                }
              />

              <Input
                label="Location"
                value={item.location}
                onChange={(e) =>
                  handleChange(index, "location", e.target.value)
                }
              />

            </div>

          </div>

        ))}

        <button
          type="button"
          onClick={addEducation}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          + Add Education
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
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
      />
    </div>
  );
}