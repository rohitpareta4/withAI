

"use client";

import { X } from "lucide-react";
import ClassicATS from "@/features/resume/templates/ClassicATS";
import Modern from "@/features/resume/templates/Modern";
import Professional from "@/features/resume/templates/Professional";
import { dummyResume } from "@/features/resume/data/dummyResume";

interface Props {
  open: boolean;
  onClose: () => void;
  template: string;
}

export default function PreviewModal({
  open,
  onClose,
  template,
}: Props) {
  if (!open) return null;

  const renderTemplate = () => {
    switch (template) {
      case "classic":
        return <ClassicATS data={dummyResume} />;
      case "modern":
        return <Modern data={dummyResume}/>
      case "professional":
        return <Professional data={dummyResume}/>
      case "developer":
        return <ClassicATS data={dummyResume} />;

      default:
        return <ClassicATS data={dummyResume} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-8 top-8 rounded-lg bg-slate-800 p-2 text-white hover:bg-slate-700"
      >
        <X size={22} />
      </button>

      {/* Resume Preview */}
      <div className="h-[90vh] overflow-auto rounded-lg bg-white shadow-2xl">
        {renderTemplate()}
      </div>
    </div>
  );
}