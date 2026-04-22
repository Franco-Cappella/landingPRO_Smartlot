import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef();

  useGSAP(() => {
    // La navbar entra bajando desde fuera de la pantalla
    gsap.from(navRef.current, {
      y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  });

  return (
    <header 
      ref={navRef} 
      className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Si tienes tu isotipo en public/img/ puedes llamarlo así: */}
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <span className="text-2xl font-extrabold text-slate-900 tracking-tight">SmartLot</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <a href="#solucion" className="hover:text-blue-600 transition-colors">Solución</a>
          <a href="#demo" className="hover:text-blue-600 transition-colors">Prototipo</a>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold shadow-md">
            Solicitar Demo
          </button>
        </nav>

      </div>
    </header>
  );
}