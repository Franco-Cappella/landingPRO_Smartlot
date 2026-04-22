import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    // 1. Animación de entrada "Staggered" para las 3 palabras
    // Animamos desde y: 100 y rotación para el efecto "startup"
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8 })
      .from(".word", { 
        y: 100, 
        rotateX: -45, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2 
      }, "-=0.4")
      .from(".hero-p", { opacity: 0, x: -20, duration: 1 }, "-=0.6")
      .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.8")
      .from(".hero-logo-container", { x: 100, opacity: 0, duration: 1.2 }, "-=1");

    // 2. Animación de FLOTACIÓN (Tu configuración: 14px, 0.3Hz)
    gsap.to(".floating-logo", {
      y: "-=14",
      duration: 1.66,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative pt-32 pb-20 overflow-hidden bg-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: TEXTO */}
          <div className="text-left">
            <span className="hero-badge inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              SmartLot Cloud v2.0
            </span>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-none mb-8">
              {/* Envolvemos cada palabra para la animación individual */}
              <div className="overflow-hidden py-1">
                <span className="word inline-block">Gestioná.</span>
              </div>
              <div className="overflow-hidden py-1">
                <span className="word inline-block">Optimizá.</span>
              </div>
              <div className="overflow-hidden py-1">
                <span className="word inline-block text-blue-600">Escalá.</span>
              </div>
            </h1>
            
            <p className="hero-p text-xl text-slate-600 max-w-lg mb-10 leading-relaxed">
              La plataforma SaaS que redefine el control de accesos y estacionamientos corporativos con IA.
            </p>
            
            <button className="hero-btn px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-2xl hover:shadow-blue-200 active:scale-95">
              Solicitar Demo Gratis
            </button>
          </div>

          {/* COLUMNA DERECHA: LOGO FLOTANTE */}
          <div className="hero-logo-container relative flex justify-center lg:justify-end">
            {/* Decoración de fondo (opcional para dar profundidad) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <img 
              src="/logoEntero.png" 
              alt="SmartLot Dashboard" 
              className="floating-logo w-full max-w-[500px] h-auto drop-shadow-[0_35px_35px_rgba(37,99,235,0.15)]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}