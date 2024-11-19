import React from 'react';
import { motion } from 'framer-motion';
import heroimg from '../assets/kishoreimgdark.png';
import "./Hero.css";
import resume from '../assets/kishoreresume.pdf';

const Hero = () => (
    <section
        id="home"
        className="h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-white relative overflow-hidden"
        style={{ fontFamily: "'Arial', sans-serif" }}
    >
        {/* Left Content */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6 text-left md:text-left">
            <motion.p
                className="text-sm md:text-lg tracking-widest text-gray-500 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                KISHORE J
            </motion.p>
            <motion.h1
                className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Developer & Creator
            </motion.h1>
            <p className="text-sm md:text-lg font-medium text-gray-500 leading-relaxed">
                I am a first-year B.Tech student majoring in Artificial Intelligence and Data Science at CIT Chennai,
                with a strong passion for and hands-on experience in Android/Web Development and Machine Learning.
                Currently seeking a summer internship opportunity to leverage my skills and contribute to a company's technical initiatives.
            </p>
            <div className="pt-2">
                <a
                    className = "text-sm md:text-lg font-semibold text-black hover:underline mr-4"
                    href = {resume}
                    target='_blank'
                >
                    View Resume
                </a>
                or
                <a
                    className="text-sm md:text-lg ml-4 font-semibold text-black hover:underline"
                    href="/about"
                >
                    Read About Me
                </a>
            </div>
        </div>

        {/* Right Image */}
        <motion.img
            className="md:w-2/3 lg:w-1/2 h-auto object-cover md:object-contain"
            src={heroimg}
            alt="Kishore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                maxHeight: '90%', 
                marginRight: '-10%',
            }}
        />
    </section>
);

export default Hero;
