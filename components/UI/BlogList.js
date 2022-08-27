export default function BlogList({ children, meta, maxWidth = 'max-w-3xl' }) {
  return (
    <div className="px-4 bg-slate-200 min-h-screen dark:bg-slate-900 ">
      <div className="py-40 mx-auto">
        <div
          className={`mx-auto ${maxWidth} prose prose-cyan prose-slate dark:prose-invert`}
        >
          <h1 className="text-6xl font-extrabold text-slate-900 dark:text-slate-100">
            {meta.title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
}
