import React from 'react';
import { FaArrowDown, FaDownload} from 'react-icons/fa';

import Typed from 'typed.js';

import Ressume from '../assets/ressume.pdf'


const Hero = () => {

  const el = React.useRef(null); // Create a reference for the typed text element

  React.useEffect(() => {
    // Initialize Typed.js instance
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'UI/UX Designer.','Wordpress Developer.'],
      typeSpeed: 50,
      backSpeed:50,
      loop:Infinity
    });

    // Cleanup function to destroy the Typed.js instance on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array means it only runs once, like componentDidMount

  return (
    <div id='about' className='mx-8  lg:mx-[17vw] mt-[6vw] font-bold py-4'>
 
      <h1 className='text-3xl text-gray-200 my-4'>
        Hi, I am Harish <br />
        <span ref={el} className="inline-block my-4 md:my-10 text-5xl 2xl:text-8xl text-[lightseagreen]"></span> {/* Apply margin */}
      </h1>
      <span className='text-3xl text-gray-200 my-4'>From India.</span>
      <div className="buttons flex gap-4 my-8">
        <a href={Ressume} download='ressume'><button className='px-4 py-3  flex gap-2 items-center bg-[lightseagreen] text-black hover:bg-transparent hover:text-white hover:border hover:border-[lightseagreen] text-xs sm:text-lg '> Download CV <FaDownload/></button></a>
        <a href="#tools"><button  className=' px-4 py-3 flex gap-2 items-center border border-[lightseagreen] text-xs sm:text-lg  hover:bg-[lightseagreen] hover:text-black '> Scroll Down <FaArrowDown /></button></a>
      </div>
    </div>
  );
};

export default Hero;
