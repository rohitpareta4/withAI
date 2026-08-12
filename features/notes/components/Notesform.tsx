"use client";

interface formprops {
  title:string;
  note: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  AddNote: () => void;
}

export default function Notesform({
  title,
  note,
  setTitle,
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
        <input
  type="text"
  placeholder="Add Title..."
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="
    w-full
    border-0
    border-b
    border-zinc-800
    bg-transparent
    px-0
    py-3
    text-xl
    font-semibold
    text-white
    placeholder:text-zinc-600
    outline-none
    transition
    focus:border-zinc-500
    sm:text-2xl
    lg:text-3xl
  "
/>
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