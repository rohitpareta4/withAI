"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { get_interview } from "@/features/interview/services/interview_service";
import useSpeechSynthesis from "@/features/interview/hooks/useSpeechSynthesis";

interface Question {
  id: number;
  question: string;
}

interface InterviewData {
  questions: Question[];
}

export default function InterviewSession() {
  const { id } = useParams();

  const [interview, setInterview] = useState<InterviewData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);

  const { speak, stop, speaking } = useSpeechSynthesis();

  useEffect(() => {
    if (!id) return;

    const fetchInterview = async () => {
      try {
        const res = await get_interview(id as string);

        const parsedQuestions = JSON.parse(res.questions);

        setInterview(parsedQuestions);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [id]);

  const question = interview?.questions?.[currentQuestion];

  useEffect(() => {
    if (question) {
      speak(question.question);
    }
  }, [question]);

  const handleNext = () => {
    if (!interview) return;

    if (currentQuestion < interview.questions.length - 1) {
      stop();
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-lg text-slate-400">Loading Interview...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

          <div>
            <h1 className="text-3xl font-bold text-white">
              AI Mock Interview
            </h1>

            <p className="mt-2 text-slate-400">
              Question {currentQuestion + 1} of{" "}
              {interview?.questions.length}
            </p>
          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              speaking
                ? "bg-green-500/20 text-green-400"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {speaking ? "Speaking..." : "Ready"}
          </div>

        </div>

        {/* Question */}

        <div className="px-10 py-12">

          <h2 className="mb-5 text-xl font-semibold text-slate-300">
            Interview Question
          </h2>

          <div className="rounded-2xl border border-slate-700 bg-slate-950 p-8">

            <p className="text-2xl leading-10 text-white">
              {question?.question}
            </p>

          </div>

        </div>

        {/* Controls */}

        <div className="flex flex-wrap items-center justify-center gap-5 border-t border-slate-800 px-8 py-8">

          <button
            onClick={() => question && speak(question.question)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            🔊 Speak Again
          </button>

          <button
            onClick={stop}
            className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Stop
          </button>

          <button
            onClick={handleNext}
            disabled={
              currentQuestion ===
              (interview?.questions.length ?? 1) - 1
            }
            className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-700"
          >
            Next Question →
          </button>

        </div>

        <div className="flex item-center justify-center w-full">
            <button
            onClick={() => question && speak(question.question)}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            🔊 Start
          </button>
        </div>

      </div>
    </section>
  );
}
