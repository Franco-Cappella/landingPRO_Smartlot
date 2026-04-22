import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { LayoutGrid, Cpu, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Optimización Real-time", icon: <Cpu />, desc: "Algoritmos que asignan lugares según prioridad.", size: "md:col-span-2" },
  { title: "Gestión Multi-rol", icon: <Users />, desc: "Control para admin y empleados.", size: "md:col-span-1" },
  { title: "Dashboard Analítico", icon: <LayoutGrid />, desc: "Métricas claras de uso diario.", size: "md:col-span-3" },
];

export default function BentoGrid() {
  const main = useRef();

  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: main.current,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: main });

  return (
    <section ref={main} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Una solución, múltiples beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className={`bento-card ${f.size} bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group`}>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}