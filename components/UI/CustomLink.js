import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <>
      <Link as={as} href={href}>
        <a {...otherProps} />
      </Link>
      <style jsx>{`
        a:hover {
          color: rgb(251 146 60);
        }
      `}</style>
    </>
  );
}
