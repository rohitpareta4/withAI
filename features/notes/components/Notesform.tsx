"use client";

interface formprops {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  AddNote: () => void;
}

export default function Notesform({
  note,
  setNote,
  AddNote,
}: formprops) {
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          AddNote();
        }}
        className="
          w-full
          rounded-xl
          border border-zinc-800
          bg-zinc-950
          p-4
          sm:p-5
        "
      >
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          rows={8}
          className="
            w-full
            resize-y
            rounded-lg
            border border-zinc-700
            bg-zinc-900
            px-4
            py-3
            text-sm
            leading-6
            text-white
            outline-none
            placeholder:text-zinc-500
            focus:border-zinc-400
            focus:ring-1
            focus:ring-zinc-400
            sm:text-base
          "
        />

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
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
            ADD NOTE
          </button>
        </div>
      </form>
    </div>
  );
}