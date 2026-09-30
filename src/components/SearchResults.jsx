import SearchResult from "./SearchResult";

function SearchResults({
  results,
  resultCount,
  tookMillis,
}) {
  if (results.length === 0) {
    return (
      <div className="py-20 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <svg
            className="h-6 w-6 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
          </svg>
        </div>

        <h2 className="text-lg font-semibold text-slate-800">
          No results found
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Try searching with different keywords.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Search metadata */}
      <div className="mb-4 flex items-center justify-between px-1">
        <p className="text-sm text-slate-500">
          About{" "}
          <span className="font-medium text-slate-700">
            {resultCount}
          </span>{" "}
          results
        </p>

        <span
          className="
            rounded-full
            bg-indigo-50
            px-3 py-1
            text-xs
            font-medium
            text-indigo-600
          "
        >
          {tookMillis} ms
        </span>
      </div>

      {/* Results */}
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >
        {results.map((result, index) => (
          <SearchResult
            key={`${result.url}-${index}`}
            result={result}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;