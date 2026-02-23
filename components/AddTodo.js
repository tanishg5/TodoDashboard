"use client";

import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    onAddTodo(text);
    setText("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        placeholder="What needs to be done?"
        className="flex-1 min-w-0 px-4 py-3 sm:py-2.5 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"
        aria-label="Add new todo"
      />

      <button
        type="button"
        onClick={handleAdd}
        className="shrink-0 px-5 py-3 sm:py-2.5 min-h-[44px] sm:min-h-0 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm hover:shadow transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      >
        Add
      </button>
    </div>
  );
}