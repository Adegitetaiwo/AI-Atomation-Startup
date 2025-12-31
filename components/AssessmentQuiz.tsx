
import React, { useState } from 'react';
import { Brain, ArrowRight, CheckCircle2, Trophy, Rocket, BarChart3 } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { text: string; category: 'analytics' | 'automation' }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "You are given a list of 1,000 customer complaints. What is your first move?",
    options: [
      { text: "Categorize them to find the top three recurring issues.", category: 'analytics' },
      { text: "Create a standard template to reply to all of them instantly.", category: 'automation' }
    ]
  },
  {
    id: 2,
    text: "Your favorite website is running slowly today. What do you wonder?",
    options: [
      { text: "Is there a specific time of day when this always happens?", category: 'analytics' },
      { text: "Is there a way to make it switch to a faster server automatically?", category: 'automation' }
    ]
  },
  {
    id: 3,
    text: "You are running a small online store. What makes you feel more successful?",
    options: [
      { text: "Knowing exactly which products are most popular with teenagers.", category: 'analytics' },
      { text: "Having a system that prints shipping labels the moment an order arrives.", category: 'automation' }
    ]
  },
  {
    id: 4,
    text: "You need to plan a complex travel route for a group. What is your priority?",
    options: [
      { text: "Comparing every flight price to find the absolute best value.", category: 'analytics' },
      { text: "Setting up automated alerts for delays and gate changes.", category: 'automation' }
    ]
  },
  {
    id: 5,
    text: "You find a recurring error in a project file. How do you handle it?",
    options: [
      { text: "Trace the file history to find out exactly when the error started.", category: 'analytics' },
      { text: "Write a simple rule that fixes the error whenever it appears.", category: 'automation' }
    ]
  }
];

const AssessmentQuiz: React.FC<{ onComplete: (result: string) => void }> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ analytics: 0, automation: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (category: 'analytics' | 'automation') => {
    const newScores = { ...scores, [category]: scores[category] + 1 };
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = scores.analytics >= scores.automation ? 'analytics' : 'automation';

  if (showResult) {
    return (
      <div className="p-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={40} className="text-yellow-500" />
        </div>
        <h3 className="text-3xl font-black text-white mb-4 italic uppercase tracking-tighter">Diagnostic Complete</h3>
        <p className="text-slate-400 mb-8 font-medium">Your natural approach to problems matches the profile of a:</p>
        
        <div className="bg-slate-950 p-8 rounded-[2.5rem] border-2 border-blue-600 mb-10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          {result === 'analytics' ? (
            <>
              <BarChart3 size={48} className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-4xl font-black text-white mb-2 italic uppercase tracking-tighter">Data Professional</h4>
              <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Specialization: Advanced Insights & Analytics</p>
            </>
          ) : (
            <>
              <Rocket size={48} className="mx-auto text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-4xl font-black text-white mb-2 italic uppercase tracking-tighter">AI Systems Architect</h4>
              <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">Specialization: Agentic AI Engineering</p>
            </>
          )}
        </div>

        <p className="text-slate-500 text-sm mb-10 max-w-sm mx-auto leading-relaxed font-medium">
          Your instinct for {result === 'analytics' ? 'finding patterns and understanding the "why"' : 'building efficient systems and streamlining work'} is a perfect fit for this career path.
        </p>

        <button 
          onClick={() => window.location.href = '#/checkout'}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3"
        >
          Secure Your Spot <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="p-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
           <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Logical Diagnostic</span>
        </div>
        <span className="text-slate-500 font-bold text-xs tabular-nums">{currentStep + 1} <span className="text-slate-800">/</span> {questions.length}</span>
      </div>
      
      <div className="w-full h-1 bg-slate-800 rounded-full mb-12 overflow-hidden">
        <div className="h-full bg-blue-600 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="min-h-[100px] mb-10">
        <h3 className="text-2xl md:text-3xl font-black text-white italic leading-tight tracking-tight">
          {questions[currentStep].text}
        </h3>
      </div>

      <div className="space-y-4">
        {questions[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.category)}
            className="w-full text-left bg-slate-950 border border-blue-500/10 hover:border-blue-500 p-6 rounded-2xl group transition-all duration-300 hover:bg-blue-600/5 relative overflow-hidden"
          >
            <div className="flex items-center justify-between relative z-10">
              <span className="text-slate-300 group-hover:text-white font-bold pr-8 leading-snug">{opt.text}</span>
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-all shrink-0">
                <ArrowRight size={16} className="text-blue-500 group-hover:text-white transition-all -translate-x-1 group-hover:translate-x-0" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.2em]">Nexus AI Diagnostic Engine v4.6</p>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
