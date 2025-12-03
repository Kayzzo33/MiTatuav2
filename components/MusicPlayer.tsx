import React, { useState, useRef, useEffect } from 'react';
import { Music, Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { PLAYLIST, COLORS } from '../constants';
import gsap from 'gsap';

const MusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const visualizerRef = useRef<HTMLDivElement>(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && visualizerRef.current) {
      const bars = visualizerRef.current.children;
      gsap.to(bars, {
        height: () => Math.random() * 24 + 4,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 0.2,
          from: "center"
        }
      });
    } else if (visualizerRef.current) {
      gsap.to(visualizerRef.current.children, {
        height: 4,
        duration: 0.3
      });
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-24 right-8 z-40 flex flex-col items-end">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all hover-target"
        data-cursor-text="MUSIC"
      >
        <div className={`transition-transform duration-[2000ms] ${isPlaying ? 'animate-spin' : ''}`}>
           <Music size={20} color={isPlaying ? COLORS.accent : 'white'} />
        </div>
      </button>

      <div className={`mt-4 bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 w-72 transition-all duration-500 overflow-hidden ${isOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'}`}>
        <div className="flex items-center space-x-4 mb-4">
           <div className="w-12 h-12 bg-zinc-800 rounded overflow-hidden relative group">
              <div className={`absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-700 ${isPlaying ? 'animate-pulse' : ''}`} />
              <img src={`https://picsum.photos/seed/${currentTrackIndex}/100/100`} alt="Album Art" className="w-full h-full object-cover opacity-60" />
           </div>
           <div className="flex-1 min-w-0">
             <h4 className="text-sm font-bold truncate text-white">{currentTrack.title}</h4>
             <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
           </div>
           <div ref={visualizerRef} className="flex space-x-[2px] items-end h-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 bg-orange-500 rounded-t-sm h-1" />
              ))}
           </div>
        </div>

        <div className="flex items-center justify-between mb-2">
            <button onClick={prevTrack} className="text-gray-400 hover:text-white hover-target"><SkipBack size={18}/></button>
            <button 
              onClick={togglePlay} 
              className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform hover-target"
            >
              {isPlaying ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" ml-1 />}
            </button>
            <button onClick={nextTrack} className="text-gray-400 hover:text-white hover-target"><SkipForward size={18}/></button>
        </div>
        
        <div className="w-full bg-zinc-800 h-1 rounded-full mt-2 overflow-hidden">
            <div className={`h-full bg-[${COLORS.accent}] w-1/3`} style={{ backgroundColor: COLORS.accent }}></div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Up Next</p>
          {PLAYLIST.map((track, idx) => (
             idx !== currentTrackIndex && idx < currentTrackIndex + 2 && (
               <div key={idx} className="flex justify-between items-center text-xs text-gray-400 py-1 hover:text-white cursor-pointer hover-target" onClick={() => { setCurrentTrackIndex(idx); setIsPlaying(true); }}>
                 <span>{track.title}</span>
                 <span>{track.duration}</span>
               </div>
             )
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;