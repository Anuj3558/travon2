
import CalendarSection from './components/Calender'
import FAQSection from './components/Faq'
import FeaturesSection from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Header'
import HeroSection from './components/Hero'
import IntegrationSection from './components/Integration'
import TrustedBySection from './components/Marq'
import TestimonialsMarquee from './components/Testimonails'
import AICallingAgent from './components/UseCase'

function Home() {

  return (
    <>
    <Navbar />
   <HeroSection/>
    <TrustedBySection />
    <AICallingAgent/>
    <FeaturesSection />
    <IntegrationSection />
    <TestimonialsMarquee />
    <CalendarSection />
    <FAQSection/>
    <Footer />
   </>
  )
}

export default Home
