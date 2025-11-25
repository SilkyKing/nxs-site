import React from 'react';

const CUBE_URL = "https://i.postimg.cc/t4bZ9mQD/cube.png";

type ViewState = 'home' | 'security' | 'docs';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div 
          onClick={() => setView('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src={CUBE_URL} 
            alt="Nexus Logo" 
            className="w-8 h-8 object-contain group-hover:rotate-12 transition-transform duration-500" 
          />
          <span className="font-bold text-xl tracking-widest text-white group-hover:text-[#24E0E8] transition-colors">
            NEXUS
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setView('security')}
            className={`text-sm font-mono tracking-wider uppercase transition-colors duration-300 ${
              currentView === 'security' ? 'text-[#24E0E8] shadow-[0_1px_0_#24E0E8]' : 'text-gray-400 hover:text-white'
            }`}
          >
            Security
          </button>
          
          <button
            onClick={() => setView('docs')}
            className={`text-sm font-mono tracking-wider uppercase transition-colors duration-300 ${
              currentView === 'docs' ? 'text-[#24E0E8] shadow-[0_1px_0_#24E0E8]' : 'text-gray-400 hover:text-white'
            }`}
          >
            Docs
          </button>

          <div className="hidden md:block h-4 w-[1px] bg-white/20 mx-2"></div>

          <button className="hidden md:block text-sm font-bold bg-white/5 border border-white/10 px-4 py-2 rounded hover:bg-[#24E0E8]/10 hover:border-[#24E0E8] hover:text-[#24E0E8] transition-all">
            GET ACCESS
          </button>
        </div>
      </div>
    </nav>
  );
};