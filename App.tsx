import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Mail, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';
import ThreeLogo from './components/ThreeLogo';
import AIConsultant from './components/AIConsultant';
import { COLORS, PORTFOLIO_ITEMS, TESTIMONIALS } from './constants';

gsap.registerPlugin(ScrollTrigger);

// --- Sub-components (kept in file for single-block requirement structure where efficient) ---

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">
            <div className="text-2xl font-display font-bold tracking-tighter hover-target cursor-pointer">
                MI<span className="text-transparent font-script text-4xl ml-1" style={{ WebkitTextStroke: '1px white' }}>Tatua</span>
            </div>
            <div className="hidden md:flex space-x-8 text-xs uppercase tracking-widest font-bold">
                <a href="#about" className="hover:text-gray-300 transition-colors hover-target" data-cursor-text="READ">About</a>
                <a href="#works" className="hover:text-gray-300 transition-colors hover-target" data-cursor-text="VIEW">Works</a>
                <a href="#lab" className="hover:text-gray-300 transition-colors hover-target" data-cursor-text="AI">Labs</a>
                <a href="#contact" className="hover:text-gray-300 transition-colors hover-target" data-cursor-text="SAY HI">Contact</a>
            </div>
            <button className="md:hidden hover-target">
                <Menu />
            </button>
        </nav>
    );
};

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                gsap.to(spotlightRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.2,
                    ease: "power2.out"
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <header className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center items-center">
            {/* Background Grid - Visible only through spotlight */}
            <div 
                className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-2 opacity-30 pointer-events-none"
                style={{
                     maskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 10%, transparent 100%)',
                     WebkitMaskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 10%, transparent 100%)'
                }}
                ref={(el) => {
                    if (el) {
                        window.addEventListener('mousemove', (e) => {
                            el.style.setProperty('--mouse-x', `${e.clientX}px`);
                            el.style.setProperty('--mouse-y', `${e.clientY}px`);
                        });
                    }
                }}
            >
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="bg-zinc-800 grayscale">
                        <img 
                            src={`https://picsum.photos/seed/tattoo${i+10}/800/800`} 
                            className="w-full h-full object-cover opacity-50"
                            alt="Background decoration" 
                        />
                    </div>
                ))}
            </div>

            <div className="z-10 text-center mix-blend-difference pointer-events-none">
                <h2 className="text-xl md:text-3xl font-script text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">Salvador, BA</h2>
                <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter animate-in zoom-in duration-1000 delay-100">
                    MIKAELIAN
                </h1>
                <div className="mt-6 flex justify-center space-x-4 text-xs md:text-sm font-bold tracking-[0.2em] text-gray-300 uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <span>Fineline</span> • <span>Blackwork</span> • <span>Geek</span>
                </div>
            </div>
            
            {/* Marquee */}
            <div className="absolute bottom-0 w-full py-4 bg-white/5 backdrop-blur-sm border-t border-white/10 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                         <span key={i} className="mx-8 text-4xl font-display text-transparent font-bold" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                             ART • SOUL • INK • PERMANENCE • 
                         </span>
                    ))}
                </div>
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </header>
    );
};

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center py-20 bg-zinc-950 relative">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative group hover-target" data-cursor-text="MI TATUA">
                    <div className="absolute inset-0 bg-orange-500/20 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                         <img src="https://picsum.photos/seed/portrait/800/1200" alt="Mikaelian" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                </div>
                <div className="space-y-8">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
                        TRANSFORMING <br/> <span className="text-orange-500 italic font-serif">stories</span> INTO <br/> ART.
                    </h2>
                    <div className="h-1 w-24 bg-white/20"></div>
                    <p className="text-gray-400 text-lg leading-relaxed font-body">
                        Hi, I'm Mikaelian, but you can call me Mi. For years I've been translating narratives into permanent marks on skin here in Salvador. 
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed font-body">
                        Specializing in <strong className="text-white">Fineline</strong> and <strong className="text-white">Geek Blackwork</strong>, my studio is a sanctuary where your ideas gain life through precision and creativity.
                    </p>
                    <div className="pt-8">
                        <button className="text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors uppercase tracking-widest text-sm font-bold hover-target" data-cursor-text="BOOK">
                            Schedule a Session
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Works = () => {
    const cardsRef = useRef<HTMLDivElement>(null);
    
    useLayoutEffect(() => {
        if (!cardsRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".work-card", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                }
            });
        }, cardsRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="works" className="py-24 bg-[#0a0a0a]">
            <div className="container mx-auto px-6 mb-20">
                <div className="flex items-end justify-between">
                    <h2 className="text-5xl md:text-8xl font-display font-bold text-white uppercase opacity-90">Selected <br/> Works</h2>
                    <span className="hidden md:block text-gray-500 font-mono text-sm">(2023 - 2024)</span>
                </div>
            </div>

            <div ref={cardsRef} className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_ITEMS.map((item) => (
                    <div 
                        key={item.id} 
                        className="work-card group relative aspect-[4/5] bg-zinc-900 overflow-hidden cursor-none hover-target"
                        data-cursor-text="VIEW"
                    >
                        <img 
                            src={item.img} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                            <h3 className="text-2xl font-display text-white">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex justify-center mt-20">
                <button className="px-8 py-3 border border-white/20 hover:bg-white hover:text-black transition-all rounded-full uppercase text-xs font-bold tracking-widest hover-target">
                    View All Projects
                </button>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="relative bg-black min-h-[80vh] flex flex-col justify-between pt-20 overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <ThreeLogo />
            </div>
            
            {/* Orange Glow */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-orange-600/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                        READY TO MAKE IT <br/> <span className="text-outline">PERMANENT?</span>
                    </h2>
                    <div className="flex flex-col space-y-4 items-start">
                        <a href="#" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Mail className="mr-4 group-hover:-translate-y-1 transition-transform" /> hello@mitatua.com
                        </a>
                        <a href="#" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Instagram className="mr-4 group-hover:-translate-y-1 transition-transform" /> @mi.tatua
                        </a>
                        <a href="#" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Phone className="mr-4 group-hover:-translate-y-1 transition-transform" /> +55 (71) 99999-9999
                        </a>
                    </div>
                </div>
                
                <div className="flex flex-col justify-end items-end text-right">
                     <p className="text-gray-500 text-sm mb-2">STUDIO LOCATION</p>
                     <p className="text-white text-lg font-display mb-8">Rio Vermelho,<br/>Salvador - BA</p>
                     
                     <div className="flex space-x-2">
                        <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors hover-target cursor-pointer">
                            <ArrowUpRight size={20} />
                        </div>
                     </div>
                </div>
            </div>

            <div className="relative z-10 w-full border-t border-white/10 mt-20 bg-black/50 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-6 flex justify-between items-center text-xs text-gray-600 uppercase tracking-wider">
                    <p>&copy; 2024 Mikaelian Tattoo</p>
                    <p>Designed by AI. Built by Dev.</p>
                </div>
                {/* Big Footer Text */}
                 <div className="w-full overflow-hidden leading-none select-none pointer-events-none opacity-20">
                    <h1 className="text-[12vw] md:text-[15vw] font-display font-bold text-center text-transparent" style={{ WebkitTextStroke: '2px #333' }}>
                        MIKAELIAN
                    </h1>
                </div>
            </div>
        </footer>
    );
};

const App: React.FC = () => {
    // Initialize Smooth Scroll (Lenis)
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-orange-500 selection:text-white">
            <CustomCursor />
            <NavBar />
            <MusicPlayer />
            
            <main>
                <Hero />
                <About />
                <Works />
                <div id="lab">
                    <AIConsultant />
                </div>
                <Footer />
            </main>
        </div>
    );
};

export default App;