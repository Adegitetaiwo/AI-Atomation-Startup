
import React, { useState } from 'react';
import { Play, FileText, CheckCircle2, Lock, ChevronRight, BookOpen, Clock, Trophy } from 'lucide-react';
import { Navigate } from 'react-router';

interface StudyCRMProps {
  user: any;
}

const courses = [
  {
    id: 1,
    title: "The Architecture of Agents",
    type: 'video',
    duration: "45 mins",
    completed: true,
    content: "In this session, we explore how LLMs act as the central nervous system of an automation agent. You'll learn the difference between zero-shot and chain-of-thought prompting.",
    videoUrl: "https://www.youtube.com/embed/placeholder1"
  },
  {
    id: 2,
    title: "Logic Gates & Routing",
    type: 'video',
    duration: "32 mins",
    completed: false,
    content: "Conditional branching is the key to enterprise logic. We dive into if/then scenarios that handle complex edge cases in real-time data flows.",
    videoUrl: "https://www.youtube.com/embed/placeholder2"
  },
  {
    id: 3,
    title: "SQL for AI Engineers",
    type: 'article',
    duration: "15 min read",
    completed: false,
    content: "Why do AI engineers need SQL? Because prompts alone don't scale. This article outlines the essential JOIN statements and data sanitization methods needed before feeding data to a model.",
    articleBody: "Data is the fuel. SQL is the refinery. To build a truly agentic system, you must be able to pull structured data at scale. Modern AI agents don't just 'hallucinate' answers; they query databases to provide grounded, factual responses..."
  },
  {
    id: 4,
    title: "Make.com API Masterclass",
    type: 'video',
    duration: "58 mins",
    completed: false,
    locked: true
  },
  {
    id: 5,
    title: "Ethics of Automation",
    type: 'article',
    duration: "10 min read",
    completed: false,
    locked: true
  }
];

const StudyCRM: React.FC<StudyCRMProps> = ({ user }) => {
  const [activeCourseId, setActiveCourseId] = useState(1);
  
  if (!user) return <Navigate to="/academy" />;

  const activeCourse = courses.find(c => c.id === activeCourseId) || courses[0];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar - Course List */}
      <div className="w-80 border-r border-blue-900/20 h-[calc(100vh-80px)] overflow-y-auto bg-slate-950/50 backdrop-blur-xl sticky top-20">
        <div className="p-6">
           <h2 className="text-xl font-black text-white uppercase tracking-wider mb-6 font-display">Course Modules</h2>
           <div className="space-y-3">
              {courses.map(course => (
                <button
                  key={course.id}
                  onClick={() => !course.locked && setActiveCourseId(course.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all group relative overflow-hidden ${
                    activeCourseId === course.id 
                    ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-900 border-slate-800 hover:border-blue-900'
                  } ${course.locked ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`${activeCourseId === course.id ? 'text-white' : 'text-blue-500'}`}>
                       {course.type === 'video' ? <Play size={16} fill="currentColor" /> : <FileText size={16} />}
                    </div>
                    <div className="flex-1">
                       <h4 className={`text-sm font-bold truncate ${activeCourseId === course.id ? 'text-white' : 'text-slate-300'}`}>
                         {course.title}
                       </h4>
                       <div className="flex items-center gap-2 mt-1">
                          <Clock size={10} className="text-slate-500" />
                          <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">{course.duration}</span>
                       </div>
                    </div>
                    {course.completed && <CheckCircle2 size={14} className="text-green-400" />}
                    {course.locked && <Lock size={14} className="text-slate-600" />}
                  </div>
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-10">
           {/* Progress Tracker */}
           <div className="flex items-center justify-between bg-slate-900 p-6 rounded-3xl border border-blue-500/10">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl">
                    <Trophy size={20} />
                 </div>
                 <div>
                    <h3 className="text-white font-black text-lg uppercase font-display">Student Progress</h3>
                    <p className="text-slate-500 text-sm font-bold">20% Completed</p>
                 </div>
              </div>
              <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 w-1/5 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              </div>
           </div>

           {/* Active Content */}
           <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 text-blue-500 font-black text-xs uppercase tracking-[0.3em]">
                 <BookOpen size={16} />
                 Module {activeCourse.id} - {activeCourse.type}
              </div>
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase font-display leading-tight">{activeCourse.title}</h1>
              
              {activeCourse.type === 'video' ? (
                <div className="aspect-video bg-black rounded-[3rem] border border-blue-500/20 overflow-hidden shadow-2xl relative group">
                   <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 z-10 group-hover:bg-transparent transition-all">
                      <div className="bg-blue-600 p-8 rounded-full shadow-2xl scale-110 group-hover:scale-100 transition-all cursor-pointer">
                        <Play size={32} fill="white" className="text-white" />
                      </div>
                   </div>
                   <img src={`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200`} className="w-full h-full object-cover opacity-50" alt="Video cover" />
                </div>
              ) : (
                <div className="bg-slate-900 p-10 rounded-[3rem] border border-blue-500/10 space-y-8 font-medium leading-relaxed text-slate-300">
                   <div className="prose prose-invert max-w-none">
                      <p className="text-xl text-white mb-6 font-bold tracking-tight">"{activeCourse.content}"</p>
                      <div className="h-px bg-slate-800 my-8"></div>
                      <p className="whitespace-pre-wrap">{activeCourse.articleBody}</p>
                   </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-8">
                 <button className="flex items-center gap-2 text-slate-500 font-bold hover:text-white transition-all uppercase text-xs">
                    Previous Module
                 </button>
                 <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black flex items-center gap-3 transition-all shadow-xl">
                    COMPLETE & CONTINUE <ChevronRight />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCRM;
