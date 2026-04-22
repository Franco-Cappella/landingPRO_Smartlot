import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Demo from './components/Demo';
import Contact from './components/Contact';
import StatsTicker from './components/StatsTicker';
export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <StatsTicker /> 
        <BentoGrid />
        <Demo />
      </main>
      <Contact />
    </div>
  );
}