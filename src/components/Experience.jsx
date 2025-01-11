import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Galaxy Organization',
        period: '2024 Dec - Present',
        description: 'Currently participating in an internship with Galaxy Organization, focused on Cloud Computing and Artificial Intelligence using Alibaba Cloud technologies. This role involves gaining hands-on experience with cloud infrastructure, machine learning, and AI-driven solutions. My primary objectives are to build a strong foundation in cloud services, enhance my knowledge of AI integration within cloud environments, and apply these technologies to practical, real-world scenarios. This experience is equipping me with valuable skills for future projects in cloud computing and AI innovation.',
      },
      {
        company: 'SHAI for AI',
        period: '2024 Sep - 2024 Nov',
        description: 'As a Full Stack Development internship at SHAI for AI, I am participating in a comprehensive training program focused on web development and AI integration. This course equips me with skills in front-end technologies like HTML5, CSS, JavaScript, and React, along with back-end tools such as PHP, Laravel, and SQL. Additionally, I am learning how to integrate AI functionalities using GPT and other AI APIs, enabling me to build advanced, scalable web applications with AI capabilities.',
      },
      {
        company: 'Safwa Islamic Bank',
        period: '2024 Aug - 2024 Aug',
        description: 'I completed an intensive one-month training at Safwa Islamic Bank, as part of a select group of top students chosen for a special internship program. My primary role involved activating electronic services and opening accounts for new customers. Through this training, I developed strong skills in customer service, account management, and technical support for electronic banking services, with a focus on delivering an exceptional customer experience.',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience