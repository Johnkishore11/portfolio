// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    id="about"
    className="py-16 mt-36 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    <div className="container mx-auto px-4 md:px-8">
      {/* Intro Section */}
      <p className="text-base md:text-lg text-gray-500 tracking-widest">
        A FEW WORDS ABOUT ME
      </p>
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-5 mb-6 leading-tight">
        I'm Kishore J, an AI and Data Science student, passionate developer, and creator. With experience in web development and machine learning, I create impactful, responsive, and user-friendly digital experiences.
      </h2>
      <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-400">
        Over the past few years, I have worked on multiple projects, including a 1-month internship at a company, gaining hands-on experience and honing my skills. In my free time, I enjoy traveling, driving, and playing cricket and football, staying active and exploring new adventures.
      </h3>

      {/* Services and Tools Section */}
      <div className="flex flex-wrap justify-around mt-16 mb-16 gap-12">
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-500">SERVICES</p>
          <h4 className="text-xl md:text-2xl font-semibold">UI & UX</h4>
          <h4 className="text-xl md:text-2xl font-semibold">Programming</h4>
          <h4 className="text-xl md:text-2xl font-semibold">Web Development</h4>
          <h4 className="text-xl md:text-2xl font-semibold">Editing</h4>
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-500">TOOLS I USE</p>
          <h4 className="text-xl md:text-2xl font-semibold">Figma</h4>
          <h4 className="text-xl md:text-2xl font-semibold">Photoshop</h4>
          <h4 className="text-xl md:text-2xl font-semibold">VS Code</h4>
          <h4 className="text-xl md:text-2xl font-semibold">React JS</h4>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Experience Section */}
      <div className="mt-16 px-4 md:px-8">
        <p className="text-base md:text-lg text-gray-500 tracking-widest">
          EXPERIENCE
        </p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-5 mb-6 leading-tight">
          Over 2 Years of Experience
        </h2>
        <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-400">
          I am a dedicated web developer with hands-on experience from a 1-month internship and several personal projects. I specialize in creating responsive and user-friendly applications. 
          As a fresher, I am eager to learn, grow, and collaborate with dynamic teams, 
          contributing to innovative solutions while continuously improving my skills in web development. 
          For more details, head over to my <a className='hover:underline hover:text-black' href="https://www.linkedin.com/in/kishore-j11/">LinkedIn profile.</a> 
        </h3>
      </div>
    </div>
  </motion.section>
);

export default About;
