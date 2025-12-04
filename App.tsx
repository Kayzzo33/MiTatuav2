
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Mail, Phone, Menu, ArrowUpRight, ArrowLeft, ShoppingBag, X, Beaker } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import MusicPlayer from './components/MusicPlayer';
import ThreeLogo from './components/ThreeLogo';
import { PORTFOLIO_ITEMS, ARTIST_PHOTO, CUSTOM_PRODUCTS, COLORS } from './constants';

gsap.registerPlugin(ScrollTrigger);

// --- Navbar (Cortiz Style) ---

const NavBar: React.FC<{ onOpenProducts: () => void, onOpenMenu: () => void }> = ({ onOpenProducts, onOpenMenu }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-8 mix-blend-difference text-white pointer-events-none">
            {/* Pointer events auto applied to children so clicks work */}
            
            {/* Left: Logo */}
            <div className="flex-1 flex justify-start pointer-events-auto">
                <div 
                    onClick={scrollToTop}
                    className="text-xl md:text-2xl font-display font-bold tracking-tighter hover-target cursor-pointer group"
                >
                    MI<span className="font-script text-3xl ml-1 group-hover:text-orange-500 transition-colors">Tatua</span>
                </div>
            </div>

            {/* Center: Links (Hidden on Mobile) */}
            <div className="hidden md:flex flex-[2] justify-center space-x-12 text-[10px] uppercase tracking-[0.2em] font-bold pointer-events-auto">
                <a href="#about" className="hover:text-orange-500 transition-colors hover-target relative group cursor-pointer">
                    Sobre
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#works" className="hover:text-orange-500 transition-colors hover-target relative group cursor-pointer">
                    Trabalhos
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
                <button onClick={onOpenProducts} className="hover:text-orange-500 transition-colors hover-target relative group cursor-pointer">
                    Shop
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
                </button>
                <a href="#lab" className="hover:text-orange-500 transition-colors hover-target relative group cursor-pointer">
                    Labs
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
                </a>
            </div>

            {/* Right: Menu (Mobile) */}
            <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
                <button 
                    onClick={onOpenMenu}
                    className="md:hidden hover-target text-white p-2"
                >
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

// --- Mobile Menu Overlay ---

const MobileMenu: React.FC<{ isOpen: boolean, onClose: () => void, onOpenProducts: () => void }> = ({ isOpen, onClose, onOpenProducts }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <div className={`fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
            <button onClick={onClose} className="absolute top-8 right-6 text-white p-2 hover:text-orange-500 transition-colors">
                <X size={32} />
            </button>

            <nav className="flex flex-col items-center space-y-8 text-center">
                <a href="#about" onClick={onClose} className="text-4xl font-display font-bold text-white hover:text-orange-500 transition-colors">Sobre</a>
                <a href="#works" onClick={onClose} className="text-4xl font-display font-bold text-white hover:text-orange-500 transition-colors">Trabalhos</a>
                <button onClick={() => { onClose(); onOpenProducts(); }} className="text-4xl font-display font-bold text-white hover:text-orange-500 transition-colors">Shop</button>
                <a href="#lab" onClick={onClose} className="text-4xl font-display font-bold text-white hover:text-orange-500 transition-colors">Labs</a>
            </nav>

            <div className="mt-12">
                 <div className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white/50">
                    MI<span className="font-script text-3xl ml-1">Tatua</span>
                </div>
            </div>
        </div>
    );
};


// --- Products Teaser Section ---

const CustomProductsTeaser: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
    return (
        <section className="relative py-24 bg-zinc-950 border-t border-white/5 overflow-hidden">
             {/* Background noise/texture simulation */}
            <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
            
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-12 h-[1px] bg-orange-500"></span>
                        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Store & Custom</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-none">
                        TATUANDO O <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>INANIMADO</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
                        A arte não precisa se limitar à pele. Leve a identidade visual da Mi Tatua para objetos do seu cotidiano. Espelhos, vestuário e acessórios personalizados.
                    </p>
                    <button 
                        onClick={onOpen}
                        className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 hover-target flex items-center gap-3 overflow-hidden"
                    >
                        <span className="relative z-10">Explorar Coleção</span>
                        <ArrowUpRight size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
                
                <div className="md:w-1/2 relative h-[400px] w-full group hover-target" onClick={onOpen}>
                     <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                     <div className="absolute inset-0 bg-zinc-900 overflow-hidden rounded-lg border border-white/10">
                        <img 
                            src={CUSTOM_PRODUCTS[0].img} 
                            alt="Custom Product" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                            <span className="px-6 py-2 border border-white text-white text-xs uppercase tracking-widest backdrop-blur-md">Ver Detalhes</span>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    );
};

// --- Product Gallery Overlay (Virtual Page) ---

const ProductGalleryOverlay: React.FC<{ isOpen: boolean, onClose: () => void }> = ({ isOpen, onClose }) => {
    // Prevent scroll on body when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <div 
            className={`fixed inset-0 z-[100] bg-[#0a0a0a] transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[100%] opacity-0 pointer-events-none'}`}
        >
            {/* Header */}
            <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                <button onClick={onClose} className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors hover-target group">
                    <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-orange-500 transition-colors">
                        <ArrowLeft size={18} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Voltar</span>
                </button>
                <div className="text-xl font-display font-bold">STORE</div>
            </div>

            {/* Content */}
            <div className="w-full h-full overflow-y-auto pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                            OBJETOS <span className="text-orange-500">TATUADOS</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Peças exclusivas e personalizadas. Selecione um item e entre em contato diretamente pelo WhatsApp para verificar disponibilidade e personalização.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                        {CUSTOM_PRODUCTS.map((product) => (
                            <div key={product.id} className="group flex flex-col bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-square overflow-hidden relative">
                                    <img 
                                        src={product.img} 
                                        alt={product.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-display font-bold text-white mb-2">{product.title}</h3>
                                    <div className="mt-auto pt-4">
                                        <button 
                                            onClick={() => {
                                                const message = encodeURIComponent(product.message);
                                                window.open(`https://wa.me/5571999999999?text=${message}`, '_blank');
                                            }}
                                            className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-colors rounded hover-target flex items-center justify-center gap-2"
                                        >
                                            <ShoppingBag size={14} />
                                            Saiba Mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Components ---

const Hero = () => {
    const spotlightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (spotlightRef.current) {
                document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <header className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-center items-center">
            {/* Background Image Grid with Reveal */}
            <div 
                ref={spotlightRef}
                className="absolute inset-0 z-0 bg-black"
            >
                 <div 
                    className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-0 opacity-40 pointer-events-none mix-blend-screen"
                    style={{
                        background: '#111',
                        maskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black 0%, transparent 100%)',
                    }}
                >
                    {PORTFOLIO_ITEMS.slice(0, 12).map((item, i) => (
                        <div key={i} className="w-full h-full overflow-hidden relative">
                             <img 
                                src={item.img} 
                                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                                alt="Background Art" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Central Text */}
            <div className="z-10 text-center mix-blend-difference pointer-events-none px-4">
                <h2 className="text-xl md:text-3xl font-script text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">Salvador, BA</h2>
                <h1 className="text-5xl md:text-9xl font-display font-bold text-white tracking-tighter animate-in zoom-in duration-1000 delay-100">
                    MIKAELIAN
                </h1>
                <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs md:text-sm font-bold tracking-[0.2em] text-gray-300 uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                    <span>Fineline</span> • <span>Blackwork</span> • <span>Geek</span>
                </div>
            </div>

            {/* Instagram Link (Bottom Left - above Marquee) */}
            <a 
                href="https://www.instagram.com/mi.tatua/" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-24 left-6 z-30 flex items-center gap-3 group hover-target pointer-events-auto"
            >
                <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all bg-black/50 backdrop-blur-sm">
                    <Instagram size={18} className="text-white group-hover:text-black" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                    @MI.TATUA
                </span>
            </a>
            
            {/* Marquee Banner */}
            <div className="absolute bottom-0 w-full py-4 bg-white/5 backdrop-blur-sm border-t border-white/10 overflow-hidden z-20 pointer-events-none">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                         <span key={i} className="mx-8 text-4xl font-display text-transparent font-bold" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                             ARTE • ALMA • TINTA • PERMANÊNCIA • 
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
        <section id="about" className="flex items-center py-20 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center z-10">
                <div className="relative group hover-target order-2 md:order-1" data-cursor-text="MI TATUA">
                    <div className="absolute inset-0 bg-orange-500/20 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 rounded-lg"></div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700 ease-out border border-white/10">
                         <img src={ARTIST_PHOTO} alt="Mikaelian" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
                    </div>
                </div>
                <div className="space-y-6 md:space-y-8 order-1 md:order-2">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] md:leading-[0.9]">
                        TRANSFORMANDO <br/> <span className="text-orange-500 italic font-serif">histórias</span> EM <br/> ARTE.
                    </h2>
                    <div className="h-1 w-24 bg-white/20"></div>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-body">
                        Olá, sou a Mikaelian, mas pode me chamar de Mi. Há anos transformo narrativas em marcas permanentes na pele aqui em Salvador.
                    </p>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed font-body">
                        Especializada em <strong className="text-white">Fineline</strong> e <strong className="text-white">Blackwork Geek</strong>, meu estúdio é um santuário onde suas ideias ganham vida com precisão e criatividade.
                    </p>
                    <div className="pt-8">
                        <button className="text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors uppercase tracking-widest text-sm font-bold hover-target" data-cursor-text="AGENDAR">
                            Agendar Sessão
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="absolute -bottom-20 -right-20 text-[25vw] font-display font-bold text-white/5 pointer-events-none select-none">
                INK
            </div>
        </section>
    );
};

const Card: React.FC<{ item: typeof PORTFOLIO_ITEMS[0] }> = ({ item }) => (
    <div className="group relative mb-8 overflow-hidden rounded-sm hover-target cursor-none" data-cursor-text="EXPANDIR">
        <div className="aspect-[3/4] overflow-hidden bg-zinc-900">
            <img 
                src={item.img} 
                alt={item.title} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                loading="lazy"
            />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/90 to-transparent">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">{item.category}</span>
            <h3 className="font-display text-2xl text-white">{item.title}</h3>
        </div>
        <div className="absolute inset-0 border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
    </div>
);

const Works = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const col1Ref = useRef<HTMLDivElement>(null);
    const col2Ref = useRef<HTMLDivElement>(null);
    const col3Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!containerRef.current) return;
        if (window.matchMedia("(min-width: 768px)").matches) {
            const ctx = gsap.context(() => {
                gsap.to(col1Ref.current, {
                    y: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
                gsap.to(col2Ref.current, {
                    y: 100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5
                    }
                });
                gsap.to(col3Ref.current, {
                    y: -150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.2
                    }
                });
            }, containerRef);
            return () => ctx.revert();
        }
    }, []);

    const col1 = PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 0);
    const col2 = PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 1);
    const col3 = PORTFOLIO_ITEMS.filter((_, i) => i % 3 === 2);

    return (
        <section id="works" className="py-32 bg-[#0a0a0a] overflow-hidden">
            <div className="container mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8">
                    <div className="md:max-w-[65%]">
                         {/* Reduced font size for tablet/desktop to prevent overflow of "SELECIONADOS" */}
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase opacity-90 leading-[0.9] break-words hyphens-auto w-full">
                            Trabalhos <br className="hidden md:block"/> Selecionados
                        </h2>
                    </div>
                    {/* Increased max-width for description on tablets to prevent clipping */}
                    <div className="md:text-right md:flex-1 md:max-w-[400px]">
                         <p className="text-gray-400">
                            Uma seleção curada de blackwork, fineline e artes geek. Cada design é uma colaboração entre artista e tela.
                         </p>
                         <span className="block mt-4 text-orange-500 font-mono text-sm">(2023 - 2025)</span>
                    </div>
                </div>
            </div>

            <div ref={containerRef} className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div ref={col1Ref} className="flex flex-col">
                        {col1.map(item => <Card key={item.id} item={item} />)}
                    </div>
                    <div ref={col2Ref} className="flex flex-col pt-0 md:pt-24">
                        {col2.map(item => <Card key={item.id} item={item} />)}
                    </div>
                    <div ref={col3Ref} className="flex flex-col pt-0 md:pt-12">
                        {col3.map(item => <Card key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Labs / Future Section Placeholder ---
const Labs = () => {
    return (
        <section id="lab" className="py-24 bg-zinc-950 flex items-center justify-center border-t border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none" />
             <div className="text-center z-10">
                <Beaker className="w-12 h-12 mx-auto text-orange-500 mb-4 opacity-50" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">LABORATÓRIO CRIATIVO</h3>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Em breve</p>
             </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer id="contact" className="relative bg-black min-h-[80vh] flex flex-col justify-between pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
                <ThreeLogo />
            </div>
            
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-orange-600/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                        PRONTO PARA TORNAR <br/> <span className="text-outline">PERMANENTE?</span>
                    </h2>
                    <div className="flex flex-col space-y-4 items-start">
                        <a href="#" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Mail className="mr-4 group-hover:-translate-y-1 transition-transform" /> hello@mitatua.com
                        </a>
                        <a href="https://www.instagram.com/mi.tatua/" target="_blank" rel="noreferrer" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Instagram className="mr-4 group-hover:-translate-y-1 transition-transform" /> @mi.tatua
                        </a>
                        <a href="#" className="flex items-center text-xl text-gray-300 hover:text-orange-500 transition-colors hover-target group">
                            <Phone className="mr-4 group-hover:-translate-y-1 transition-transform" /> +55 (71) 99999-9999
                        </a>
                    </div>
                </div>
                
                <div className="flex flex-col justify-end items-end text-right">
                     <p className="text-gray-500 text-sm mb-2">LOCALIZAÇÃO</p>
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
                    <p>Desenvolvido por Onzy Company</p>
                </div>
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
    const [showProducts, setShowProducts] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen w-full text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
            <CustomCursor />
            <NavBar 
                onOpenProducts={() => setShowProducts(true)} 
                onOpenMenu={() => setMobileMenuOpen(true)}
            />
            <MusicPlayer />
            
            <main>
                <Hero />
                <About />
                <CustomProductsTeaser onOpen={() => setShowProducts(true)} />
                <Works />
                <Labs />
                <Footer />
            </main>

            <ProductGalleryOverlay isOpen={showProducts} onClose={() => setShowProducts(false)} />
            <MobileMenu 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)}
                onOpenProducts={() => setShowProducts(true)}
            />
        </div>
    );
};

export default App;
