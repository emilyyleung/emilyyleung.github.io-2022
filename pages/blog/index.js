import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import BlogList from 'components/UI/BlogList';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';
import { parse, format } from 'date-fns';
import au from 'date-fns/locale/en-AU';

const simpleDate = (dateString) => {
  const dateObj = parse(dateString, 'yyyy-MM-dd', new Date());
  const simpleString = format(dateObj, 'MMMM d, yyyy', {
    locale: au,
  });
  return simpleString;
};

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Emily Y Leung Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogList
        meta={{
          title: 'Blog',
        }}
      >
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
      </BlogList>
    </>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
