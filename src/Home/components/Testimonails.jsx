import React, { useEffect } from 'react';
import { leftvector, rightvector } from '../../assets';

// Left Vector SVG Component
const LeftVector = () => (
  <svg width="200" height="2" viewBox="0 0 200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="1" x2="200" y2="1" stroke="currentColor" strokeWidth="1" className="text-gray-600"/>
  </svg>
);

// Right Vector SVG Component
const RightVector = () => (
  <svg width="200" height="2" viewBox="0 0 200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="1" x2="200" y2="1" stroke="currentColor" strokeWidth="1" className="text-gray-600"/>
  </svg>
);

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The real-time insights from NeuralFlow's predictive analytics have completely transformed our decision-making process.",
      name: "Katie Sims",
      title: "COO of NevaCore Industries",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      quote: "NeuralFlow's AI solutions helped us reduce operational costs by 40% while improving efficiency. Truly groundbreaking technology!",
      name: "David Elson",
      title: "CTO of QuantumLeap",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      quote: "Implementing NeuralFlow was the best decision we made. Their platform integrates seamlessly with our existing systems.",
      name: "Bradley Law",
      title: "CEO of TechNova",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      quote: "The customer support team at NeuralFlow is exceptional. They're always available to help with any questions we have.",
      name: "Stephanie Sharkey",
      title: "Director of Data Science, InnoVate",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 5,
      quote: "We've seen a 300% ROI since implementing NeuralFlow. Their predictive models are incredibly accurate.",
      name: "Chris Glasser",
      title: "VP of Operations, FutureSystems",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 6,
      quote: "NeuralFlow's intuitive interface makes complex data analysis accessible to our entire team, not just the data scientists.",
      name: "Kathy Pacheco",
      title: "CDO of DigitalFrontier",
      avatar: "/api/placeholder/60/60"
    },
  ];

  useEffect(() => {
    // Create CSS keyframes for smooth infinite animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @keyframes scrollRight {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
      
      .marquee-left {
        animation: scrollLeft 40s linear infinite;
      }
      
      .marquee-right {
        animation: scrollRight 35s linear infinite;
      }
      
      .marquee-container {
        will-change: transform;
      }
      
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      
      .animate-pulse-slow {
        animation: pulse-slow 4s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const TestimonialCard = ({ testimonial, index }) => (
    <div 
      key={index}
      className="flex-shrink-0 w-80 mx-3 bg-black/90 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 relative hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
    >
      {/* Quote mark */}
      <div className="absolute top-4 left-6">
        <svg 
          className="w-8 h-8 text-cyan-400/60 group-hover:text-cyan-400/80 transition-colors duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>
      
      {/* Quote text */}
      <div className="mt-8 mb-6">
        <p className="text-gray-300 text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
          {testimonial.quote}
        </p>
      </div>
      
      {/* Author info */}
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4 border-2 border-slate-700 group-hover:border-cyan-500/50 transition-colors duration-300"
        />
        <div>
          <h4 className="text-white font-medium text-sm group-hover:text-cyan-100 transition-colors duration-300">
            {testimonial.name}
          </h4>
          <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#000A16] text-white py-20 overflow-hidden relative">
      {/* Background gradient blob */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full filter blur-3xl w-96 h-96 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-cyan-400/10 rounded-full filter blur-xl w-80 h-80 animate-pulse-slow animation-delay-2000"></div>
          </div>
        </div>
        {/* Additional gradient effects */}
        <div className="absolute top-10 left-2 w-10 h-10 bg-purple-500/0 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-block mb-6">
            <div className="relative inline-flex items-center">
              <div className="mr-4 hidden md:block">
                <img src={leftvector} alt="" />
              </div>
              <span className="text-white text-xs font-thin tracking-widest uppercase">
                T E S T I M O N I A L S
              </span>
              <div className="ml-4 hidden md:block">
                <img src={rightvector} alt="" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-thin mb-5 leading-tight">
            Trusted by Innovators{' '}
            <span className="text-cyan-400 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-gray-400 text-md  lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Real Stories, Real Success: Hear from Our Satisfied Clients
          </p>
        </div>

        {/* Top marquee - moving left */}
        <div className="relative overflow-hidden mb-8">
          <div className="marquee-container marquee-left flex">
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`top-set1-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={`top-set1-${testimonial.id}-${index}`}
              />
            ))}
            {/* Second set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`top-set2-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={`top-set2-${testimonial.id}-${index}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom marquee - moving right */}
        <div className="relative overflow-hidden">
          <div className="marquee-container marquee-right flex">
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`bottom-set1-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={`bottom-set1-${testimonial.id}-${index}`}
              />
            ))}
            {/* Second set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`bottom-set2-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={`bottom-set2-${testimonial.id}-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Fade out edges */}
      <div className="absolute inset-0 pointer-events-none">
      </div>
    </section>
  );
};

export default TestimonialsMarquee;