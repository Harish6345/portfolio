import React from 'react'
import { projects } from '../assets/Assets'
import { GoArrowUpRight } from 'react-icons/go'

const Highlights = () => {
  return (
    <div className='p-4 lg:w-[70%] w-auto mx-auto my-10'>
      <h1 className='text-2xl font-bold my-2'>My Projects Highlights</h1>
        <div className="grid grid-col-auto md:grid-cols-hero  gap-6">
        {projects.map((tool, index) => (
          <div key={index} className="flex flex-col items-center  shadow-lg shadow-zinc-600 cursor-pointer scale-90 hover:scale-100 duration-300 w-[100%]">
            <img src={tool.image} alt={tool.tool} className='my-3' />
            <h1 className="font-bold text-lg">{tool.tool}</h1>
            <h2 className=" text-center flex items-center gap-4">{tool.name} <span ><GoArrowUpRight /></span></h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {tool.techStack.map((tech, idx) => (
                <button
                  key={idx}
                  className="bg-zinc-800  text-white py-1 px-2 rounded"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Highlights