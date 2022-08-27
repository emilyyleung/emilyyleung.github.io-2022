import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import Layout from 'components/UI/Layout';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Emily Y Leung Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout meta={{ title: 'Blog Posts' }}>
        <ul>
          {posts.map((post) => (
            <li key={post.filePath}>
              <Link
                as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/blog/[slug]`}
              >
                <a>
                  {post.data.title} - {post.data.date}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
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
