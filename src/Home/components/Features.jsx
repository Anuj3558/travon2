import React from 'react';
import { Knowldege, Low, Ultra, Bring, External, multi, Custom, leftvector, rightvector, FeatureImage } from "../../assets/index.js";
import { GlowButton } from './glow-button.jsx';

const FeaturesSection = () => {
  const featuresData = [
    {
      id: 1,
      title: "Knowledge-Base Grounding",
      description: "Embed your own content, FAQs, documents or product data to ensure every response is accurate, corrective, and brand-aligned.",
      icon: "🔍",
      gradient: "from-blue-500 to-blue-700",
      imageAlt: Knowldege
    },
    {
      id: 2,
      title: "Low Latency Conversations",
      description: "Offer real-time audio streaming and seamless logic — ensuring natural dialog in both text and voice interactions.",
      icon: "⚡",
      gradient: "from-green-500 to-emerald-600",
      imageAlt: Low
    },
    {
      id: 3,
      title: "Custom Voice Agents",
      description: "Tailor your agent's name, tone, personality, and behavior to match your brand and use case. Make every conversation feels human.",
      icon: "🎭",
      gradient: "from-purple-500 to-pink-500",
      imageAlt: Custom
    },
    {
      id: 4,
      title: "Ultra Low Cost",
      description: "Cost effective for users at just a few cents — priced to scale across thousands of calls, without sacrificing quality.",
      icon: "💰",
      gradient: "from-yellow-500 to-amber-600",
      imageAlt: Ultra
    },
    {
      id: 5,
      title: "Bring Your Own LLM",
      description: "Plug in your preferred LLM provider — OpenAI, Claude, or others — your table, your choice.",
      icon: "🔧",
      gradient: "from-green-400 to-green-600",
      imageAlt: Bring
    },
    {
      id: 6,
      title: "External Function Calling",
      description: "Integrate external APIs and services — from booking appointments to querying databases — fully hands-free.",
      icon: "🔗",
      gradient: "from-blue-400 to-cyan-500",
      imageAlt: External
    },
    {
      id: 7,
      title: "Multilingual +250+ Accents",
      description: "Support over 30 languages and choose from 250+ voices to localize your customer experience across geographies.",
      icon: "🌍",
      gradient: "from-orange-500 to-red-500",
      imageAlt: multi
    }
  ];

  return (
    <div className="bg-[#000A16] min-h-screen px-4 py-16 relative overflow-hidden" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-gradient-to-br from-blue-900/30 via-blue-700/20 to-blue-900/30 w-full max-w-4xl h-4/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left side image - centered */}
            <div className="flex justify-center">
             
            </div>
            
            {/* Center content */}
            <div className="text-center  ">
               <div className="relative inline-block ">
            <span className="text-white text-xs font-semibold tracking-widest  uppercase">
              F E A T U R E S
            </span>
            <div className="absolute left-full bottom-[-1px] transform -translate-y-1/2 ml-4 w-200 h-2 "><img src={rightvector} alt="" width={200}  height={200}/></div>
            <div className="absolute right-full bottom-[-1px] transform -translate-y-1/2 mr-4 w-50 h-2 "><img src={leftvector} alt="" /></div>
          </div>
              <h2 className="text-3xl max-w-5xl flex-row md:text-5xl font-thin mt-7 text-white mb-3">
                AI-Driven <span className="text-blue-400">Features   </span>
                 <p className="text-gray-400 text-xl  md:text-xl mt-7  flex   ">
                Unlock the Full Potential of Your Data with Advanced AI Solutions
              </p>
              </h2>
             
            </div>
            
            {/* Right side image - centered */}
            <div className="flex justify-center">
            
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 mb-12">
          {/* First Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData.slice(0, 2).map((feature) => (
              <div
                key={feature.id}
                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 h-[28rem]"
                style={{
                  boxShadow: `0 0 15px rgba(59, 130, 246, 0.1)`
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex-1 mb-4 relative overflow-hidden rounded-lg h-48">
                    <img 
                      src={feature.imageAlt} 
                      alt={feature.imageAlt}
                      className="w-full h-full object-cover bg-black border border-gray-800"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.slice(2, 5).map((feature) => (
              <div
                key={feature.id}
                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 h-[28rem]"
                style={{
                  boxShadow: `0 0 15px rgba(59, 130, 246, 0.1)`
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex-1 mb-4 relative overflow-hidden rounded-lg h-48">
                    <img 
                      src={feature.imageAlt}
                      alt={feature.imageAlt}
                      className="w-full h-full object-cover bg-black border border-gray-800"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuresData.slice(5, 7).map((feature) => (
              <div
                key={feature.id}
                className="bg-black border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 h-[28rem]"
                style={{
                  boxShadow: `0 0 15px rgba(59, 130, 246, 0.1)`
                }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex-1 mb-4 relative overflow-hidden rounded-lg h-48">
                    <img 
                      src={feature.imageAlt}
                      alt={feature.imageAlt}
                      className="w-full h-full object-cover bg-black border border-gray-800"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`}></div>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <GlowButton>
            <a href="#contact">Schedule Demo</a>
          </GlowButton>
        </div>
      </div>
      <img src={FeatureImage} alt="" className='py-6 mt-8 mx-auto justify-center'/>
    </div>
  );
};

export default FeaturesSection;