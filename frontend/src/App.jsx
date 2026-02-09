import React from "react";
import { Play, Zap } from "lucide-react";

const StreakFitHero = () => {
  // Heatmap data
  const heatmapCells = Array.from({ length: 24 }, () => ({
    opacity: Math.random() > 0.3 ? Math.random() * 0.8 + 0.2 : 0.1,
  }));

  return (
<div className="min-h-screen bg-[#020606] text-white flex flex-col items-center justify-center px-6 pt-24 pb-6 overflow-hidden">

      
      {/* Brand Header */}
      <nav className="absolute top-0 left-0 w-full p-8">
        <div className="flex items-center gap-2">
          <Zap className="text-[#00F5A0] fill-[#00F5A0]" size={28} />
          <span className="text-2xl font-bold tracking-tight">StreakFit</span>
        </div>
      </nav>

      <main className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-10">
          
          <h1 className="text-6xl md:text-8xl font-medium leading-tight tracking-tighter">
            Commit to <br />
            Your <br />
            <span className="text-transparent italic  rotate-[-6deg]  bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D1FF]">
              Physique.
            </span>
          </h1>

          <p className="text-gray-400 italic text-lg md:text-xl max-w-md leading-relaxed">
            The world's first fitness ecosystem that visualizes your gains like code. 
            Track consistency, intensity, and volume with high-fidelity heatmaps.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
              Start Your Streak
            </button>

            <button className="px-8 py-4 bg-[#111818] border border-gray-800 text-white font-bold rounded-lg flex items-center gap-2 hover:bg-[#1a2424] transition-colors">
              <Play size={18} fill="white" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Visual (Heatmap Card) */}
        <div className="relative group">
          
          {/* Glow Layer (Stronger on Hover) */}
          <div className="
            absolute -inset-2 
            bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 
            rounded-3xl blur-3xl opacity-40 
            group-hover:opacity-90 
            group-hover:blur-[60px]
            transition-all duration-700
          "></div>
          
          <div className="
            relative 
            bg-[#0A0F0F] 
            border border-gray-800 
            rounded-2xl 
            p-8 
            shadow-2xl 
            transform rotate-2 
            group-hover:rotate-0
            transition-all duration-500
          ">
            <div className="flex justify-between items-start mb-8">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                Global Activity Live
              </span>
            </div>

            {/* Chart Box */}
            <div className="bg-[#111818] rounded-xl p-4 mb-5 flex items-center justify-center border border-white/5">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 7V13M21 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Heatmap Grid */}
            <div className="grid grid-cols-6 gap-3">
              {heatmapCells.map((cell, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm transition-all duration-500 hover:scale-110"
                  style={{
                    backgroundColor: "#00F5A0",
                    opacity: cell.opacity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default StreakFitHero;