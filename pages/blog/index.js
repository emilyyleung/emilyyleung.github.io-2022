import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import BlogList from 'components/UI/BlogList';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';

export default function Index({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Emily Y Leung Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogList meta={{ title: 'Blog' }} posts={posts} />
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
