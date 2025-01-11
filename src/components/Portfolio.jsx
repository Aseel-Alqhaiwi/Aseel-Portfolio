import React from 'react';
import project1 from "../assets/Toyota.png"
import project2 from "../assets/Calculator.png"
import project3 from "../assets/To-Do.png"
import project4 from "../assets/Elite-Cars.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1",
      description: "Toyota Car Showcase",
      links: {
        site: "https://aseel-alqhaiwi.github.io/Project-Toyota/",
        github: "https://github.com/Aseel-Alqhaiwi/Project-Toyota",
      },
    },
    {
      img: project2,
      title: "Project #2",
      description: "Simple Calculator",
      links: {
        site: "https://aseel-alqhaiwi.github.io/Project-Calculator/",
        github: "https://github.com/Aseel-Alqhaiwi/Project-Calculator",
      },
    },
    {
      img: project3,
      title: "Project #3",
      description: "To-Do List Web Application",
      links: {
        site: "https://aseel-alqhaiwi.github.io/Project-ToDo/",
        github: "https://github.com/Aseel-Alqhaiwi/Project-ToDo",
      },
    },
    {
      img: project4,
      title: "Project #4",
      description: "Elite Cars Marketplace",
      links: {
        site: "http://aseel-alqhaiwi.wuaze.com/?i=2",
        github: "https://github.com/Aseel-Alqhaiwi/Elite-Car",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target='_blank'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300' target='_blank'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio