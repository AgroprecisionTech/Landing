import { Nav } from './components/landing/Nav'
import { Hero } from './components/landing/Hero'
import { StatsBar } from './components/landing/StatsBar'
import { Comparativa } from './components/landing/Comparativa'
import { Services } from './components/landing/Services'
import { Advantages } from './components/landing/Advantages'
import { Technology } from './components/landing/Technology'
import { About } from './components/landing/About'
import { Team } from './components/landing/Team'
import { Contact } from './components/landing/Contact'
import { Footer } from './components/landing/Footer'
import { Faq } from './components/landing/Faq'
import { WhatsAppButton } from './components/ui/WhatsAppButton'
import { ImageBand } from './components/landing/ImageBand'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsBar />
      <ImageBand/>
      <About />
      <Comparativa />
      <Services />
      <Advantages />
      <Team />
      <Technology />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}