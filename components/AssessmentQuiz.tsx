
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

const AssessmentQuiz: React.FC<{ onComplete: (result: string) => void; onStartCheckout: () => void }> = ({ onComplete, onStartCheckout }) => {
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
      <div className="p-12 text-center animate-in fade-in zoom-in duration-500 bg-white dark:bg-slate-900">
        <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy size={40} className="text-yellow-600 dark:text-yellow-500" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter font-display">Diagnostic Complete</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">Your natural approach matches the profile of a:</p>
        
        <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2.5rem] border-2 border-blue-600 mb-10 relative overflow-hidden group">
          {result === 'analytics' ? (
            <>
              <BarChart3 size={48} className="mx-auto text-blue-600 mb-4 transition-transform group-hover:scale-110" />
              <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter font-display">Data Professional</h4>
            </>
          ) : (
            <>
              <Rocket size={48} className="mx-auto text-blue-600 mb-4 transition-transform group-hover:scale-110" />
              <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter font-display">Systems Architect</h4>
            </>
          )}
        </div>

        <button 
          onClick={onStartCheckout}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3"
        >
          Secure Your Spot <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="p-12 bg-white dark:bg-slate-900">
      <div className="flex items-center justify-between mb-8">
        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Csuit Diagnostic Engine</span>
        <span className="text-slate-500 font-bold text-xs">{currentStep + 1} / {questions.length}</span>
      </div>
      
      <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
        <div className="h-full bg-blue-600 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
      </div>

      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-10 leading-tight tracking-tight font-display">
        {questions[currentStep].text}
      </h3>

      <div className="space-y-4">
        {questions[currentStep].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt.category)}
            className="w-full text-left bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-blue-500/10 hover:border-blue-600 p-6 rounded-2xl group transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-white font-bold">{opt.text}</span>
              <ArrowRight size={18} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssessmentQuiz;
