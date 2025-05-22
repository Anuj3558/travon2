import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { homevid, leftvector, rightvector, vector } from '../../assets';
import { GlowButton } from './glow-button';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const industries = [
    'Recruitment',
    1500,
    'Contact Centers',
    1500,
    'BFSI',
    1500,
    'Automobile Servicing',
    1500,
    'Veterinary Clinics',
    1500,
    'Dental Clinics',
    1500,
    'Collection Agencies',
    1500,
    'Supply Chain & Logistics',
    1500,
    'Event Management',
    1500,
    'Tax Compliance',
    1500,
    'Your Business',
    1500
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative w-full pt-[20vh] min-h-[100vh] bg-black overflow-hidden flex flex-col items-center justify-center px-4 font-['Montserrat']" id='home'>
      {/* Full-width background image positioned at bottom */}
      <motion.div 
        className="absolute top-[30vh] inset-x-0 bottom-0 z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
      <video autoPlay loop muted className="w-[100vw] h-[100vh] ">
        <source src={homevid} />
      </video>
      </motion.div>
      
      {/* Gradient overlay */}
      <div className="absolute z-10 top-[30vh] inset-x-0 h-[70vh] bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-blue-500 opacity-40 "></div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl md:text-6xl text-white font-thin mb-5 leading-[1.2]"
          variants={itemVariants}
        >
          Voice AI Agents for{' '}
          <div className="inline-block min-w-[300px] h-[72px] md:min-w-[400px]">
            <TypeAnimation
              sequence={industries}
              wrapper="span"
              speed={30}
              deletionSpeed={50}
              style={{ 
                display: 'inline-block',
                background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: '1.2'
              }}
              repeat={Infinity}
            />
          </div>
        </motion.h1>
        
        <motion.p 
          className="text-gray-400 md:text-[18px] text-[13px] font-medium mb-10 max-w-full mx-auto leading-[1.5]"
          variants={itemVariants}
        >
          Embed intelligent voice agents into your workflows to boost efficiency, cut costs, and scale personalized conversations across industries.
        </motion.p>

        <motion.div 
          className="flex justify-center items-center gap-4 md:gap-8"
          variants={itemVariants}
        >
          {/* Left wave vector - centered with button */}
          <motion.div 
            className="hidden md:flex items-center justify-center h-20"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={leftvector}
              alt="Wave pattern"
              width={400}
              height={80}
              className="h-full object-contain"
            />
          </motion.div>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GlowButton><a href="#contact">Get Started for Free</a></GlowButton>
          </motion.div>
       
          {/* Right wave vector - centered with button */}
          <motion.div 
            className="hidden md:flex items-center justify-center h-20"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={rightvector}
              alt="Wave pattern"
              width={400}
              height={80}
              className="h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Blue gradient at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-900/80 to-transparent z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
    </div>
  );
};

export default HeroSection;