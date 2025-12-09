import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import SlideRenderer from './components/SlideRenderer';
import Controls from './components/Controls';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nextSlide = useCallback(() => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mouse tracking for parallax and custom cursor
  useEffect(() => {
    // Hide default cursor only when React mounts successfully
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
      const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;
      
      if (cursorDot && cursorOutline) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        
        // Add a slight delay to the outline for fluid feel
        cursorOutline.animate({
            left: `${e.clientX}px`,
            top: `${e.clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto'; // Restore cursor on unmount
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      
      {/* Custom Cursor Elements */}
      <div className="cursor-dot hidden md:block"></div>
      <div className="cursor-outline hidden md:block"></div>

      {/* Main Slide Container */}
      <main className="relative w-full h-full">
        {SLIDES.map((slide, index) => (
          <SlideRenderer 
            key={slide.id} 
            data={slide} 
            isActive={index === currentSlide} 
            mousePos={mousePos}
          />
        ))}
      </main>

      {/* Navigation Controls */}
      <Controls 
        currentSlide={currentSlide} 
        totalSlides={SLIDES.length} 
        onNext={nextSlide} 
        onPrev={prevSlide}
      />

    </div>
  );
}

export default App;