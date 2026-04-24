import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { LayoutGrid, Cpu, Users, Smartphone, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Unificamos el estilo: fondos blancos, textos oscuros y colores sutiles en los íconos
const features = [
  { 
    title: "IA de Asignación", 
    icon: <Cpu className="w-6 h-6" />, 
    desc: "Optimización dinámica que aprende de los flujos de tu empresa para maximizar la ocupación.", 
    size: "md:col-span-2 md:row-span-2", // Tarjeta grande
    iconBg: "bg-blue-50 text-blue-600",
    badge: "Core"
  },
  { 
    title: "Dashboard Analítico", 
    icon: <LayoutGrid className="w-6 h-6" />, 
    desc: "Métricas en tiempo real, reportes de uso y gestión de usuarios en un solo lugar.", 
    size: "md:col-span-2 md:row-span-1", // Tarjeta ancha
    iconBg: "bg-indigo-50 text-indigo-600",
    badge: "Admin"
  },
  { 
    title: "Acceso QR", 
    icon: <Smartphone className="w-6 h-6" />, 
    desc: "Entrada ágil y sin contacto desde el celular.", 
    size: "md:col-span-1 md:row-span-1", // Tarjeta chica
    iconBg: "bg-emerald-50 text-emerald-600",
    badge: null
  },
  { 
    title: "Seguridad", 
    icon: <ShieldCheck className="w-6 h-6" />, 
    desc: "Control estricto de patentes y permisos.", 
    size: "md:col-span-1 md:row-span-1", // Tarjeta chica
    iconBg: "bg-slate-100 text-slate-700",
    badge: null
  }
];

export default function BentoGrid() {
  const main = useRef();

  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: main.current,
        start: "top 75%",
      },
      y: 50,
      scale: 0.95,
      autoAlpha: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out" // Volvemos a un ease más corporativo y menos "saltarín"
    });
  }, { scope: main });

  return (
    <section ref={main} className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera de Sección */}
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 block">
            Ecosistema Integral
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Todo el control en un solo lugar.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Una plataforma diseñada para eliminar el caos y modernizar la gestión de tus espacios.
          </p>
        </div>

        {/* Grilla Bento: Estética Clean y Uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]">
          {features.map((f, i) => (
            <div 
              key={i} 
              // Aplicamos bg-white y border-slate-100 a TODAS las tarjetas para consistencia
              className={`
                bento-card group relative ${f.size} bg-white
                p-8 rounded-3xl border border-slate-200 flex flex-col justify-between 
                shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              `}
            >
              {/* Contenido Superior */}
              <div className="flex justify-between items-start">
                <div className={`w-12 h-12 ${f.iconBg} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  {f.icon}
                </div>
                {f.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-50 text-slate-500 border border-slate-100">
                    {f.badge}
                  </span>
                )}
              </div>

              {/* Contenido Inferior */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}