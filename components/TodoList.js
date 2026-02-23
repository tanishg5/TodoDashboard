"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchTodos } from "@/services/todoApi";
import TodoItem from "./TodoItem";
import Pagination from "./Pagination";

const LIMIT = 10;

export default function TodoList({ page, setPage, localTodos = [] }) {
  const {
    data: todos,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodos(page, LIMIT),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-500 dark:text-slate-400">
        <div className="w-8 h-8 border-2 border-slate-300 dark:border-slate-600 border-t-emerald-500 rounded-full animate-spin mb-3" />
        <p className="text-sm font-medium">Loading todos...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-4 py-4 text-center">
        <p className="text-sm font-medium text-red-700 dark:text-red-400">
          Something went wrong. Please try again.
        </p>
      </div>
    );
  }

  const combinedTodos = [...localTodos, ...(todos || [])];

  return (
    <div>
      {isFetching && !isLoading && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-3">
          Updating...
        </p>
      )}
      <div className="space-y-3">
        {combinedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
}