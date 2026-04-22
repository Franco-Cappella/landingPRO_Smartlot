import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8 })
      .from(".hero-title", { y: 40, opacity: 0, duration: 1 }, "-=0.4")
      .from(".hero-p", { opacity: 0, duration: 1 }, "-=0.6")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="hero-badge inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
          Software SaaS para empresas
        </span>
        <h1 className="hero-title text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
          Gestioná tu estacionamiento <br />
          <span className="text-blue-600">de forma inteligente.</span>
        </h1>
        <p className="hero-p text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          SmartLot optimiza espacios, elimina fricciones y moderniza la experiencia de tus empleados.
        </p>
        <button className="hero-btn px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-200">
          Solicitar Demo
        </button>
      </div>
    </section>
  );
}