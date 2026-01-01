
import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Zap, Clock, CheckCircle2, ArrowRight, Briefcase, Mail } from 'lucide-react';
import FloatingIcons from '../components/FloatingIcons';
import { Link } from 'react-router';

const roiData = [
  { name: 'Customer Service', manual: 120, automated: 15 },
  { name: 'Data Entry', manual: 200, automated: 20 },
  { name: 'HR Onboarding', manual: 80, automated: 12 },
  { name: 'Report Gen', manual: 150, automated: 10 },
  { name: 'Lead Mgmt', manual: 100, automated: 8 },
];

const allCaseStudies = [
  {
    industry: "Financial Services",
    challenge: "KYC processing taking 72 hours per client due to manual validation.",
    solution: "End-to-end AI validation pipeline with custom logic gates.",
    result: "Processing time reduced to < 5 minutes"
  },
  {
    industry: "Logistics",
    challenge: "Manual dispatching for 500+ vehicles causing significant delays.",
    solution: "Agentic AI router with real-time traffic data integration.",
    result: "$1.2M in annual fuel costs saved"
  },
  {
    industry: "Retail Giant",
    challenge: "Inventory stockouts costing $50k in daily missed revenue.",
    solution: "Predictive inventory bot with automated vendor ordering systems.",
    result: "Inventory turnover improved by 65%"
  },
  {
    industry: "Real Estate",
    challenge: "Missing 70% of high-intent leads due to slow response times.",
    solution: "24/7 AI Sales Agent via WhatsApp and CRM automation.",
    result: "Lead conversion rates tripled in 90 days"
  },
  {
    industry: "Legal Operations",
    challenge: "Reviewing 1,000+ contracts monthly with human legal teams.",
    solution: "LLM-powered document analysis and risk assessment agent.",
    result: "160 hours per month reclaimed for partners"
  },
  {
    industry: "E-commerce",
    challenge: "Scaling customer support to 10k tickets daily during peak.",
    solution: "Multilingual Voice AI + Chat support agents with memory.",
    result: "92% automated resolution rate achieved"
  }
];

const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const impactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!impactRef.current) return;
      const rect = impactRef.current.getBoundingClientRect();
      const sectionHeight = impactRef.current.offsetHeight;
      
      // Calculate how far we have scrolled into the sticky section
      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - window.innerHeight;
      
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToConsult = () => {
    document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Transition math for the two sets of cards
  const set1Opacity = scrollProgress < 0.45 ? 1 : Math.max(0, 1 - (scrollProgress - 0.45) * 10);
  const set1Translate = scrollProgress < 0.45 ? 0 : -(scrollProgress - 0.45) * 200;
  
  const set2Opacity = scrollProgress > 0.55 ? 1 : Math.max(0, (scrollProgress - 0.45) * 10);
  const set2Translate = scrollProgress > 0.55 ? 0 : (0.55 - scrollProgress) * 200;

  // Visibility logic for the temporary scroll indicator
  // It appears once we start scrolling into the sticky section
  const showScrollIndicator = scrollProgress > 0.02 && scrollProgress < 0.98;

  return (
    <div className="space-y-32 pb-20 bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-black via-black to-blue-950/20">
        <FloatingIcons />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-semibold mb-8">
            <Zap size={16} />
            <span>Next-Gen Enterprise Workflow Automation</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none italic">
            UNLEASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">AGENTIC AI</span><br />
            IN YOUR WORKFLOW
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            We architect sophisticated digital nervous systems that execute your business strategy autonomously and flawlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToConsult}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl shadow-blue-600/40 transition-all transform hover:scale-105"
            >
              Request Consultancy
            </button>
            <Link to="/academy" className="w-full sm:w-auto bg-slate-900 border border-blue-900/50 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-black text-lg transition-all text-center">
              Nexus Academy
            </Link>
          </div>
        </div>
      </section>

      {/* ROI Chart Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-white mb-6 leading-tight italic">
              Stop Burning Time. <br />
              <span className="text-blue-500 italic">Scale ROI.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-xl leading-relaxed">
              Our bespoke automations shift manual overhead to intelligent agents, resulting in an average of <strong>85% reduction</strong> in operational latency.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-blue-500/10">
                  <div className="text-blue-500 text-3xl font-black">85%</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Efficiency Gain</div>
               </div>
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-blue-500/10">
                  <div className="text-blue-500 text-3xl font-black">2.4x</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Output Capacity</div>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-[3rem] border border-blue-900/20 shadow-2xl relative overflow-hidden">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="text-blue-500" />
                Impact Comparison
              </h3>
            </div>
            <div className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roiData} layout="vertical" margin={{ left: 20, right: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} width={110} fontWeight="bold" />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e40af', borderRadius: '16px' }}
                  />
                  <Bar dataKey="manual" name="Manual Tasks" fill="#334155" radius={[0, 4, 4, 0]} barSize={18}>
                    {roiData.map((entry, index) => (
                      <Cell key={`manual-${index}`} className="hover:fill-slate-500 transition-colors" />
                    ))}
                  </Bar>
                  <Bar dataKey="automated" name="With NexusAI" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={18}>
                    {roiData.map((entry, index) => (
                      <Cell key={`auto-${index}`} className="hover:fill-blue-400 transition-colors" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Impact Transition Section */}
      <section ref={impactRef} className="relative min-h-[250vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
          
          {/* Temporary Modern Scroll Indicator (Right-hand side) */}
          <div 
            className={`fixed right-8 top-1/2 -translate-y-1/2 w-2 h-48 bg-slate-900/30 rounded-full border border-blue-500/10 overflow-hidden z-[60] transition-all duration-700 ease-out transform ${showScrollIndicator ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            {/* Background Track */}
            <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
            
            {/* Moving Thumb / Progress */}
            <div 
              className="absolute top-0 left-0 w-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,1)] transition-all duration-150 rounded-full"
              style={{ height: `${scrollProgress * 100}%` }}
            />
            
            {/* High-tech label */}
            <div className="absolute top-[115%] left-1/2 -translate-x-1/2 flex flex-col items-center">
               <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest whitespace-nowrap opacity-80 animate-pulse">
                 TRANSITION {Math.round(scrollProgress * 100)}%
               </div>
               <div className="w-1 h-1 bg-blue-500 rounded-full mt-1"></div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-center mb-16">
               <div className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                 Sticky Transition Module
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">The Nexus Impact</h2>
            </div>

            <div className="relative h-[500px] flex items-center justify-center">
              {/* Set 1: First 3 Cards */}
              <div 
                className="grid md:grid-cols-3 gap-8 absolute inset-0 w-full"
                style={{ 
                  opacity: set1Opacity, 
                  transform: `translateY(${set1Translate}px)`,
                  pointerEvents: scrollProgress < 0.5 ? 'auto' : 'none',
                  transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {allCaseStudies.slice(0, 3).map((cs, i) => (
                  <ImpactCard key={i} cs={cs} />
                ))}
              </div>

              {/* Set 2: Last 3 Cards */}
              <div 
                className="grid md:grid-cols-3 gap-8 absolute inset-0 w-full"
                style={{ 
                  opacity: set2Opacity, 
                  transform: `translateY(${set2Translate}px)`,
                  pointerEvents: scrollProgress >= 0.5 ? 'auto' : 'none',
                  transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {allCaseStudies.slice(3, 6).map((cs, i) => (
                  <ImpactCard key={i + 3} cs={cs} />
                ))}
              </div>
            </div>
            
            {/* Scroll hint inside section */}
            <div className="mt-20 text-center opacity-30">
               <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {scrollProgress < 0.5 ? 'Keep scrolling for more results' : 'Continue to Academy'}
                  </span>
                  <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Funnel */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl shadow-blue-600/30 group">
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic leading-none">DOMINATE THE CURVE</h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl font-medium leading-relaxed">
              Become the top 5% talent that global enterprises compete for. Join Nexus Academy and master Agentic AI.
            </p>
            <Link to="/academy" className="bg-white text-blue-600 px-10 py-4 rounded-full font-black text-xl hover:bg-slate-100 transition-all inline-flex items-center gap-3 shadow-xl">
              Enter Academy <ArrowRight />
            </Link>
          </div>
          <div className="w-full max-w-sm bg-black/20 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 z-10 text-white">
            <h4 className="text-2xl font-black mb-6 italic">Next Intake</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                <span className="font-bold">Cohort Alpha</span>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px] font-black uppercase">Open</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10 text-sm">
                <span className="font-bold">Starts In</span>
                <span className="text-blue-200">14 Days</span>
              </div>
              <div className="flex justify-between items-center py-3 text-sm">
                <span className="font-bold">Curriculum</span>
                <span className="text-blue-200">Agentic AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="consult" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-24">
        <div className="bg-slate-900/50 border border-blue-900/20 rounded-[3rem] p-10 lg:p-16 relative backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 italic uppercase">Secure Your Consultation</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our architects are ready to map your operational transformation. Start your journey into autonomous workflows.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-white font-bold bg-black/50 p-4 rounded-xl border border-blue-500/10">
                    <Mail className="text-blue-500" /> contact@nexusai.com
                 </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-[2.5rem] h-[550px] border border-blue-500/10 relative overflow-hidden group">
               <div className="absolute inset-0 flex items-center justify-center bg-black/95 z-10 p-10 text-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                      <Mail size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-wider">Typeform Integration</h3>
                    <p className="text-slate-400 font-medium text-sm">Enquiry form loading in live environment...</p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase">Manual Inquiry</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImpactCard: React.FC<{ cs: any }> = ({ cs }) => (
  <div className="bg-slate-900/40 border border-blue-900/40 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-blue-500/50 transition-all group flex flex-col h-full shadow-2xl">
    <div className="flex items-center justify-between mb-6">
       <span className="text-blue-500 font-black uppercase tracking-[0.25em] text-[10px]">{cs.industry}</span>
       <div className="bg-blue-500/10 p-2 rounded-lg group-hover:bg-blue-500 transition-colors shadow-lg">
          <Briefcase size={16} className="text-blue-400 group-hover:text-white" />
       </div>
    </div>
    
    <div className="flex-1 flex flex-col">
       <div className="mb-6">
         <h4 className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">Pain Point</h4>
         <p className="text-white font-bold text-sm leading-snug">{cs.challenge}</p>
       </div>
       
       <div className="h-px bg-slate-800/50 mb-6"></div>
       
       <div className="mb-6">
         <h4 className="text-blue-500 text-[10px] font-black uppercase mb-2 tracking-widest">Nexus Strategy</h4>
         <p className="text-slate-400 italic text-xs leading-relaxed">"{cs.solution}"</p>
       </div>

       <div className="flex-1 flex flex-col justify-end">
          <div className="bg-blue-600/5 border border-blue-500/20 rounded-[1.5rem] p-6 text-center group-hover:bg-blue-600/15 group-hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
             <h4 className="text-blue-500/60 text-[9px] font-black uppercase tracking-[0.3em] mb-3">Operational Gain</h4>
             <p className="text-white text-2xl md:text-3xl font-black italic tracking-tighter leading-none">
               {cs.result}
             </p>
          </div>
       </div>
    </div>
    
    <div className="mt-6 pt-4 border-t border-slate-800/30">
       <div className="flex justify-between items-center text-[8px] font-black text-slate-600 uppercase tracking-widest">
          <span className="flex items-center gap-1.5"><CheckCircle2 size={10} className="text-blue-500" /> Audit Verified</span>
          <span>v4.8 PROTOCOL</span>
       </div>
    </div>
  </div>
);

export default Home;
