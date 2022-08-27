import { useEffect } from 'react';

import prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

export default function BlogLayout({ children, meta, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    prism.highlightAll();
  }, [children]);
  return (
    <div className="px-4 bg-slate-200 min-h-screen dark:bg-slate-900 ">
      <div className="py-40 mx-auto">
        <h1 className="text-6xl text-center font-extrabold text-slate-900 dark:text-slate-100">
          {meta.title}
        </h1>
        <div
          className={`mt-16 mx-auto ${maxWidth} prose prose-cyan prose-slate dark:prose-invert`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
