import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import LoadingSpinner from "./components/LoadingSpinner";

import { API_BASE_URL, SEARCH_LIMIT, DEBOUNCE_DELAY } from "./config";

function App() {
  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [tookMillis, setTookMillis] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setResultCount(0);
      setTookMillis(0);
      setLoading(false);

      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${API_BASE_URL}/search?rawQuery=${encodeURIComponent(
            query,
          )}&limit=${SEARCH_LIMIT}`,
        );

        if (!response.ok) {
          throw new Error("Search request failed");
        }

        const data = await response.json();

        setResults(data.results || []);
        setResultCount(data.resultCount || 0);
        setTookMillis(data.tookMillis || 0);
      } catch (error) {
        console.error("Search error:", error);

        setResults([]);
        setResultCount(0);
      } finally {
        setLoading(false);
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-4xl px-5 pb-20 pt-16">
        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Search the web
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Find what you're looking for.
          </p>
        </div>

        {/* Search */}
        <SearchBar query={query} setQuery={setQuery} />

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Results */}
        {!loading && query.trim() && (
          <div className="mt-10">
            <SearchResults
              results={results}
              resultCount={resultCount}
              tookMillis={tookMillis}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
