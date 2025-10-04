import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Approach from './components/Approach'
import Services from './components/Services'
import Insights from './components/Insights'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Approach />
      <Services />
      <Insights />
      <Footer />
    </div>
  );
}
