import React from 'react';
import { Check, X, Shield, Brain, Zap, Database, Lock, Server, Globe } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            THE SOVEREIGN <span className="text-[#24E0E8]">ADVANTAGE</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Comparison Matrix v2.1
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Feature Labels (Hidden on mobile, visible on MD) */}
          <div className="hidden md:flex flex-col gap-12 text-right pr-8">
            <div className="h-24 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-end gap-2">
                Privacy Architecture <Shield className="w-5 h-5 text-gray-500" />
              </h3>
              <p className="text-sm text-gray-500 mt-1">Data persistence layer</p>
            </div>
            <div className="h-24 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-end gap-2">
                Memory Horizon <Database className="w-5 h-5 text-gray-500" />
              </h3>
              <p className="text-sm text-gray-500 mt-1">Context window retention</p>
            </div>
            <div className="h-24 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white flex items-center justify-end gap-2">
                Model Agnosticism <Zap className="w-5 h-5 text-gray-500" />
              </h3>
              <p className="text-sm text-gray-500 mt-1">Provider flexibility</p>
            </div>
          </div>

          {/* Public AI Column */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-8 flex flex-col gap-12 relative overflow-hidden group hover:border-red-500/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            <div className="text-center mb-4 md:hidden">
              <h4 className="font-bold text-gray-400">PUBLIC AI</h4>
            </div>
            
            <div className="h-24 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Globe className="w-5 h-5" />
                <span className="font-mono text-sm">CLOUD BASED</span>
              </div>
              <p className="text-red-400/80 text-sm font-bold flex items-center gap-2">
                <X className="w-4 h-4" /> Data Leaks Possible
              </p>
            </div>

            <div className="h-24 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Brain className="w-5 h-5" />
                <span className="font-mono text-sm">EPHEMERAL</span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <X className="w-4 h-4" /> Reset on Refresh
              </p>
            </div>

            <div className="h-24 flex flex-col items-center justify-center text-center">
               <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-mono text-sm">LOCKED</span>
              </div>
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <X className="w-4 h-4" /> Single Vendor
              </p>
            </div>
          </div>

          {/* NEXUS Column */}
          <div className="bg-[#24E0E8]/5 border border-[#24E0E8]/30 rounded-sm p-8 flex flex-col gap-12 relative overflow-hidden shadow-[0_0_50px_rgba(36,224,232,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#24E0E8] to-transparent"></div>
            <div className="text-center mb-4 md:hidden">
              <h4 className="font-bold text-[#24E0E8]">NEXUS</h4>
            </div>

            <div className="h-24 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 text-white mb-2">
                <Lock className="w-5 h-5 text-[#24E0E8]" />
                <span className="font-mono text-sm tracking-widest text-[#24E0E8]">AES-256</span>
              </div>
              <p className="text-white text-sm font-bold flex items-center gap-2 shadow-[#24E0E8] drop-shadow-[0_0_10px_rgba(36,224,232,0.5)]">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Local Encryption
              </p>
            </div>

            <div className="h-24 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 text-white mb-2">
                <Database className="w-5 h-5 text-[#24E0E8]" />
                <span className="font-mono text-sm tracking-widest text-[#24E0E8]">PERMANENT</span>
              </div>
              <p className="text-white text-sm font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Infinite Recall
              </p>
            </div>

            <div className="h-24 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-2 text-white mb-2">
                <Zap className="w-5 h-5 text-[#24E0E8]" />
                <span className="font-mono text-sm tracking-widest text-[#24E0E8]">ADAPTIVE</span>
              </div>
              <p className="text-white text-sm font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Universal Adapter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-transparent to-[#24E0E8]/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">
            CHOOSE YOUR <span className="text-[#24E0E8]">PROTOCOL</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Sovereignty Levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Core */}
          <div className="bg-black border border-white/10 p-8 rounded-sm hover:border-white/30 transition-all duration-300 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">INITIATE</h3>
            <div className="text-4xl font-bold text-gray-500 mb-6 font-mono">Free</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-400">
                <Check className="w-4 h-4" /> Local Soul Vault
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Check className="w-4 h-4" /> 1GB Vector Storage
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Check className="w-4 h-4" /> Basic Search
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Check className="w-4 h-4" /> Single Device
              </li>
            </ul>
            <button className="w-full py-4 border border-white/20 text-white font-mono uppercase text-sm hover:bg-white hover:text-black transition-all">
              Download
            </button>
          </div>

          {/* Card 2: Sovereign */}
          <div className="bg-black border border-[#24E0E8] p-8 rounded-sm relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(36,224,232,0.15)] flex flex-col">
            <div className="absolute top-0 right-0 bg-[#24E0E8] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
              Recommended
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 text-[#24E0E8]">SOVEREIGN</h3>
            <div className="text-4xl font-bold text-white mb-6 font-mono">
              $20<span className="text-sm text-gray-500 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white">
                <Check className="w-4 h-4 text-[#24E0E8]" /> <span className="font-bold">Encrypted Cloud Sync</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Unlimited Memory
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Multi-Device Mesh
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check className="w-4 h-4 text-[#24E0E8]" /> Early Access Models
              </li>
            </ul>
            <button className="w-full py-4 bg-[#24E0E8] text-black font-bold font-mono uppercase text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(36,224,232,0.6)] transition-all">
              Start 14-Day Trial
            </button>
          </div>

          {/* Card 3: Institution */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#24E0E8]/50 transition-all duration-300 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-2">COLLECTIVE</h3>
            <div className="text-4xl font-bold text-white mb-6 font-mono">Custom</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-4 h-4 text-gray-500" /> On-Premise Deployment
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-4 h-4 text-gray-500" /> Team Memory Shards
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-4 h-4 text-gray-500" /> SSO & Audit Logs
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Check className="w-4 h-4 text-gray-500" /> Dedicated Support
              </li>
            </ul>
            <button className="w-full py-4 border border-white/20 text-white font-mono uppercase text-sm hover:border-[#24E0E8] hover:text-[#24E0E8] transition-all">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};