import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      yPercent: -100,
      autoAlpha: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  });

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo Brand Actualizado */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* Aumentamos h-10 a h-12 en móviles, y h-14 en escritorio */}
          <img
            src="/logo.png"
            alt="SmartLot Logo"
            className="h-12 md:h-14 w-auto drop-shadow-sm"
          />
          <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">SmartLot</span>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-slate-600">
          <a href="#solucion" className="hover:text-blue-600 transition-colors duration-300">Solución</a>
          <a href="#demo" className="hover:text-blue-600 transition-colors duration-300">Prototipo</a>
          <button className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold shadow-md">
            Solicitar Demo
          </button>
        </nav>

      </div>
    </header>
  );
}