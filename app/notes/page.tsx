"use client";

import { useEffect, useState } from "react";
import Notesheader from "@/features/notes/components/Notesheader";
import Notesform from "@/features/notes/components/Notesform";
import { add_note } from "@/features/notes/services/notes.services";
import { CreateNote } from "@/features/notes/types/notes.types";
import { get_notes } from "@/features/notes/services/notes.services";

interface Note {
  id: number;
  note: string;

}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showform, setShowForm] = useState(false);
  const [note, setNote] = useState("");

  const AddNote = async() => {

    if(!note.trim()) return

    const newNote:CreateNote={
        note:note.trim()
    }

    const res=await add_note(newNote)
    console.log("res--------------notes",res)
     setNotes((prev) => [...prev, res]);

    setShowForm(false);
    setNote("")
  };

  useEffect(()=>{
      const fn=async()=>{
        try {
          const res=await get_notes()
    console.log("res--------------notes",res)
          setNotes(res)
        } catch (error) {
            console.log(error)
        }
      }
      fn()
  },[])

  return (
    <main className="min-h-screen bg-black px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">

        {/* WithAI Logo / Home */}
        <div className="mb-6">
          <a
            href="/"
            className="text-3xl font-bold tracking-tight text-white transition hover:text-zinc-300"
          >
            WithAI
          </a>
        </div>

        {/* Header */}
        <Notesheader
          Noteslength={notes.length}
          onAddnotes={() => setShowForm(true)}
        />

        {/* Form */}
        {showform && (
          <div className="mt-6">
            <Notesform
              note={note}
              setNote={setNote}
              AddNote={AddNote}
            />
          </div>
        )}

        {/* Notes */}
        <section className="mt-6 w-full">
          {notes.length > 0 ? (
            <div className="space-y-4">
              {notes.map((item) => (
                <div
                  key={item.id}
                  className="
                    w-full
                    rounded-xl
                    border border-zinc-800
                    bg-zinc-950
                    p-4
                    transition
                    hover:border-zinc-700
                  "
                >
                  <p className="whitespace-pre-wrap break-words text-sm text-zinc-200 sm:text-base">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            !showform && (
              <div
                className="
                  rounded-xl
                  border border-dashed border-zinc-800
                  px-4
                  py-12
                  text-center
                  sm:py-16
                "
              >
                <p className="text-sm text-zinc-500 sm:text-base">
                  No notes yet.
                </p>

                <p className="mt-1 text-xs text-zinc-600 sm:text-sm">
                  Click "Add Note" to create your first note.
                </p>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
}