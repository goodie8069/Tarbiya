import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Bottom Progress Line */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-white/5 z-50">
        <div 
            className="h-full bg-gold transition-all duration-700 ease-out shadow-[0_0_10px_#c5a059]"
            style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-8 z-50 mix-blend-difference text-white font-display text-xl tracking-widest">
        {currentSlide + 1} <span className="opacity-50 text-sm mx-2">/</span> {totalSlides}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button 
            onClick={onPrev}
            disabled={currentSlide === 0}
            className={`p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-white cursor-pointer ${currentSlide === 0 ? 'cursor-not-allowed' : ''}`}
        >
            <ArrowLeft className="w-5 h-5" />
        </button>
        <button 
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-white cursor-pointer ${currentSlide === totalSlides - 1 ? 'cursor-not-allowed' : ''}`}
        >
            <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default Controls;