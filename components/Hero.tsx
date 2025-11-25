import React from 'react';

const CUBE_URL = "https://i.postimg.cc/t4bZ9mQD/cube.png";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      
      {/* Central Visual */}
      <div className="relative w-64 h-64 md:w-96 md:h-96 mb-12 flex items-center justify-center animate-float">
        <div className="absolute inset-0 bg-[#24E0E8] blur-[80px] opacity-20 animate-pulse-slow rounded-full"></div>
        <img 
          src={CUBE_URL} 
          alt="Nexus Cube" 
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_30px_rgba(36,224,232,0.3)]"
        />
      </div>

      {/* Typography */}
      <div className="text-center z-10 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          Your Digital DNA.
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#24E0E8] to-white/50">
            Secured.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The operating system for your memory. Don't train their AI. Train yours.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-[#24E0E8] text-black font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(36,224,232,0.3)] hover:shadow-[0_0_40px_rgba(36,224,232,0.6)] rounded-sm">
            Initialize Vault
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-mono uppercase hover:border-[#24E0E8] hover:text-[#24E0E8] transition-all duration-300 rounded-sm">
            Read Manifesto
          </button>
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
    </div>
  );
};