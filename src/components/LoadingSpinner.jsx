function LoadingSpinner() {
    return (
      <div className="flex items-center justify-center gap-2 py-6">
        <div
          className="
            h-4 w-4
            animate-spin
            rounded-full
            border-2
            border-slate-200
            border-t-indigo-600
          "
        />
  
        <span className="text-sm text-slate-500">
          Searching...
        </span>
      </div>
    );
  }
  
  export default LoadingSpinner;