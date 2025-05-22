"use client"

import { useEffect, useRef } from "react"
import { rightvector } from "../../assets"
import { GlowButton } from "./glow-button"
import { SiSalesforce, SiHubspot, SiZoho, SiLinkedin, SiWhatsapp, SiGmail, SiZoom } from 'react-icons/si';
import { FaCalendarAlt } from 'react-icons/fa'; // for cal.com

// Right arrow SVG component
const RightVector = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// GlowButton component with enhanced animations


const icons = [
  // Lightning/Bolt icon
  <SiSalesforce/>, <SiHubspot/>, <SiZoho/>, <SiLinkedin/>, <SiWhatsapp/>, <SiGmail/>, <SiZoom/> ,<FaCalendarAlt/>
]

const IntegrationSection = () => {
  const column1Ref = useRef(null)
  const column2Ref = useRef(null)
  const column3Ref = useRef(null)

  useEffect(() => {
    const column1 = column1Ref.current
    const column2 = column2Ref.current
    const column3 = column3Ref.current

    if (!column1 || !column2 || !column3) return

    // Create CSS keyframes for smooth infinite animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes scrollUpSooth {
        0% { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      
      @keyframes scrollDownSooth {
        0% { transform: translateY(-50%); }
        100% { transform: translateY(0); }
      }
      
      @keyframes floatGlow {
        0%, 100% { 
          transform: translateY(0) scale(1);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }
        50% { 
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
      }
      
      @keyframes pulseGlow {
        0%, 100% { 
          background: rgba(15, 23, 42, 0.6);
          border-color: rgba(59, 130, 246, 0.3);
        }
        50% { 
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(59, 130, 246, 0.5);
        }
      }
      
      .scroll-up-sooth {
        animation: scrollUpSooth 120s linear infinite;
      }
      
      .scroll-down-sooth {
        animation: scrollDownSooth 120s linear infinite;
      }
      
      .scroll-up-slow-sooth {
        animation: scrollUpSooth 120s linear infinite;
      }
      
      .icon-float {
        animation: floatGlow 4s ease-in-out infinite;
        animation-delay: var(--delay);
      }
      
      .icon-pulse {
        animation: pulseGlow 3s ease-in-out infinite;
        animation-delay: var(--pulse-delay);
      }
      
      .icon-item:hover {
        transform: translateY(-8px) scale(1.05) !important;
        box-shadow: 0 12px 30px rgba(59, 130, 246, 0.6) !important;
        border-color: rgba(59, 130, 246, 0.8) !important;
        background: rgba(30, 41, 59, 0.9) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
      
      .icon-item:hover svg {
        color: rgba(96, 165, 250, 1) !important;
        filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
      }
    `
    document.head.appendChild(style)

    // Apply animations
    column1.classList.add('scroll-up-sooth')
    column2.classList.add('scroll-down-sooth')
    column3.classList.add('scroll-up-slow-sooth')

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const renderIconItems = (count, startIndex = 0) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`icon-${startIndex}-${index}`}
        className="icon-item icon-float icon-pulse flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 mb-4 lg:mb-6 rounded-2xl border border-blue-500/30 bg-slate-900/60 backdrop-blur-sm transition-all duration-500 cursor-pointer"
        style={{
          '--delay': `${(index * 322)}s`,
          '--pulse-delay': `${(index * 20)}s`
        }}
      >
        <svg
          className="w-10 h-10 lg:w-12 lg:h-12 text-gray-400 transition-all duration-500"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
        {icons[index]}
          <path d={icons[(index + startIndex) % icons.length]} />
        </svg>
      </div>
    ))
  }

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#000A16] text-white relative overflow-hidden">
      {/* Enhanced gradient blob background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-96 h-96 lg:w-[700px] lg:h-[700px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 40%, rgba(147, 51, 234, 0.2) 70%, transparent 90%)',
            animationDuration: '4s'
          }}
        ></div>
      </div>

      {/* Additional floating gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div 
         
        ></div>
        <div 
         
        ></div>
        <div 
          
        ></div>
      </div>

      {/* Left Content Section with enhanced animations */}
      <div className="w-full lg:w-full flex flex-col justify-center px-5 lg:px-16 py-16 lg:py-0 relative z-10">
        <div className="mb-6">
          <span className="text-xs font-thin text-white flex items-center tracking-widest">
            I N T E G R A T I O N S
            <div className="ml-4 text-blue-400">
              <img src={rightvector}lt="" />
            </div>
          </span>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-thin mb-6 leading-tight transform transition-all duration-700 hover:translate-x-1">
          Seamlessly <span className="text-blue-400 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">Integrate</span> <br />
          with Your Favorite <span className="text-green-400 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '1s'}}>Tools</span>
        </h1>
        
        <p className="text-gray-400 mb-8 lg:mb-12 text-lg lg:text-xl leading-relaxed transform transition-all duration-700 hover:text-gray-300">
          Seamless Integration, Real-Time Insights, Continuous Improvement
        </p>
        
        <div className="transform transition-all duration-300 hover:translate-y-1">
          <GlowButton className="text-base px-8 py-4">
            <a href="#contact">Need custom integrations? <span className="text-blue-400 underline ml-2 hover:text-blue-300 transition-colors">Talk to Us</span></a>
          </GlowButton>
        </div>
      </div>

      {/* Right Marquee Section with 3 closer columns and larger icons */}
      <div className="w-full pl-16  lg:w-1/2  h-[50vh] flex sm:h-screen overflow-hidden relative">
        {/* Enhanced gradient fade effects */}

        {/* First column - Upward Marquee */}
        <div className=" h-full overflow-hidden relative">
          <div 
            ref={column1Ref} 
            className="flex flex-col items-center py-8"
          >
            {/* Double the content for seamless loop */}
            {renderIconItems(8, 0)}
            {renderIconItems(8, 0)}
          </div>
        </div>

        {/* Second column - Downward Marquee */}
        <div className="w-1/3 h-full overflow-hidden relative px-1 lg:px-2">
          <div 
            ref={column2Ref} 
            className="flex flex-col items-center py-8"
          >
            {/* Double the content for seamless loop */}
            {renderIconItems(8, 4)}
            {renderIconItems(8, 4)}
          </div>
        </div>

        {/* Third column - Upward Marquee (slower) */}
        <div className=" h-full overflow-hidden relative px-1 lg:px-2">
          <div 
            ref={column3Ref} 
            className="flex flex-col items-center py-8"
          >
            {/* Double the content for seamless loop */}
            {renderIconItems(8, 8)}
            {renderIconItems(8, 8)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntegrationSection