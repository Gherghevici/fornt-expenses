import Link from 'next/link'
import Login from './components/login/Login'
import Dashboard from './dashboard/page'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBarLandingPage from './components/login/NavBarLandingPage'
import HearoSection from './components/login/HeroSection'
import ProcesSection from './components/login/ProcesSection'
import AboutSection from './components/login/AboutSection'
import FeatureSection from './components/login/FeaturesSection'
import TestimonialSection from './components/login/TestimonialSection'
config.autoAddCss = false

export default function Home() {
  return (
    <main>
    
      <NavBarLandingPage/>
      <HearoSection/>
      <ProcesSection />
      <AboutSection/>
      <FeatureSection/>
      <TestimonialSection/>
        
      {/* <Login/> */}

      {/* <Dashboard/> */}
    </main>
  )
}
