import React from 'react';
import {adonis, fastify, Link, nest, node, NUXT, vite } from '../../assets/TrusLogo'; // Importing the next logo from assets
const TrustedBySection = () => {
  // Logos array with name and image path
  const logos = [
    { 
      name: "Next.js", 
      image:Link
    },
    { 
      name: "Vercel", 
      image: vite
    },
    { 
      name: "Fastify", 
      image: fastify
    },
    { 
      name: "Adonis", 
      image: adonis
    },
    
    { 
      name: "Nest", 
      image: nest
    },
    { 
      name: "Nuxt", 
      image: NUXT 
    },
    { 
      name: "Node.js", 
      image: node 
    },
  ];

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-[#000A16] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Title section - centered on mobile, left-aligned on desktop */}
          <div className="w-full md:w-48 mb-6 md:mb-0 md:mr-12 flex-shrink-0 text-center md:text-left">
            <h3 className="text-gray-400 text-lg md:text-3xl font-bold">Trusted By</h3>
          </div>
          
          {/* Divider - horizontal on mobile, vertical on desktop */}
          <div className="w-full md:w-px md:h-22 border-t md:border-t-0 md:border-l border-gray-700 mb-6 md:mb-0"></div>
          
          {/* Marquee section */}
          <div className="flex-1 w-full overflow-hidden">
            <div className="relative">
              {/* Marquee container */}
              <div className="animate-marquee whitespace-nowrap">
                {duplicatedLogos.map((logo, index) => (
                  <div key={index} className="inline-flex items-center mx-4 md:mx-10 h-12 md:h-16">
                    <img 
                      src={logo.image} 
                      alt={logo.name} 
                      className="h-8 md:h-14 object-contain max-w-none" 
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-block;
        }
        
        /* Adjust animation speed on mobile */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
};

export default TrustedBySection;