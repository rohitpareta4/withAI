import { Note } from "../types/notes.types"


interface NotesListprops{
    notes:Note[]
}

export default function Noteslist({notes}:NotesListprops){
   return(
    <div>
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
    {/* Title */}
    <p
      className="
        mb-2
        break-words
        text-base
        font-semibold
        text-white
        sm:text-lg
      "
    >
      {item.title}
    </p>

    {/* Note */}
    <p
      className="
        whitespace-pre-wrap
        break-words
        text-sm
        leading-6
        text-zinc-400
        sm:text-base
      "
    >
      {item.note}
    </p>
  </div>
))}
            </div>
          ) : (
             <p></p>
          )}
        </section>
    </div>
   )
}