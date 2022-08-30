// Backend imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
// Frontend imports
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils';

// Custom Components
import CustomLink from 'components/UI/CustomLink';
import BlogLayout from 'components/UI/BlogLayout';

const TestComponent = dynamic(() => import('components/UI/TestComponent'));

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent,
  Head,
};

export default function PostPage({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogLayout meta={frontMatter}>
        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </BlogLayout>
    </>
  );
}

// Generates all of the static paths for each post
export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    // { fallback: false } means other routes should 404
    fallback: false,
  };
};
