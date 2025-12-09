import React, { useRef, useEffect } from 'react';
import { SlideData, SlideType } from '../types';
import { Sparkles, Globe, Compass, Cpu, Anchor, ArrowRight } from 'lucide-react';

interface SlideRendererProps {
  data: SlideData;
  isActive: boolean;
  mousePos: { x: number; y: number };
}

const SlideRenderer: React.FC<SlideRendererProps> = ({ data, isActive, mousePos }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax calculations
  // We want subtle movement based on mouse position
  const parallaxX = (mousePos.x / window.innerWidth - 0.5) * 20; // -10 to 10px
  const parallaxY = (mousePos.y / window.innerHeight - 0.5) * 20;
  
  const baseStyle = `absolute inset-0 w-full h-full flex flex-col justify-center items-center overflow-hidden transition-all duration-1000 ease-out ${
    isActive ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
  }`;

  const renderContent = () => {
    switch (data.type) {
      case SlideType.TITLE:
        return (
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-6">
            <div 
              className={`transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transform: `translate(${parallaxX * -2}px, ${parallaxY * -2}px)` }}
            >
               <span className="block text-gold tracking-[0.5em] text-sm md:text-base font-sans font-light mb-6 border-b border-gold/30 pb-2 uppercase">
                {data.highlight}
               </span>
            </div>
            
            <h1 
              className={`text-6xl md:text-9xl font-display font-black text-white text-center leading-none mb-8 tracking-wide cinematic-text transition-all duration-1000 delay-500 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
              style={{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }}
            >
              {data.title}
            </h1>
            
            <p className={`text-xl md:text-3xl text-gray-400 font-serif italic text-center max-w-2xl mb-12 transition-all duration-1000 delay-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {data.subtitle}
            </p>

            <div className={`transition-all duration-1000 delay-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
               <p className="text-sm text-gray-500 tracking-widest uppercase text-center max-w-lg mx-auto leading-relaxed">
                 {data.content[0]}
               </p>
            </div>
          </div>
        );

      case SlideType.AGENDA:
        return (
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="md:w-1/3 pt-12">
                   <h2 className={`text-6xl font-display text-white mb-6 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    {data.title}
                   </h2>
                   <div className={`w-24 h-1 bg-gold transition-all duration-1000 delay-500 ${isActive ? 'w-24 opacity-100' : 'w-0 opacity-0'}`}></div>
                </div>
                
                <div className="md:w-2/3 grid gap-6">
                   {data.content.map((item, idx) => (
                      <div 
                        key={idx}
                        className={`group flex items-center p-6 border-b border-white/10 hover:border-gold/50 hover:bg-white/5 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${400 + (idx * 100)}ms` }}
                      >
                         <span className="text-gold font-display text-2xl mr-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                         </span>
                         <span className="text-xl md:text-2xl font-serif text-gray-300 italic group-hover:text-white transition-colors">
                            {item}
                         </span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        );

      case SlideType.CONTENT_LEFT:
      case SlideType.CONTENT_RIGHT:
        const isRight = data.type === SlideType.CONTENT_RIGHT;
        return (
          <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
             
             {/* Image Section */}
             <div className={`w-full md:w-1/2 h-[50vh] md:h-[70vh] relative transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="absolute inset-0 border border-white/10 transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0"></div>
                <div className="absolute inset-0 overflow-hidden z-10 bg-black/50">
                   <img 
                    src={data.image} 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" 
                    alt={data.title} 
                    style={{ transform: `scale(1.1) translate(${parallaxX * -0.5}px, ${parallaxY * -0.5}px)` }}
                   />
                </div>
             </div>

             {/* Text Section */}
             <div className="w-full md:w-1/2 space-y-8">
                <span className={`block text-gold text-sm tracking-[0.3em] font-sans uppercase transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {data.highlight}
                </span>
                
                <h2 className={`text-5xl md:text-7xl font-display text-white transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {data.title}
                </h2>

                {data.quote && (
                    <blockquote className={`pl-6 border-l-2 border-gold text-xl md:text-2xl font-serif text-gray-300 italic transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                        "{data.quote}"
                    </blockquote>
                )}
                
                <div className="space-y-6">
                    {data.content.map((p, i) => (
                        <p 
                            key={i} 
                            className={`text-lg text-gray-400 font-light leading-relaxed transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                            style={{ transitionDelay: `${600 + (i * 100)}ms` }}
                        >
                            {p}
                        </p>
                    ))}
                </div>
             </div>
          </div>
        );

      case SlideType.CENTERED:
        return (
          <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
             <div 
                className={`mb-8 inline-block p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
             >
                <Compass className="w-8 h-8 text-gold" />
             </div>
             
             <h2 
                className={`text-5xl md:text-7xl font-display text-white mb-4 transition-all duration-1000 delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
             >
                {data.title}
             </h2>
             
             <p className={`text-xl text-gold/80 font-serif italic mb-16 tracking-wide transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                {data.subtitle}
             </p>

             <div className="grid gap-6">
                {data.content.map((p, i) => (
                    <div 
                        key={i} 
                        className={`glass-morphism p-8 rounded-sm hover:bg-white/10 transition-all duration-500 border-l-2 border-transparent hover:border-gold text-left ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${600 + (i * 150)}ms` }}
                    >
                        <p className="text-xl text-gray-300 font-serif">
                            {p}
                        </p>
                    </div>
                ))}
             </div>
          </div>
        );

      case SlideType.LIST:
      case SlideType.COMPARISON:
        return (
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className={`text-5xl md:text-6xl font-display text-white mb-4 transition-all duration-1000 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    {data.title}
                 </h2>
                 <p className={`text-gold text-lg tracking-widest uppercase transition-all duration-1000 delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {data.subtitle}
                 </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.content.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`glass-morphism p-8 min-h-[200px] flex flex-col justify-center relative group overflow-hidden transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                        style={{ transitionDelay: `${300 + (idx * 100)}ms` }}
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            {idx % 2 === 0 ? <Cpu size={40} /> : <Globe size={40} />}
                        </div>
                        <h3 className="text-xl md:text-2xl text-white font-serif mb-2 group-hover:text-gold transition-colors">
                            {item.split(':')[0]}
                        </h3>
                        {item.includes(':') && (
                            <p className="text-gray-500 text-sm font-light mt-2 leading-relaxed">
                                {item.split(':')[1]}
                            </p>
                        )}
                        <div className="absolute bottom-0 left-0 h-0.5 bg-gold w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                ))}
            </div>
          </div>
        );

      case SlideType.FINAL:
        return (
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 text-center">
                 <div className={`mb-8 transition-all duration-1000 delay-300 ${isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}>
                    <Sparkles className="w-24 h-24 text-gold animate-pulse-slow" />
                 </div>
                 
                 <h1 className={`text-6xl md:text-9xl font-display text-white mb-8 cinematic-text transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    {data.title}
                 </h1>
                 
                 <div className={`h-px w-32 bg-gold mb-12 transition-all duration-1000 delay-700 ${isActive ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
                 
                 <p className={`text-2xl md:text-4xl text-gray-300 font-serif italic max-w-3xl leading-relaxed mb-16 transition-all duration-1000 delay-900 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {data.content[0]}
                 </p>
                 
                 <div className={`transition-all duration-1000 delay-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="text-sm text-gray-500 uppercase tracking-[0.4em]">
                        {data.highlight}
                    </span>
                 </div>
            </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={baseStyle} ref={containerRef}>
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         {/* Background Image with blur and overlay */}
         {data.image && (
             <>
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[5s] ease-out"
                    style={{ 
                        backgroundImage: `url(${data.image})`,
                        transform: isActive ? 'scale(1.1)' : 'scale(1.0)',
                    }}
                ></div>
             </>
         )}
         
         {/* Animated Gradients */}
         <div 
            className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-screen pointer-events-none"
            style={{
                background: `radial-gradient(circle at ${50 + parallaxX / 2}% ${50 + parallaxY / 2}%, rgba(59, 130, 246, 0.2), transparent 50%)`
            }}
         ></div>
      </div>

      {renderContent()}
    </div>
  );
};

export default SlideRenderer;