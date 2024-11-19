// src/components/Projects.jsx
import React from 'react';
import project1 from '../assets/projects/movietuneshub1.png';
import project2 from '../assets/projects/bmi1.png';
import project3 from '../assets/projects/farmshed.png';
import './Projects.css';


const Projects = () => {
  return(
  <section id="projects" className="py-16 mt-5 bg-white">
   {/* Title */}
   <div className="px-8 mb-12">
          <h2 className="text-6xl font-bold mb-10">Projects</h2>
      </div>
      {/* Projects */}
      <div className="space-y-12 px-4 lg:px-16">
        {/* Project 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={project1}
            alt="Nexus - Chat Application"
            className="w-full lg:w-1/2 shadow-lg"
          />
          <div className="lg:w-1/2 bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">1. MovieTunesHub - Music Application</h3>
            <p className="text-gray-600 mb-4">
              Nexus Chat Application is a modern chat application built with the latest technologies,
              including Next.js, TypeScript, Tailwind CSS, MongoDB, Prisma, and NextAuth. It features
              real-time chatting, group creation, profile customization, and various authentication methods.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">HTML</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">CSS</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">JavaScript</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://johnkishore11.github.io/MovieTunesHub-Website/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Johnkishore11/MovieTunesHub-Website"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <img
            src={project2}
            alt="Cinematica - MERN Application"
            className="w-full lg:w-1/2 shadow-lg"
          />
          <div className="lg:w-1/2 bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">2. BMI Calculator</h3>
            <p className="text-gray-600 mb-4">
              Cinematica is a feature-rich MERN application that allows users to seamlessly track and manage
              the movies and shows they watch or plan to watch. It includes full CRUD functionality and user
              account management.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">HTML</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">CSS</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">JavaScript</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://johnkishore11.github.io/BMI-Calculator/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Johnkishore11/BMI-Calculator"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <img
            src={project3}
            alt="Developer Portfolio"
            className="w-full lg:w-1/2 shadow-lg"
          />
          <div className="lg:w-1/2 bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">3. FarmShed | Grocery website</h3>
            <p className="text-gray-600 mb-4">
              A portfolio website of a game developer built with Gatsby and Contentful CMS. It features modern
              animations using Framer Motion and programmatically generated pages with an advanced SEO setup.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">React.js</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">Tailwind CSS</span>
              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">Contentful</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://farmshed-website.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Live Site
              </a>
              <a
                href="https://github.com/Johnkishore11/FarmShed---Website"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
);
};

export default Projects;



 {/* <div className="mx-auto px-8">
      <h2 className="text-6xl font-bold mb-10">Projects</h2>
      <div className='grid grid-cols-2 gap-20 p-3 mt-10'>
        <div className='container'>
      <img className='image' src={project1}/>
      <div className='overlay'>
        <div className='text'>MovieTuneshub - Music page</div>
      </div>
      </div>

      <div className='container'>
      <img src={project2}/>
      <div className='overlay'>
        <div className='text'>BMI Calculator</div>
      </div>
      </div>
      </div>
      
    </div> */}