"use client";

import { useEffect, useState } from "react";

import Notesheader from "@/features/notes/components/Notesheader";
import Notesform from "@/features/notes/components/Notesform";
import Noteslist from "@/features/notes/components/NotesList";

import {
  add_note,
  get_notes,
} from "@/features/notes/services/notes.services";

import { CreateNote } from "@/features/notes/types/notes.types";

interface Note {
  id: number;
  user_id:number
  note: string;
  title: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showform, setShowForm] = useState(false);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");

  // Add new note
  const AddNote = async () => {
    if (!note.trim()) return;

    const newNote: CreateNote = {
      title: title.trim(),
      note: note.trim(),
    };

    try {
      const res = await add_note(newNote);

      console.log("res--------------notes", res);

      // Add newly created note immediately to the list
      setNotes((prev) => [...prev, res]);

      // Reset form
      setShowForm(false);
      setTitle("");
      setNote("");
    } catch (error) {
      console.log("Error adding note:", error);
    }
  };

  // Get all notes
  useEffect(() => {
    const fn = async () => {
      try {
        const res = await get_notes();

        console.log("res--------------notes", res);

        setNotes(res);
      } catch (error) {
        console.log("Error getting notes:", error);
      }
    };

    fn();
  }, []);

  return (
    <main className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">

        {/* WithAI Logo / Home */}
        <div className="mb-6">
          <a
            href="/"
            className="text-3xl font-bold tracking-tight text-white transition hover:text-zinc-300"
          >
            WithAI
          </a>
        </div>

        {/* Header
        <Notesheader
          Noteslength={notes.length}
          onAddnotes={() => setShowForm(true)}
        /> */}

        {/* 40% Notes + 60% Editor */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* ========================= */}
          {/* LEFT SIDE - 40% */}
          {/* ========================= */}

          <section className="lg:col-span-2 order-2 lg:order-1">

            {/* Section heading */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-white">
                All Notes
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                {notes.length}{" "}
                {notes.length === 1 ? "note" : "notes"}
              </p>
            </div>

            {/* Notes list */}
            {notes.length > 0 ? (
              <Noteslist notes={notes} />
            ) : (
              <div className="rounded-xl border border-dashed border-zinc-800 px-4 py-12 text-center sm:py-16">
                <p className="text-sm text-zinc-500 sm:text-base">
                  No notes yet.
                </p>

                <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                  Click "Add Note" to create your first note.
                </p>
              </div>
            )}

          </section>


          {/* ========================= */}
          {/* RIGHT SIDE - 60% */}
          {/* ========================= */}

          <section className="lg:col-span-3 flex flex-col gap-4 order-1 lg:order-2">

              <Notesheader
          Noteslength={notes.length}
          onAddnotes={() => setShowForm(true)}
        />

            {showform ? (

              /* Note editor */
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 sm:p-6">
                <Notesform
                  title={title}
                  setTitle={setTitle}
                  note={note}
                  setNote={setNote}
                  AddNote={AddNote}
                />
              </div>

            ) : (

              /* Empty editor state */
              <div className="flex min-h-[400px] items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950">

                <div className="px-6 text-center">

                  <div className="mb-4 text-4xl">
                    📝
                  </div>

                  <h2 className="text-lg font-semibold text-zinc-200">
                    Start writing
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Create a new note and keep your ideas organized.
                  </p>

                  <button
                    onClick={() => setShowForm(true)}
                    className="mt-6 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition hover:bg-zinc-200"
                  >
                    + Add Note
                  </button>

                </div>

              </div>

            )}

          </section>

        </div>

      </div>
    </main>
  );
}