import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".cta-box", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <footer ref={container} className="bg-slate-900 pt-24 pb-8">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Caja de CTA Flotante */}
        <div className="cta-box bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden mb-20">
          {/* Círculos decorativos de fondo */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl font-bold mb-6 relative z-10">
            ¿Listo para modernizar tu estacionamiento?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Dejá de perder tiempo gestionando planillas. Implementá SmartLot hoy mismo y mejorá la experiencia de tu equipo.
          </p>
          <button className="relative z-10 px-8 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Contactar a Ventas
          </button>
        </div>

        {/* Footer Base */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-xl font-bold text-white tracking-tight">SmartLot</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 SmartLot. El estacionamiento del futuro.
          </p>
        </div>

      </div>
    </footer>
  );
}