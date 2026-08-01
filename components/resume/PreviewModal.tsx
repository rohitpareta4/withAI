// "use client";

// import { X } from "lucide-react";
// import ClassicATS from "@/features/resume/templates/ClassicATS";
// // import Developer from "@/features/resume/templates/Developer";
// // import ClassicATS from "@/features/resume/templates/ClassicATS";
// // import ClassicATS from "@/features/resume/templates/ClassicATS";

// // import Modern from "@/features/resume/templates/Modern";
// import { dummyResume } from "@/features/resume/data/dummyResume";

// interface Props {
//   open: boolean;
//   onClose: () => void;
//   template: string;
// }

// export default function PreviewModal({
//   open,
//   onClose,
//   template,
// }: Props) {
//   if (!open) return null;

//   const renderTemplate = () => {
//     switch (template) {
//       case "classic":
//         return <ClassicATS data={dummyResume} />;

//       case "modern":
//         return <Modern data={dummyResume} />;

//       case "professional":
//         return <Professional data={dummyResume} />;

//       case "developer":
//         return <Developer data={dummyResume} />;

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/80">

//       <div className="absolute right-6 top-6">

//         <button
//           onClick={onClose}
//           className="rounded-lg bg-slate-800 p-2"
//         >
//           <X />
//         </button>

//       </div>

//       <div className="flex h-screen justify-center overflow-auto p-10">

//         <div className="w-[850px] rounded-lg bg-white shadow-xl">

//           {renderTemplate()}

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { X } from "lucide-react";
import ClassicATS from "@/features/resume/templates/ClassicATS";
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
      case "modern":
      case "professional":
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