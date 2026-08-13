import { Note } from "../types/notes.types";
import { SquarePen, Trash2 } from "lucide-react";

interface NotesListProps {
  notes: Note[];
}

export default function Noteslist({ notes }: NotesListProps) {
  return (
    <div
      className="
        h-[450px]
        overflow-y-auto
        pr-2

        [scrollbar-width:thin]
        [scrollbar-color:#3f3f46_transparent]

        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-zinc-700
        [&::-webkit-scrollbar-thumb:hover]:bg-zinc-600
      "
    >
      {notes.length > 0 ? (
        <div className="space-y-3">
          {notes.map((item) => (
            <div
              key={item.id}
              className="
                w-full
                cursor-pointer
                rounded-xl
                border border-zinc-800
                bg-zinc-950
                p-4
                transition
                hover:border-zinc-700
                hover:bg-zinc-900
              "
            >
              {/* Title */}
              <h3 className="truncate text-sm font-semibold text-white sm:text-base">
                {item.title || "Untitled"}
              </h3>

              {/* Note */}
              <p
                className="
                  mt-2
                  line-clamp-2
                  break-words
                  text-xs
                  leading-5
                  text-zinc-500
                  sm:text-sm
                "
              >
                {item.note}
              </p>

              {/* Actions */}
              <div className="mt-4 flex items-center justify-end gap-2">
                {/* Edit */}
                <button
                  type="button"
                  aria-label="Edit note"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-800
                    text-zinc-500
                    transition
                    hover:border-zinc-600
                    hover:bg-zinc-800
                    hover:text-white
                    sm:h-9
                    sm:w-9
                  "
                >
                  <SquarePen className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </button>

                {/* Delete */}
                <button
                  type="button"
                  aria-label="Delete note"
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-800
                    text-zinc-500
                    transition
                    hover:border-red-900
                    hover:bg-red-950
                    hover:text-red-400
                    sm:h-9
                    sm:w-9
                  "
                >
                  <Trash2 className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-center">
          <p className="text-sm text-zinc-500">
            No notes yet.
          </p>
        </div>
      )}
    </div>
  );
}