"use client";

import { useState } from "react";

export default function TodoItem({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const handleToggle = () => {
    setCompleted((prev) => !prev);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-3.5 sm:p-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/50 min-w-0 transition-colors hover:border-slate-300 dark:hover:border-slate-500">
      <span
        className={`flex-1 min-w-0 truncate text-slate-700 dark:text-slate-200 ${
          completed
            ? "line-through text-slate-400 dark:text-slate-500"
            : ""
        }`}
        title={todo.title}
      >
        {todo.title}
      </span>

      <button
        type="button"
        onClick={handleToggle}
        className="shrink-0 px-4 py-2 sm:py-1.5 min-h-[44px] sm:min-h-0 sm:ml-4 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      >
        {completed ? "Undo" : "Done"}
      </button>
    </div>
  );
}