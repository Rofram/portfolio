import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  href: string;
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, imgWidth=100, imgHeight=50 }) => {
  return (
    <a href={href} target="_blank" rel="noopener">
      <div className="flex justify-center items-center relative h-20 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <Image src={imgSrc} className="" width={imgWidth} height={imgHeight} />
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-center my-12">
      <section className="my-12">
        <h1 className="flex flex-col align-center text-center text-7xl md:text-9xl font-black tracking-tighter banner-home">
          <span>Developer.</span>
          <span>Fullstack.</span>
          <span>React.</span>
        </h1>
      </section>
      <section className="mt-20">
        <h2 className="flex justify-center align-center text-1xl font-bold tracking-wider uppercase text-gray-800">
          I work with
        </h2>
        <div className="mt-5 md:mt-15 grid w-full grid-cols-2 grid-rows-2 gap-4 md:grid-cols-8 md:grid-rows-1">
          <Card
            href={'https://nodejs.org/en/'}
            imgSrc={'/img/pages/home/nodejs.svg'}
            imgHeight={40}
          />
          <Card
            href={'https://git-scm.com/'}
            imgSrc={'/img/pages/home/git.svg'}
          />
          <Card
            href={'https://reactjs.org/'}
            imgSrc={'/img/pages/home/react.svg'}
          />
          <Card
            href={'https://nextjs.org/'}
            imgSrc={'/img/pages/home/nextjs.svg'}
          />
          <Card
            href={'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'}
            imgSrc={'/img/pages/home/javascript.svg'}
          />
          <Card
            href={'https://www.typescriptlang.org/'}
            imgSrc={'/img/pages/home/typescript.svg'}
          />
          <Card
            href={'https://www.python.org/'}
            imgSrc={'/img/pages/home/python.svg'}
          />
          <Card
            href={'https://sass-lang.com/'}
            imgSrc={'/img/pages/home/sass.svg'}
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold my-10">
          Work in Progress
        </h1>
        <iframe 
          src="https://giphy.com/embed/o0vwzuFwCGAFO" 
          width="400" 
          height="400" 
          frameBorder="0" 
          className="giphy-embed rounded-xl" 
          allowFullScreen
        />
      </section>
    </main>
  )
}
