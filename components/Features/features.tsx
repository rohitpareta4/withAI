"use client";

// import Image from "next/image";
import {
  CheckCircle2,
  FileText,
  Bot,
  CheckSquare,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "ATS Resume Builder",
    description:
      "Create professional resumes using modern templates that pass ATS screening.",
    // image: "data:image/png;base64,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",
    icon: FileText,
    points: [
      "Modern Templates",
      "ATS Friendly",
      "PDF Export",
    ],
  },
  {
    title: "AI Mock Interview",
    description:
      "Practice with AI and receive detailed feedback after every interview.",
    // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW0RxwZi1XTPYpl9h9f2OVuKwMzDBtOI1TmnVFPs43w&s=10",
    icon: Bot,
    points: [
      "AI Feedback",
      "Company Questions",
      "Performance Score",
    ],
  },
  {
    title: "Smart Todo Planner",
    description:
      "Track daily preparation and stay consistent throughout your placement journey.",
    // image: "/todo.png",
    icon: CheckSquare,
    points: [
      "Daily Goals",
      "Progress Tracking",
      "Task Reminder",
    ],
  },
  {
    title: "AI Resume Review",
    description:
      "Improve your resume instantly with AI-powered suggestions.",
    // image: "/review.png",
    icon: Sparkles,
    points: [
      "Grammar Fixes",
      "ATS Score",
      "Better Content",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Why WithAI
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Everything You Need For
            <span className="text-cyan-400"> Placements</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-400 leading-8">
            A single platform for resumes, AI interviews and productivity.
          </p>
        </div>

        {/* Features */}

        <div className="mt-24 space-y-28">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-16 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* Small Image Card */}

                <div className="flex justify-center lg:w-2/5">
                  <div className="group w-[340px] rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-cyan-500/10">

                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {feature.title}
                        </h4>

                        <p className="text-xs text-slate-500">
                          Product Preview
                        </p>
                      </div>
                    </div>

                    {/* <Image
                      src={feature.image}
                      alt={feature.title}
                      width={340}
                      height={220}
                      className="rounded-2xl border border-slate-800"
                    /> */}
                  </div>
                </div>

                {/* Content */}

                <div className="lg:w-3/5">

                  <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                    {feature.description}
                  </p>

                  <div className="mt-8 space-y-4">

                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          size={20}
                          className="text-cyan-400"
                        />

                        <span className="text-slate-300">
                          {point}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}