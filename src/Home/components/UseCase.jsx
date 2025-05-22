import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Calendar, Users, UserCheck, Phone, Mail, MessageSquare, Headphones } from 'lucide-react';
import { Card } from '../../assets/TrusLogo';
import { animatiomWave, leftvector, rightvector } from '../../assets';
import { recruit } from '../../assets/Audios/audio';

const IntegratedCardGrid = () => {
  const [playingStates, setPlayingStates] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const audioRefs = useRef({});
  const sliderRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Card placeholder image
  const CardImage = () => (
    <div className="w-full h-full bg-black flex items-center justify-center rounded-lg">
      <img src={Card} alt="" height={400} className="rounded-xl object-cover transition-transform duration-700 ease-out hover:scale-105" />
    </div>
  );

  // Expanded cards data
  const cardsData = [
    {
      id: 'appointment',
      title: 'Appointment Setter',
      description: 'Our automated candidate screening and video interview solution streamlines the recruitment process by generating personalized questions based on each candidate\'s CV.',
      icon: Calendar,
      leadConversion: '72%',
      audioUrl: recruit,
    },
    {
      id: 'contact',
      title: 'Contact Center',
      description: 'AI-powered customer service that handles inquiries, complaints, and support tickets with human-like responses.',
      icon: Users,
      leadConversion: '75%',
      audioUrl: recruit,
    },
    {
      id: 'recruitment',
      title: 'Recruitment Agent',
      description: 'Automated candidate screening and interview scheduling that reduces hiring time by 60%.',
      icon: UserCheck,
      leadConversion: '73%',
      audioUrl: recruit,
    },
    {
      id: 'telemarketing',
      title: 'Telemarketing',
      description: 'AI agents that conduct outbound calls with natural conversations to generate qualified leads.',
      icon: Phone,
      leadConversion: '68%',
      audioUrl: recruit,
    },
    {
      id: 'email',
      title: 'Email Outreach',
      description: 'Personalized email campaigns with AI that adapts responses based on recipient engagement.',
      icon: Mail,
      leadConversion: '65%',
      audioUrl: recruit,
    },
    {
      id: 'chat',
      title: 'Chat Support',
      description: '24/7 multilingual chat support that seamlessly hands off to human agents when needed.',
      icon: MessageSquare,
      leadConversion: '80%',
      audioUrl: recruit,
    },
    {
      id: 'callback',
      title: 'Callback Service',
      description: 'AI that schedules callbacks at optimal times to maximize contact rates and customer satisfaction.',
      icon: Headphones,
      leadConversion: '78%',
      audioUrl: recruit,
    }
  ];

  // Calculate visible cards (3 at a time)
  const visibleCards = () => {
    const start = currentSlide * 3;
    return cardsData.slice(start, start + 3);
  };

  // Auto-rotate slides with pause on hover
  useEffect(() => {
    let interval;
    if (autoRotate && !isHovering) {
      interval = setInterval(() => {
        goToNext();
      }, 1000000000);
    }
    return () => clearInterval(interval);
  }, [autoRotate, currentSlide, isHovering]);

  // Initialize audio elements
  useEffect(() => {
    cardsData.forEach(card => {
      if (!audioRefs.current[card.id]) {
        const audio = new Audio(card.audioUrl);
        audio.preload = 'metadata';
        audioRefs.current[card.id] = audio;
        
        audio.addEventListener('ended', () => {
          setPlayingStates(prev => ({ ...prev, [card.id]: false }));
        });
      }
    });

    // Cleanup
    return () => {
      Object.keys(audioRefs.current).forEach(cardId => {
        const audio = audioRefs.current[cardId];
        if (audio) {
          audio.pause();
          audio.removeEventListener('ended', () => {});
        }
      });
    };
  }, []);

  const togglePlay = async (cardId) => {
    try {
      const audio = audioRefs.current[cardId];
      
      if (!audio) {
        console.error(`Audio element not found for ${cardId}`);
        return;
      }

      const isCurrentlyPlaying = playingStates[cardId];

      // Pause all other audio elements
      Object.keys(audioRefs.current).forEach(id => {
        if (id !== cardId && audioRefs.current[id]) {
          audioRefs.current[id].pause();
          setPlayingStates(prev => ({ ...prev, [id]: false }));
        }
      });

      if (isCurrentlyPlaying) {
        audio.pause();
        setPlayingStates(prev => ({ ...prev, [cardId]: false }));
      } else {
        // Reset audio to start if it's ended
        if (audio.ended) {
          audio.currentTime = 0;
        }
        
        try {
          await audio.play();
          setPlayingStates(prev => ({ ...prev, [cardId]: true }));
        } catch (playError) {
          console.error('Playback failed:', playError);
          setPlayingStates(prev => ({ ...prev, [cardId]: false }));
        }
      }
    } catch (error) {
      console.error('Audio playback error:', error);
      setPlayingStates(prev => ({ ...prev, [cardId]: false }));
    }
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide(prev => (prev + 1) % Math.ceil(cardsData.length / 3));
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide(prev => (prev - 1 + Math.ceil(cardsData.length / 3)) % Math.ceil(cardsData.length / 3));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const AppointmentCard = ({ card }) => {
    const IconComponent = card.icon;
    const isPlaying = playingStates[card.id];

    return (
      <div 
        key={card.id}
        className="w-full max-w-sm h-full min-h-[500px] bg-black rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-blue-400 transition-all duration-500 flex flex-col"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id='usecases'
      >
        {/* Card Header with Image */}
        <div className="relative h-66 bg-slate-800 overflow-hidden">
          {/* Card Image */}
          <div className="absolute inset-0 bg-black flex items-center justify-center px-2 transition-transform duration-700 ease-out group-hover:scale-105">
            <CardImage />
          </div>
          
          {/* Play Button */}
          <button
            onClick={() => togglePlay(card.id)}
            className="absolute bottom-4 right-4 w-12 h-12 bg-gray-600/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300 hover:bg-gray-500/90 hover:shadow-blue-500/20 hover:shadow-xl"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
            
            {/* Animated ring when playing */}
            {isPlaying && (
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
            )}
          </button>
          
          {/* Audio Visualizer */}
          {isPlaying && (
            <div className="absolute bottom-4 left-36 text-white flex space-x-1 h-8 items-end">
              <img src={animatiomWave} alt="" className='z-50 w-20'/>
            </div>
          )}

          {/* Icon Badge */}
          <div className="absolute top-[43%] left-[41%] w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
            <IconComponent className="w-32 h-32 text-white opacity-90" />
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-6 flex-grow flex flex-col justify-end">
          <h3 className="text-2xl font-thin text-white mb-2">
            {card.title}
          </h3>
          
          <p className="text-gray-400 text-md font-thin leading-relaxed mb-4 flex-grow">
            {card.description}
          </p>
          
          {/* Lead Conversion Badge */}
          <div className="inline-flex items-start justify-self-stretch ml-[45%] px-2 py-1 bg-black w-fit border border-emerald-400/30 rounded-full shadow-sm shadow-emerald-400/10 hover:shadow-emerald-400/20 hover:border-emerald-400/50 transition-all duration-500">
            <span className="text-emerald-400 text-xs font-semiboold">
              + {card.leadConversion} lead conversion
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#000A16] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Floating particles background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0 
              ? 'bg-blue-400/40' 
              : i % 3 === 1 
                ? 'bg-emerald-400/40' 
                : 'bg-purple-400/40'
          }`}
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            filter: 'blur(1px)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float 20s infinite ease-in-out ${i * 0.5}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-flex items-center">
            <div className="absolute right-full mr-4">
              <img 
                src={leftvector} 
                alt="" 
                className="h-1 w-auto"
                style={{ minWidth: '150px' }}
              />
            </div>
            <span className="text-white text-xs font-thin tracking-widest uppercase">
              U  S E   C A S E S
            </span>
            <div className="absolute left-full ml-4">
              <img 
                src={rightvector} 
                alt="" 
                className="h-1 w-auto"
                style={{ minWidth: '150px' }}
              />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-thin py-3 text-white mt-7">
            Discover 
            <span className="ml-2 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-2xl max-w-3xl mx-auto">
            Transform your business processes with our automated systems
          </p>
        </div>
        
        {/* Cards Carousel */}
        <div className="w-full mb-12 relative">
          {/* Navigation Arrows */}
        
          
          {/* Cards Grid */}
          <div 
            ref={sliderRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
            onMouseEnter={() => setAutoRotate(false)}
            onMouseLeave={() => setAutoRotate(true)}
          >
            {visibleCards().map((card) => (
              <AppointmentCard key={card.id} card={card} />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(Math.ceil(cardsData.length / 3))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 ease-out ${
                index === currentSlide
                  ? 'bg-emerald-400 w-8 shadow-md shadow-emerald-400/30'
                  : 'bg-slate-600/60 w-3 hover:bg-slate-500/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-96 h-96 lg:w-[700px] lg:h-[700px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 40%, rgba(147, 51, 234, 0.2) 70%, transparent 90%)',
            animationDuration: '4s'
          }}
        ></div>
      </div>

      {/* Floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default IntegratedCardGrid;