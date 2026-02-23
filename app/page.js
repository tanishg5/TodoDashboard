"use client";

import { useState } from "react";
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";

export default function Home() {
  const [page, setPage] = useState(1);
  const [localTodos, setLocalTodos] = useState([]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    setLocalTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 w-full min-w-0">
        <header className="mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 tracking-tight">
            Todo Dashboard
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Manage your tasks. Add new ones or toggle completion.
          </p>
        </header>

        <AddTodo onAddTodo={handleAddTodo} />

        <TodoList
          page={page}
          setPage={setPage}
          localTodos={localTodos}
        />
      </div>
    </main>
  );
}