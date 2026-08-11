"use client";

interface Headerprops {
  Noteslength: number;
  onAddnotes: () => void;
}

export default function Notesheader({
  Noteslength,
  onAddnotes,
}: Headerprops) {
  return (
    <div className="w-full">
      <div
        className="
          flex
          flex-col
          gap-4
          rounded-xl
          border border-zinc-800
          bg-zinc-950
          p-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:p-5
        "
      >
        <div>
          <h1 className="text-xl font-semibold text-white sm:text-2xl">
            Notes
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Total {Noteslength === 1 ? "Note" : "Notes"}: {Noteslength}
          </p>
        </div>

        <button
          onClick={onAddnotes}
          className="
            w-full
            rounded-lg
            bg-white
            px-5
            py-3
            text-sm
            font-medium
            text-black
            transition
            hover:bg-zinc-200
            sm:w-auto
          "
        >
          Add Note
        </button>
      </div>
    </div>
  );
}