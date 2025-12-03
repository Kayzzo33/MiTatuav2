import React, { useState } from 'react';
import { Sparkles, Loader2, X } from 'lucide-react';
import { generateTattooConcept } from '../services/geminiService';
import { COLORS } from '../constants';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [idea, setIdea] = useState('');
  const [style, setStyle] = useState('Fineline');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!idea) return;
    setLoading(true);
    const concept = await generateTattooConcept(idea, style);
    setResult(concept || "Could not generate concept.");
    setLoading(false);
  };

  return (
    <>
      <div className="py-20 bg-zinc-900/50 relative overflow-hidden">
         {/* Background decor */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"/>

        <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-display mb-4">Unsure about your next ink?</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let "Mi AI" muse help you visualize a concept combining your story with my signature styles.</p>
            
            <button 
                onClick={() => setIsOpen(true)}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-widest text-white uppercase transition-all duration-200 bg-transparent border border-white hover:bg-white hover:text-black hover-target"
                data-cursor-text="ASK AI"
            >
                <Sparkles className="mr-2 w-5 h-5 group-hover:animate-spin" />
                Consult the Muse
            </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
           <div className="bg-[#121212] border border-white/10 rounded-2xl w-full max-w-2xl p-8 relative overflow-hidden shadow-2xl">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white hover-target"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-display text-white mb-2 flex items-center">
                <Sparkles className="text-orange-500 mr-2" /> 
                AI Concept Generator
              </h2>
              <p className="text-gray-400 text-sm mb-6">Describe your feeling, memory, or object, and select a style.</p>

              <div className="space-y-6">
                <div>
                   <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Your Idea</label>
                   <textarea 
                     className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none h-32 hover-target"
                     placeholder="e.g., A pocket watch surrounded by cherry blossoms, representing time passing..."
                     value={idea}
                     onChange={(e) => setIdea(e.target.value)}
                   />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Style Preference</label>
                    <div className="flex gap-4 flex-wrap">
                        {['Fineline', 'Blackwork', 'Old School', 'Geek/Anime', 'Abstract'].map(s => (
                            <button
                                key={s}
                                onClick={() => setStyle(s)}
                                className={`px-4 py-2 rounded-full text-sm border hover-target transition-all ${style === s ? `bg-[${COLORS.accent}] border-[${COLORS.accent}] text-white` : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'}`}
                                style={style === s ? {backgroundColor: COLORS.accent, borderColor: COLORS.accent} : {}}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                <button 
                    onClick={handleGenerate}
                    disabled={loading || !idea}
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover-target"
                >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : 'Generate Concept'}
                </button>
                
                {result && (
                    <div className="mt-6 p-6 bg-zinc-900/50 rounded-xl border border-orange-500/20 animate-in fade-in slide-in-from-bottom-4">
                        <h4 className="font-display text-orange-500 mb-2">The Vision:</h4>
                        <div className="prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-line leading-relaxed">
                            {result}
                        </div>
                    </div>
                )}
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;