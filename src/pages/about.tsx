import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col items-center">
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

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10"
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-300">Back</a>
        </Link>
      </motion.div>
    </div>
  )
}

export default About;