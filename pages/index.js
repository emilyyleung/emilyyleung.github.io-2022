import Head from 'next/head';
import GithubLogo from 'components/logos/github.jsx';
import InstagramLogo from 'components/logos/instagram.jsx';
import LinkedinLogo from 'components/logos/linkedin.jsx';
import MediumLogo from 'components/logos/medium.jsx';
import TwitterLogo from 'components/logos/twitter.jsx';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-200 text-slate-500 selection:bg-orange-300 selection:text-orange-900">
      <Head>
        <title>Emily Y Leung</title>
        <meta name="description" content="Emily Y Leung" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="h-full p-8 lg:p-32 md:max-w-7xl lg:w-screen font-inter">
        <div className="lg:text-5xl text-3xl font-bold">
          <h1 className="leading-normal">
            <span className="bg-slate-700 text-white px-1">Emily Y Leung</span>
            <span className="select-none"> is a </span>
            <span className="bg-slate-400 text-slate-600 px-1">
              Systems Developer
            </span>
            <span className="select-none"> with a background in </span>
            <span className="underline">Computational Design.</span>
          </h1>
          <br className="select-none" />
          <h2 className="leading-normal ">
            <span className="select-none">
              Currently designing and building web-based solutions at{' '}
            </span>
            <span className="bg-slate-400 text-slate-600 px-1">
              Architectus Digital.
            </span>
          </h2>
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
            className="underline hover:text-orange-400"
            rel="noreferrer"
            href="https://emilyyleung.github.io/eleventy-bragdoc/"
          >
            Bragdoc
          </a>
        </div>
      </div>
    </div>
  );
}
