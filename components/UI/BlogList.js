import Link from 'next/link';
export default function BlogList({ children, meta, maxWidth = 'max-w-3xl' }) {
  return (
    <div className="px-4 bg-slate-200 min-h-screen">
      <div className="lg:py-40 py-8 px-4 mx-auto">
        <div className={`mx-auto ${maxWidth} prose prose-cyan prose-slate`}>
          <nav>
            <Link href="/">
              <a className="hover:text-orange-400">⟵ Emily Y Leung</a>
            </Link>
          </nav>
          <div className="pt-8">
            <h1 className="lg:text-6xl text-5xl font-extrabold text-slate-900">
              {meta.title}
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
