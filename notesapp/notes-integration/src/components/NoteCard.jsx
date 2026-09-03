import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Note content */}
      <div className="mb-5">
        <h1 className="mb-2 text-xl font-semibold text-zinc-900">
          {note.title}
        </h1>

        <p className="text-sm leading-6 text-zinc-500">{note.description}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 border-t border-zinc-100 pt-4">
        <button className="flex-1 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100">
          Update
        </button>

        <button className="flex-1 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700">
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
