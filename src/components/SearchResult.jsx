function SearchResult({ result, index }) {
    return (
      <article
        className="
          group
          border-b border-slate-100
          px-6 py-5
          transition
          last:border-b-0
          hover:bg-slate-50/70
        "
      >
        <div className="flex gap-4">
          {/* Result number */}
          <div
            className="
              hidden w-6 shrink-0
              pt-1
              text-xs
              font-medium
              text-slate-400
              sm:block
            "
          >
            {index + 1}
          </div>
  
          <div className="min-w-0 flex-1">
            {/* URL */}
            <div
              className="
                mb-1
                truncate
                text-xs
                font-medium
                text-emerald-600
              "
            >
              {result.url}
            </div>
  
            {/* Title */}
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mb-2
                block
                text-lg
                font-semibold
                leading-snug
                text-indigo-700
                transition
                group-hover:text-indigo-800
                hover:underline
              "
            >
              {result.title}
            </a>
  
            {/* Snippet */}
            <p
              className="
                line-clamp-2
                text-sm
                leading-6
                text-slate-600
              "
            >
              {result.snippet}
            </p>
  
            {/* Score */}
            <div className="mt-3">
              <span
                className="
                  inline-flex
                  items-center
                  rounded-md
                  bg-slate-100
                  px-2
                  py-1
                  text-[11px]
                  font-medium
                  text-slate-500
                "
              >
                Score: {result.score.toFixed(4)}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  export default SearchResult;