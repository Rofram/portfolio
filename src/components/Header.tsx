import Image from 'next/image';
import Link from 'next/link';
import { useRef } from "react";
import { motion, useCycle } from 'framer-motion';

import { MenuToggle } from "../utils/MenuToggle";
import { Navigation } from "../utils/Navigation";
import { useDimensions } from "../utils/use-dimensions";
import { MenuItem } from '../utils/MenuItem';

const Pages = [
  {
    name: 'Projects',
    url: '/projects',
  }, 
  {
    name: 'Knowledge',
    url: '/knowledge',
  }, 
  {
    name: 'About-Me',
    url: '/about',
  }, 
];

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
    <header className='flex justify-center md:justify-between py-4 items-center'>
      <Link href="/" >
            <a>
              <Image 
                src='/img/Rofran-logo.svg'
                alt='Rofran'
                width={138}
                height={60}
              />
            </a>
          </Link> 

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="side-menu md:hidden"
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation>
          {Pages.map(i => (
            <MenuItem name={i.name} url={i.url} key={i.name} toggle={() => setIsOpen()} />
          ))}
        </Navigation>
        <MenuToggle toggle={() => setIsOpen()} />
      </motion.nav>

      <nav className="hidden md:block space-x-8 font-medium"> 
        {Pages.map(i => (
          <Link href={i.url} key={i.name} >
            <a className="tracking-wide hover:text-gray-300">{i.name}</a>
          </Link>  
        ))}
      </nav>
    </header>
  )
}

export default Header;