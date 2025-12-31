
import React from 'react';

const NormalDistribution: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-16 overflow-hidden bg-slate-900/50 rounded-[3rem] border border-blue-500/10 px-8 md:px-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4 italic">The Origin Point</h3>
        <p className="text-blue-400 text-lg max-w-2xl mx-auto">
          While most follow the curve, Nexus alumni are the <strong>Top 5% Architects</strong> positioned at the very source of technological disruption.
        </p>
      </div>
      
      <div className="relative">
        <svg viewBox="0 0 800 400" className="w-full drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          {/* Axis Labels */}
          <text x="400" y="380" fill="#475569" fontSize="12" textAnchor="middle" fontWeight="bold">COMPETENCY SPECTRUM</text>
          
          <defs>
            <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="30%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <clipPath id="leftTailClip">
              <rect x="0" y="0" width="220" height="400" />
            </clipPath>
          </defs>

          {/* Background Curve (The Rest) */}
          <path
            d="M 0,350 C 150,350 250,50 400,50 C 550,50 650,350 800,350"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Highlighted Zone: The Elite Left Tail */}
          <path
            d="M 0,350 C 150,350 250,50 400,50 L 400,350 L 0,350 Z"
            className="fill-blue-600 opacity-20"
            clipPath="url(#leftTailClip)"
          />

          {/* The Main Symmetrical Curve */}
          <path
            d="M 0,350 C 150,350 250,50 400,50 C 550,50 650,350 800,350"
            fill="none"
            stroke="url(#bellGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Callout Box (Left Positioned) */}
          <g>
            <circle cx="120" cy="280" r="6" fill="#60a5fa" />
            <line x1="120" y1="280" x2="80" y2="180" stroke="#60a5fa" strokeWidth="2" />
            <rect x="20" y="100" width="160" height="70" rx="16" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
            {/* Fix: Replaced 'italic="true"' with 'fontStyle="italic"' as SVG text elements don't support the 'italic' attribute directly in React */}
            <text x="35" y="130" fill="white" fontSize="14" fontWeight="900" fontStyle="italic">NEXUS ELITE</text>
            <text x="35" y="150" fill="#93c5fd" fontSize="10" fontWeight="bold">Architecting the Curve</text>
          </g>

          {/* Generalists Marker */}
          <text x="600" y="320" fill="#475569" fontSize="11" fontWeight="bold">Generalists (95%)</text>
          <circle cx="600" cy="335" r="3" fill="#1e293b" />
        </svg>

        <div className="grid md:grid-cols-2 gap-12 mt-12 bg-slate-950/30 p-8 rounded-3xl border border-blue-500/5">
            <div className="space-y-4">
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs italic">A</span>
                    Strategic Positioning
                </h4>
                <p className="text-slate-400 leading-relaxed">Most graduates aim for the middle. Nexus positions you at the <strong>Left Tail</strong>—where disruptive innovation begins before it scales to the masses.</p>
            </div>
            <div className="space-y-4">
                <h4 className="text-xl font-black text-white flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs italic">B</span>
                    The Inverted Advantage
                </h4>
                <p className="text-slate-400 leading-relaxed">Being in the first 5% of any technological wave (Agentic AI) yields <strong>10x the career ROI</strong> compared to late-stage adoption.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NormalDistribution;
