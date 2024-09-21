import React from 'react';
import { mernStackTools } from '../assets/Assets';

const Tools = () => {
  return (
    <div id='tools' className="p-4 lg:w-[70%] w-[95%] mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Essentials Tools I Use </h2>
      <p className='text-lg my-4'>Discover the powerful tools and technologies.i sue to create exceptional,high-performing websites & Applications.</p>
      <div className="grid grid-cols-auto  gap-6">
        {mernStackTools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-900 cursor-pointer shadow-zinc-700">
            <img src={tool.image} alt={tool.tool} className="w-16 h-16 mb-2 rounded-full" />
            <h1 className="font-bold text-lg">{tool.tool}</h1>
            <h2 className="text-zinc-400 text-center">{tool.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
