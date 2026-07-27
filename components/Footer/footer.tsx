"use client";

import Link from "next/link";
import {
//   Github,
//   Linkedin,
//   Twitter,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Newsletter */}


    

        {/* Main Footer */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              With<span className="text-cyan-400">AI</span>
            </h2>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Your complete AI-powered placement preparation platform.
              Build ATS resumes, practice interviews, organize your
              preparation and land your dream job.
            </p>

            <div className="mt-8 flex gap-4">

              {/* <Link
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Github size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Linkedin size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Twitter size={20} />
              </Link> */}

              <Link
                href="#"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                <Mail size={20} />
              </Link>

            </div>
          </div>

          {/* Platform */}

          <div>

            <h3 className="font-semibold text-white">
              Platform
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="/resume"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Resume Builder
                </Link>
              </li>

              <li>
                <Link
                  href="/interview"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  AI Interview
                </Link>
              </li>

              <li>
                <Link
                  href="/todo"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Todo Planner
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Profile
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Help Center
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  Support
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} WithAI. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="#"
              className="transition hover:text-cyan-400"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-cyan-400"
            >
              Terms
            </Link>

            <Link
              href="#"
              className="transition hover:text-cyan-400"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}