"use client";

export default function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-between items-center gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-600 flex-wrap">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2.5 sm:py-2 min-h-[44px] sm:min-h-0 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 disabled:opacity-50 disabled:pointer-events-none transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      >
        Previous
      </button>

      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
        Page {page}
      </span>

      <button
        type="button"
        onClick={() => setPage(page + 1)}
        className="px-4 py-2.5 sm:py-2 min-h-[44px] sm:min-h-0 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
      >
        Next
      </button>
    </div>
  );
}