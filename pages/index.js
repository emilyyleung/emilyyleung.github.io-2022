import Head from 'next/head';
import Link from 'next/link';
import GithubLogo from 'components/logos/github.jsx';
import InstagramLogo from 'components/logos/instagram.jsx';
import LinkedinLogo from 'components/logos/linkedin.jsx';
import MediumLogo from 'components/logos/medium.jsx';
import TwitterLogo from 'components/logos/twitter.jsx';

export default function TestPage() {
  return (
    <div className="px-4 bg-slate-200 min-h-screen">
      <Head>
        <title>Emily Y Leung</title>
        <meta name="description" content="Emily Y Leung" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <div className="lg:py-40 py-8 px-4 mx-auto">
        <div
          className={`mx-auto lg:max-w-6xl max-w-3xl prose lg:prose-xl prose-slate`}
        >
          <div className="">
            <div className="text-slate-400 not-prose lg:text-6xl text-4xl font-extrabold leading-[1.2] lg:leading-[4.5rem]">
              <span className="text-slate-800">Emily Y Leung</span> is a{` `}
              <span className="text-cyan-600">Systems Developer</span> with a
              background in{` `}
              <span className="text-slate-500">Computational Design</span>.
            </div>
            <br />
            <div className="text-slate-400 not-prose lg:text-6xl text-4xl font-extrabold leading-[1.2] lg:leading-[4.5rem]">
              Currently designing and building web-based solutions at{` `}
              <span className="text-cyan-600">Architectus Digital</span>.
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4 mt-10 h-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://emily-y-leung.medium.com/"
              >
                <MediumLogo size={6} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/emilyyleung"
              >
                <GithubLogo size={6} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/emily-y-leung/"
              >
                <LinkedinLogo size={6} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/emily_y_leung/"
              >
                <InstagramLogo size={6} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/emily_y_leung"
              >
                <TwitterLogo size={6} />
              </a>
            </div>
            <div className="grid grid-flow-col auto-cols-max gap-4 mt-10 text-xl select-none">
              <a
                target="_blank"
                className="underline hover:text-orange-400 text-slate-500"
                rel="noreferrer"
                href="https://emilyyleung.github.io/eleventy-bragdoc/"
              >
                Bragdoc
              </a>
              <Link rel="noreferrer" href="/blog">
                <a className="underline hover:text-orange-400 text-slate-500">
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
