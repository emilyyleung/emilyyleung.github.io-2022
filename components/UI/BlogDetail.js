import { useEffect } from 'react';
import Link from 'next/link';

import prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

export default function BlogDetail({ children, meta, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    prism.highlightAll();
  }, [children]);
  return (
    <div className="px-4 bg-slate-200 min-h-screen">
      <div className="lg:py-40 py-8 px-4 mx-auto">
        <div
          className={`mx-auto ${maxWidth} prose prose-hr:border-slate-300 prose-hr:m-0 prose-hr:border-2 prose-cyan prose-slate`}
        >
          <nav>
            <Link href="/blog">
              <a className="hover:text-orange-400">⟵ All Posts</a>
            </Link>
          </nav>
          <div className="py-8">
            <h1 className="m-0 lg:text-6xl text-5xl font-extrabold text-slate-900">
              {meta.title}
            </h1>
            {meta.date && <p>{meta.date}</p>}
            <hr />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
