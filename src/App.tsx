import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison, Pricing } from './components/MarketingEngine';

type ViewState = 'home' | 'security' | 'docs';

const SecurityLayout = () => (
  <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto animate-fade-in">
    <div className="border-l-2 border-[#24E0E8] pl-6 mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
        SECURITY PROTOCOLS
      </h1>
      <p className="text-[#24E0E8] font-mono text-sm tracking-widest uppercase">
        NEXUS ARCHITECTURE V1.0
      </p>
    </div>
    
    <div className="grid gap-8">
      <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm hover:border-[#24E0E8]/50 transition-colors">
        <h2 className="text-2xl font-bold mb-4 text-[#24E0E8]">AES-256 Local Encryption</h2>
        <p className="text-gray-400 leading-relaxed">
          All memory shards are encrypted client-side before touching the disk. Your private key never leaves your device. 
          The vault is mathematically inaccessible to unauthorized entities, including NEXUS developers.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-sm backdrop-blur-sm hover:border-[#24E0E8]/50 transition-colors">
        <h2 className="text-2xl font-bold mb-4 text-[#24E0E8]">Zero-Knowledge Architecture</h2>
        <p className="text-gray-400 leading-relaxed">
          We do not track your queries. We do not store your context. The Soul Vault operates as a sovereign 
          node on your local machine, creating a complete air-gap between your memories and the cloud models you utilize.
        </p>
      </div>
    </div>
  </div>
);

const DocsLayout = () => (
  <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto animate-fade-in">
    <div className="border-l-2 border-[#24E0E8] pl-6 mb-12">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white">
        DOCUMENTATION
      </h1>
      <p className="text-[#24E0E8] font-mono text-sm tracking-widest uppercase">
        SYSTEM INTEGRATION MANUAL
      </p>
    </div>

    <div className="space-y-12">
      <section>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-[#24E0E8]">01.</span> Installation Guide
        </h3>
        <div className="bg-black border border-white/20 p-6 rounded font-mono text-sm text-gray-300">
          <p className="mb-2 text-gray-500"># Clone the repository</p>
          <p className="text-[#24E0E8] mb-4">git clone https://github.com/nexus-protocol/core.git</p>
          
          <p className="mb-2 text-gray-500"># Initialize your soul vault</p>
          <p className="text-[#24E0E8] mb-4">./nexus init --encryption aes-256</p>
          
          <p className="mb-2 text-gray-500"># Start the daemon</p>
          <p className="text-[#24E0E8]">./nexus start</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-[#24E0E8]">02.</span> Model Linking
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Connect your API keys securely. NEXUS acts as the middleware, injecting your relevant context 
          into the prompt window dynamically without permanent storage on third-party servers.
        </p>
      </section>
    </div>
  </div>
);

const Footer = () => (
  <footer className="w-full border-t border-white/10 py-12 mt-20 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-sm font-mono">
        © 2024 NEXUS PROTOCOL. ALL RIGHTS RESERVED.
      </p>
      <div className="flex gap-6 text-sm text-gray-400">
        <span className="hover:text-[#24E0E8] cursor-pointer transition-colors">Twitter</span>
        <span className="hover:text-[#24E0E8] cursor-pointer transition-colors">GitHub</span>
        <span className="hover:text-[#24E0E8] cursor-pointer transition-colors">Discord</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [view, setView] = useState<ViewState>('home');

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#24E0E8] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#24E0E8] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <Navbar setView={setView} currentView={view} />

      <main className="flex-grow z-10">
        {view === 'home' && (
          <>
            <Hero />
            <Comparison />
            <Pricing />
          </>
        )}
        {view === 'security' && <SecurityLayout />}
        {view === 'docs' && <DocsLayout />}
      </main>

      {view === 'home' && <Footer />}
    </div>
  );
}