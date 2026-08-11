

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { authme } from "@/services/auth.service";

interface AuthUser {
  id: number;
  name: string;
  email: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await authme();
        console.log("Authenticated User:", res);
        setUser(res);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };

    run();
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-cyan-400"
        >
          WithAI
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/resumes"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Saved Resume
          </Link>

          <Link
            href="/interview"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            AI Interview
          </Link>

          <Link
            href="/todo"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Todo
          </Link>
          <Link
            href="/notes"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Notes
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-4 md:flex">
          {user ? (
            <>
              <div className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 transition hover:border-cyan-500">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
                  <User size={18} className="text-white" />
                </div>

                <div className="leading-tight">
                  <p className="font-medium text-white">{user.name}</p>
                  {/* <p className="text-xs text-slate-400">{user.email}</p> */}
                </div>
              </div>

              <button className="flex items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white">
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-slate-300 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col px-5 py-4">
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Resume
            </Link>

            <Link
              href="/interview"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              AI Interview
            </Link>

            <Link
              href="/todo"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
            >
              Todo
            </Link>

            <div className="mt-4 border-t border-slate-800 pt-4">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 rounded-lg bg-slate-900 p-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
                      <User size={18} className="text-white" />
                    </div>

                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                    </div>
                  </div>

                  <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-500 px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-slate-700 px-4 py-2 text-center text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setOpen(false)}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-center font-medium text-white transition hover:bg-cyan-600"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;