function SearchBar({ query, setQuery }) {
    return (
      <div
        className="
          flex h-14 w-full items-center
          rounded-2xl border border-slate-300
          bg-white px-4
          shadow-sm
          transition
          focus-within:border-indigo-500
          focus-within:ring-4
          focus-within:ring-indigo-500/10
        "
      >
        {/* Search icon */}
        <svg
          className="mr-3 h-5 w-5 shrink-0 text-slate-400"
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
  
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search anything..."
          autoFocus
          className="
            h-full flex-1
            bg-transparent
            text-base text-slate-900
            outline-none
            placeholder:text-slate-400
          "
        />
  
        {query && (
          <button
            onClick={() => setQuery("")}
            className="
              ml-2 flex h-7 w-7
              items-center justify-center
              rounded-full
              text-lg text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-600
            "
          >
            ×
          </button>
        )}
      </div>
    );
  }
  
  export default SearchBar;