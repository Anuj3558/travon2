"use client"

import { logo } from "../../assets"
import { useState, useEffect } from "react"
import { GlowButton } from "./glow-button"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const logoVariants = {
    normal: { scale: 1 },
    hover: { 
      scale: 1.05,
      rotate: [0, 5, 0, -5, 0],
      transition: { 
        duration: 0.5,
        type: "spring", 
        stiffness: 300 
      }
    }
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      className={`w-full px-4 py-6 md:py-10 bg-transparent fixed top-0 z-50 transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className={`max-w-7xl mx-auto rounded-3xl border border-gray-800 flex items-center justify-between px-4 md:px-6 py-3 ${scrolled ? 'bg-[#111111]/90 backdrop-blur-sm' : 'bg-[#111111]'} transition-all duration-300`}>
        {/* Logo */}
        <motion.div 
          className="flex items-center text-white"
          whileHover="hover"
          variants={logoVariants}
        >
          <img src={logo} alt="Travon Logo" width={40} height={30} />
          <h1 className="mx-3 text-2xl font-medium">TRAVON</h1>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {["home", "usecases", "features", "contact"].map((section, index) => (
            <motion.button 
              key={section}
              custom={index}
              variants={menuItemVariants}
              onClick={() => scrollToSection(section)}
              className={`${section === 'home' ? 
                'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl text-transparent' : 
                'text-gray-300'} hover:text-cyan-400 text-xl transition-colors font-medium`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.div 
          className="hidden md:block relative"
          variants={menuItemVariants}
          custom={4}
        >
          <div className="group">
            {/* Default button (visible when not hovering) */}
            <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg px-6 py-4 transition-all duration-300 group-hover:opacity-0">
              <span className="text-white text-md ml-2 px-3 py-3 font-medium">
                <a href="#contact">Book Demo</a>
              </span>
            </div>
            
            {/* Glow button (appears on hover) */}
            <div className="absolute top-0 left-0 w-full opacity-0 text-2xl group-hover:opacity-100 transition-opacity duration-300">
              <GlowButton><a href="#contact">Book Demo</a></GlowButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden mt-2 max-w-7xl mx-auto rounded-md border border-gray-800 bg-[#111111] shadow-lg py-4 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col space-y-4 px-6">
            {["home", "usecases", "features", "contact"].map((section, index) => (
              <motion.button 
                key={section}
                custom={index}
                variants={menuItemVariants}
                onClick={() => scrollToSection(section)}
                className={`${section === 'home' ? 
                  'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' : 
                  'text-gray-300'} hover:text-cyan-400 transition-colors font-medium text-left py-2`}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
            
            {/* CTA Button - Mobile */}
            <motion.div 
              className="pt-2 relative"
              variants={menuItemVariants}
              custom={4}
            >
              <div className="group">
                {/* Default button (visible when not hovering) */}
                <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg px-5 py-3 w-full transition-all duration-300 group-hover:opacity-0">
                  <span className="text-white font-medium">
                    Book Demo
                  </span>
                </div>
                
                {/* Glow button (appears on hover) */}
                <div className="absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GlowButton fullWidth><a href="#contact">Book Demo</a></GlowButton>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}