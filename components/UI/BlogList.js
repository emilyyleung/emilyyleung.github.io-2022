import Link from 'next/link';
import { parse, format } from 'date-fns';
import au from 'date-fns/locale/en-AU';

const simpleDate = (dateString) => {
  const dateObj = parse(dateString, 'yyyy-MM-dd', new Date());
  const simpleString = format(dateObj, 'MMMM d, yyyy', {
    locale: au,
  });
  return simpleString;
};

export default function BlogList({ meta, maxWidth = 'max-w-3xl', posts }) {
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
          <ul>
            {posts.map((post) => (
              <li key={post.filePath}>
                <Link
                  as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/blog/[slug]`}
                >
                  <a className="no-underline hover:text-orange-400 text-lg">
                    <div className="grid grid-cols-[1fr_auto] gap-1">
                      <div>{post.data.title} </div>
                      <div className="justify-self-end">
                        <span className="text-slate-400">
                          {simpleDate(post.data.date)}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
