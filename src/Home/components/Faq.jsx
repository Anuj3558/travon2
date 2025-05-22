import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { rightvector } from '../../assets';

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is Traxon?",
      answer: "Traxon offers decentralized report tools used by organizations with your workflow systems to automate your data to work for targeted marketing, payments, online optimization, and turn quality authorization allowing you to focus on higher-value activities."
    },
    {
      id: 2,
      question: "How does Traxon AI work?",
      answer: "Traxon AI leverages advanced machine learning algorithms to analyze your data patterns, automate workflows, and provide intelligent insights. It integrates seamlessly with your existing systems to enhance productivity and decision-making processes."
    },
    {
      id: 3,
      question: "Can I integrate Traxon with my current tools?",
      answer: "Yes, Traxon is designed to integrate with a wide range of popular business tools and platforms. Our API and pre-built connectors make it easy to connect with your existing workflow systems, CRM, marketing platforms, and data sources."
    },
    {
      id: 4,
      question: "Is Traxon suitable for small businesses?",
      answer: "Absolutely! Traxon is scalable and offers flexible pricing plans suitable for businesses of all sizes. Small businesses can benefit from our automation tools, reporting features, and workflow optimization without the complexity of enterprise-level solutions."
    }
  ];

  const toggleQuestion = (questionId) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen p-8 relative overflow-hidden pt-72 bg-[#000A16]">
      {/* Blue gradient glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 -bottom-0 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen opacity-20 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left Column - Header */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div 
              className="text-white flex text-sm font-medium tracking-wider uppercase"
            >
              FAQ
              <div className="relative justify-center align-middle ml-4 mt-2">
                <img src={rightvector} alt="" />
              </div>
            </motion.div>
            <div>
              <motion.h1 
                className="text-4xl lg:text-5xl text-white font-thin mb-4"
               
              >
                Frequently Asked{' '}
                <span className="text-blue-400">Questions</span>
              </motion.h1>
              <motion.p 
                className="text-gray-400 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Everything You Need to Know About Working With Us
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
          >
            {faqData.map((faq) => (
              <motion.div
                key={faq.id}
                className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-500 bg-gray-900/50 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-900/70 hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ backgroundColor: "rgba(17, 24, 39, 0.8)" }}
                >
                  <span className="text-white font-medium text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openQuestion === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="bg-gray-900/50"
                    >
                      <div className="px-6 py-4 border-t border-gray-800">
                        <motion.p 
                          className="text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}