import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Direct update for responsiveness
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.closest('.hover-target')) {
        setIsHovering(true);
        const dataText = target.getAttribute('data-cursor-text');
        setHoverText(dataText || "");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center mix-blend-difference"
    >
      <div className={`transition-all duration-300 ${isHovering ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          <span className="text-[10px] font-bold text-black bg-white px-2 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
              {hoverText}
          </span>
      </div>
      <div className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${isHovering ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`} />
      <div className={`absolute w-8 h-8 border border-white rounded-full transition-all duration-300 ${isHovering ? 'scale-150 opacity-100 border-orange-500' : 'scale-0 opacity-0'}`} />
    </div>
  );
};

export default CustomCursor;