"use client";

import { ResumeData, Certificate } from "../types/resume.types";

interface Props {
  certificates: Certificate[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function CertificateForm({
  certificates,
  setResumeData,
}: Props) {
  const handleChange = (
    index: number,
    field: keyof Certificate,
    value: string
  ) => {
    setResumeData((prev) => {
      const updated = [...prev.certificates];

      updated[index] = {
        ...updated[index],
        [field]: value,
      };

      return {
        ...prev,
        certificates: updated,
      };
    });
  };

  const addCertificate = () => {
    setResumeData((prev) => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          id: Date.now().toString(),
          title: "",
          organization: "",
          issueDate: "",
          credentialId: "",
          credentialLink: "",
        },
      ],
    }));
  };

  const removeCertificate = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="p-6">
      {/* Heading */}

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Certificates
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Add your professional certifications.
        </p>
      </div>

      <div className="space-y-6">
        {certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-cyan-400">
                Certificate {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeCertificate(index)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            <div className="space-y-4">
              <Input
                label="Certificate Title"
                value={certificate.title}
                placeholder="AWS Certified Cloud Practitioner"
                onChange={(e) =>
                  handleChange(index, "title", e.target.value)
                }
              />

              <Input
                label="Organization"
                value={certificate.organization}
                placeholder="Amazon Web Services"
                onChange={(e) =>
                  handleChange(
                    index,
                    "organization",
                    e.target.value
                  )
                }
              />

              <Input
                label="Issue Date"
                type="date"
                value={certificate.issueDate}
                onChange={(e) =>
                  handleChange(
                    index,
                    "issueDate",
                    e.target.value
                  )
                }
              />

              <Input
                label="Credential ID"
                value={certificate.credentialId}
                placeholder="ABC123XYZ"
                onChange={(e) =>
                  handleChange(
                    index,
                    "credentialId",
                    e.target.value
                  )
                }
              />

              <Input
                label="Credential Link"
                value={certificate.credentialLink}
                placeholder="https://www.credly.com/..."
                onChange={(e) =>
                  handleChange(
                    index,
                    "credentialLink",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addCertificate}
          className="w-full rounded-xl border border-cyan-500 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-black"
        >
          + Add Certificate
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