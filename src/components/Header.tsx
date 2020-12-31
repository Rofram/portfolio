import Image from 'next/image';
import Link from 'next/link';
import { useRef } from "react";
import { motion, useCycle } from 'framer-motion';

import { MenuToggle } from "../utils/MenuToggle";
import { Navigation } from "../utils/Navigation";
import { useDimensions } from "../utils/use-dimensions";



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className='flex justify-center md:justify-between py-4 md:py-4 items-center'>
      <Image 
        src='/img/Rofran-logo.svg'
        alt='Rofran'
        width={138}
        height={60}
      />

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="side-menu md:hidden"
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => setIsOpen()} />
      </motion.nav>

      <nav className="hidden md:block space-x-8 font-medium"> 
        <Link href="/projects" >
          <a className="tracking-wide hover:text-gray-300">Projects</a>
        </Link>
        <Link href="/knowledge" >
          <a className="tracking-wide hover:text-gray-300">Knowledge</a>
        </Link>
        <Link href="/about" >
          <a className="tracking-wide hover:text-gray-300">About-Me</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header;