import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { COLORS } from '../constants';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out"
      });
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

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef}
        className={`fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${isHovering ? 'w-20 h-20 bg-white/20 backdrop-blur-sm' : 'w-10 h-10'}`}
      >
         {isHovering && hoverText && (
           <span className="text-[10px] font-bold text-black uppercase tracking-widest animate-pulse">
             {hoverText}
           </span>
         )}
      </div>
    </>
  );
};

export default CustomCursor;