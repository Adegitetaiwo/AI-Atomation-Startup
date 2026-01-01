
import React from 'react';

const NormalDistribution: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-16 overflow-hidden bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-blue-500/10 px-8 md:px-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase font-display">The Origin Point</h3>
        <p className="text-blue-600 dark:text-blue-400 text-lg max-w-2xl mx-auto font-medium">
          While most follow the curve, Csuit alumni are the <strong>Top 5% Architects</strong> positioned at the very source of technological disruption.
        </p>
      </div>
      
      <div className="relative">
        <svg viewBox="0 0 800 400" className="w-full drop-shadow-[0_0_25px_rgba(59,130,246,0.2)]">
          <text x="400" y="380" fill="#94a3b8" fontSize="12" textAnchor="middle" fontWeight="bold">COMPETENCY SPECTRUM</text>
          
          <defs>
            <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="30%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <clipPath id="leftTailClip">
              <rect x="0" y="0" width="220" height="400" />
            </clipPath>
          </defs>

          <path
            d="M 0,350 C 150,350 250,50 400,50 C 550,50 650,350 800,350"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          <path
            d="M 0,350 C 150,350 250,50 400,50 L 400,350 L 0,350 Z"
            className="fill-blue-600 opacity-10 dark:opacity-20"
            clipPath="url(#leftTailClip)"
          />

          <path
            d="M 0,350 C 150,350 250,50 400,50 C 550,50 650,350 800,350"
            fill="none"
            stroke="url(#bellGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <g>
            <circle cx="120" cy="280" r="6" fill="#3b82f6" />
            <line x1="120" y1="280" x2="80" y2="180" stroke="#3b82f6" strokeWidth="2" />
            <rect x="20" y="100" width="160" height="70" rx="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
            <text x="35" y="130" fill="white" fontSize="14" fontWeight="900">CSUIT ELITE</text>
            <text x="35" y="150" fill="#93c5fd" fontSize="10" fontWeight="bold">Architecting the Curve</text>
          </g>
        </svg>

        <div className="grid md:grid-cols-2 gap-12 mt-12 bg-white dark:bg-slate-950/30 p-8 rounded-3xl border border-slate-100 dark:border-blue-500/5 shadow-sm">
            <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 uppercase font-display">
                    Strategic Positioning
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Most graduates aim for the middle. Csuit positions you at the <strong>Left Tail</strong>—where disruptive innovation begins.</p>
            </div>
            <div className="space-y-4">
                <h4 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2 uppercase font-display">
                    The Advantage
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Being in the first 5% of Agentic AI adoption yields <strong>10x the career ROI</strong> compared to late-stage adoption.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NormalDistribution;
