
import React from 'react';

const NormalDistribution: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-16 overflow-hidden bg-slate-900/50 rounded-[3rem] border border-blue-500/10 px-8 md:px-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">The Talent Apex</h3>
        <p className="text-blue-400 text-lg max-w-2xl mx-auto">
          In a world where 80% of tech graduates lack practical automation skills, Nexus alumni operate in the <strong>Top 5% Tier</strong> across the African continent.
        </p>
      </div>
      
      <div className="relative">
        <svg viewBox="0 0 800 400" className="w-full drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          {/* Legend/Context Areas */}
          <rect x="0" y="320" width="400" height="80" fill="white" fillOpacity="0.02" rx="10" />
          <text x="20" y="350" fill="#64748b" fontSize="12" fontWeight="bold">ZONE 1: Generalists (80%)</text>
          <text x="20" y="370" fill="#64748b" fontSize="10">Basic coding, manual data entry, no AI skills.</text>

          {/* The Bell Curve Path */}
          <path
            d="M0,350 Q200,350 400,50 T600,350 L800,350"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          
          {/* Highlighted Zone: The Top 5% */}
          <path
            d="M580,350 Q600,350 800,350 L800,350 L580,250 Z"
            className="fill-blue-600 opacity-20"
          />
          <path
            d="M530,190 C580,280 650,350 800,350 L530,350 Z"
            className="fill-blue-500 opacity-40 animate-pulse"
          />

          <defs>
            <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="60%" stopColor="#1e293b" />
              <stop offset="70%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* The Actual Curve Stroke */}
          <path
            d="M0,350 Q200,350 400,50 T600,350 L800,350"
            fill="none"
            stroke="url(#bellGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Callouts */}
          <g className="animate-bounce" style={{ animationDuration: '3s' }}>
            <circle cx="560" cy="210" r="6" fill="#60a5fa" />
            <line x1="560" y1="210" x2="650" y2="150" stroke="#60a5fa" strokeWidth="2" />
            <rect x="650" y="110" width="140" height="60" rx="10" fill="#0f172a" stroke="#60a5fa" />
            <text x="660" y="135" fill="white" fontSize="14" fontWeight="black">NEXUS ELITE</text>
            <text x="660" y="155" fill="#93c5fd" fontSize="10">Average Salary: $65k+</text>
          </g>

          {/* Axis Labels */}
          <text x="400" y="380" fill="#94a3b8" fontSize="12" textAnchor="middle">Global Competency Spectrum</text>
        </svg>

        {/* Story Sidebar Overlay */}
        <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">1</span>
                    The Knowledge Gap
                </h4>
                <p className="text-slate-400">Most tech education focuses on syntax. Nexus focuses on <strong>Systems</strong>. Our students learn to build agents that perform work, not just scripts that process data.</p>
            </div>
            <div className="space-y-6">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs">2</span>
                    The Wealth Transition
                </h4>
                <p className="text-slate-400">By moving from Zone 1 to the Nexus Elite zone, our graduates typically see a <strong>300% increase</strong> in their market value within the first 6 months.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NormalDistribution;
