import React, { useEffect, useState } from 'react';

const Card = () => {
  const [count1, setCount1] = useState(0); // Counter for years of experience (up to 30)
  const [count2, setCount2] = useState(0); // Counter for another statistic (up to 5)

  useEffect(() => {
    // Counter 1: Increment slowly to 30
    const interval1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount < 30) {
          return prevCount + 1;
        } else {
          clearInterval(interval1);
          return prevCount;
        }
      });
    }, 200);

    // Counter 2: Increment slowly to 5
    const interval2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1;
        } else {
          clearInterval(interval2);
          return prevCount;
        }
      });
    }, 800);

    // Cleanup intervals when component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className='lg:w-[70%] w-auto  p-4  mx-auto text-white text-sm md:text-lg py-4  bg-[#1e1e1e] my-16'>
      <p className='lg:w-[60%] w-full mx-4 '>Meduru Harish is a dedicated web developer with a passion for building modern, responsive websites. He specializes in creating visually appealing designs using React and custom CSS. With a focus on continuous learning, Harish is always looking to improve his development skills.</p>
      <div className="project-details flex gap-6 flex-wrap">
        <h1 className='text-4xl mx-4 my-4 '>{count1} <span className='text-[lightseagreen]'>+</span><br /><p className='text-sm'>Projects completed</p></h1>
        <h1 className='text-4xl mx-4 my-4'>{count2} <span className='text-[lightseagreen]'>+</span><br /><p className='text-sm'>Years of Experience</p></h1>
  
      </div>
    </div>
  );
}

export default Card;
