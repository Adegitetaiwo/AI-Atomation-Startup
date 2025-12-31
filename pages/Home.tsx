
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, Bot, Cpu, BarChart3, Clock, CheckCircle2, ArrowRight, BookOpen, Youtube, Trophy, Briefcase, TrendingUp } from 'lucide-react';
import FloatingIcons from '../components/FloatingIcons';
// Use unified 'react-router' package to resolve missing exported member error
import { Link } from 'react-router';

const roiData = [
  { name: 'Customer Service', manual: 120, automated: 15 },
  { name: 'Data Entry', manual: 200, automated: 20 },
  { name: 'HR Onboarding', manual: 80, automated: 12 },
  { name: 'Report Gen', manual: 150, automated: 10 },
  { name: 'Lead Mgmt', manual: 100, automated: 8 },
];

const caseStudies = [
  {
    industry: "Financial Services",
    challenge: "KYC processing taking 72 hours per client.",
    solution: "End-to-end AI validation pipeline with custom logic gates.",
    result: "Reduced processing to 5 minutes. 99.8% verification accuracy."
  },
  {
    industry: "Logistics",
    challenge: "Manual dispatching for 500+ vehicles causing routing delays.",
    solution: "Agentic AI router with real-time traffic data integration.",
    result: "Saved $1.2M in annual fuel costs. Delivery speed increased by 40%."
  },
  {
    industry: "Retail Giant",
    challenge: "Inventory stockouts costing $50k in daily lost revenue.",
    solution: "Predictive inventory bot with automated vendor ordering.",
    result: "Stockouts eliminated. Inventory turnover rate improved by 65%."
  },
  {
    industry: "Real Estate",
    challenge: "Missing 70% of high-intent leads due to slow response.",
    solution: "24/7 AI Sales Agent via WhatsApp and CRM automation.",
    result: "Lead-to-showing conversion tripled. 2.4s average response time."
  },
  {
    industry: "Legal Operations",
    challenge: "Reviewing 1,000+ contracts monthly manually.",
    solution: "LLM-powered document analysis and risk assessment agent.",
    result: "Saved 160 hours/month for senior counsel. Zero missed compliance clauses."
  }
];

const Home: React.FC = () => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950/20">
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
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl shadow-blue-600/40 transition-all transform hover:scale-105">
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
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
              Stop Burning Time. <br />
              <span className="text-blue-500 italic">Scale ROI.</span>
            </h2>
            <p className="text-slate-400 mb-8 text-xl leading-relaxed">
              Our bespoke automations don't just "save time"—they redefine your business capacity. 
              By shifting manual overhead to intelligent agents, our clients see an average of <strong>85% reduction</strong> in operational latency.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-blue-500/10">
                  <div className="text-blue-500 text-3xl font-black">85%</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Time Efficiency</div>
               </div>
               <div className="bg-slate-900/50 p-6 rounded-2xl border border-blue-500/10">
                  <div className="text-blue-500 text-3xl font-black">2.4x</div>
                  <div className="text-slate-500 text-xs font-bold uppercase">Output Capacity</div>
               </div>
            </div>
            <ul className="space-y-4">
              {[
                "24/7 autonomous process execution",
                "Zero human-error in complex data routing",
                "Real-time analytics on every workflow"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle2 className="text-blue-500" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-[3rem] border border-blue-900/20 shadow-2xl">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="text-blue-500" />
                Impact: Manual vs Automated
              </h3>
            </div>
            <div className="h-[450px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={roiData} layout="vertical" margin={{ left: 20, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={120} />
                  <Tooltip 
                    cursor={{fill: '#1e293b'}} 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e3a8a', borderRadius: '8px' }}
                  />
                  <Bar dataKey="manual" fill="#1e293b" radius={[0, 4, 4, 0]} name="Manual" />
                  <Bar dataKey="automated" fill="#2563eb" radius={[0, 4, 4, 0]} name="Automated" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Case Scenarios */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 italic">The Nexus Impact</h2>
          <p className="text-slate-500 text-lg">Measurable transformation across 5 key industry sectors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((cs, i) => (
            <div key={i} className="bg-slate-900/50 border border-blue-900/10 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                 <TrendingUp size={80} className="text-blue-500" />
              </div>
              <div className="flex items-center gap-3 mb-8">
                 <div className="bg-blue-500/20 p-3 rounded-2xl"><Briefcase className="text-blue-500" size={24} /></div>
                 <span className="text-blue-400 font-black uppercase tracking-widest text-xs">{cs.industry}</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-slate-500 text-xs font-black uppercase mb-2">The Challenge</h4>
                  <p className="text-white font-medium">{cs.challenge}</p>
                </div>
                <div className="h-px bg-slate-800"></div>
                <div>
                  <h4 className="text-blue-500 text-xs font-black uppercase mb-2">Nexus Architecture</h4>
                  <p className="text-slate-300 italic">"{cs.solution}"</p>
                </div>
                <div className="bg-blue-600/10 border border-blue-600/20 p-6 rounded-2xl">
                   <h4 className="text-blue-500 text-[10px] font-black uppercase mb-1">Measurable Result</h4>
                   <span className="text-blue-400 font-black text-xl">{cs.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academy Teaser Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-blue-600 p-12 md:p-24 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
            <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-20 -translate-y-20">
               <Trophy size={400} />
            </div>
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
               <h2 className="text-5xl md:text-7xl font-black text-white mb-6 italic leading-none">WANT TO MASTER THESE SKILLS?</h2>
               <p className="text-blue-100 text-xl font-medium mb-10">
                 Our Academy is where the top 5% of African tech talent is forged. Learn Agentic AI, Data Analytics, and Workflow Automation with a personalized curriculum driven by our AI Assessment tool.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/academy" className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xl">
                     Enter the Academy <ArrowRight />
                  </Link>
               </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[3rem] border border-white/20 text-white relative z-10 w-full max-w-sm">
                <div className="text-3xl font-black mb-4 flex items-center gap-2 italic">
                   <Bot className="text-blue-200" />
                   AI-POWERED
                </div>
                <p className="text-sm font-medium mb-6 leading-relaxed opacity-90">
                  Our "Study CRM" uses Agentic AI to scan your skills and recommend exactly what you should learn next. No fluff, just results.
                </p>
                <div className="flex -space-x-3 mb-2">
                   {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-10 h-10 rounded-full border-2 border-blue-600" />)}
                   <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-600 flex items-center justify-center text-[10px] font-black">+5k</div>
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-blue-200">Enrolled Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Knowledge Base Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 italic">Elite Resources</h2>
          <p className="text-slate-500 text-lg">Access the Nexus Knowledge Base at zero cost. Start dominating today.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
           <ResourceCard 
             icon={<Youtube className="text-red-500" size={32} />}
             title="Tutorial Vault"
             description="200+ hours of advanced training on Make.com, Zapier, and Python automation. Updated weekly."
             link="Watch on YouTube"
           />
           <ResourceCard 
             icon={<BookOpen className="text-blue-400" size={32} />}
             title="Automation Blueprints"
             description="Download high-converting workflow templates and enterprise mapping guides."
             link="Download PDF"
           />
           <ResourceCard 
             icon={<Bot className="text-emerald-400" size={32} />}
             title="AI Skill Diagnostic"
             description="Our 'lite' AI tool to analyze your current tech stack proficiency and identify gaps."
             link="Test Your Stack"
           />
        </div>
      </section>
    </div>
  );
};

const ResourceCard = ({ icon, title, description, link }: { icon: React.ReactNode, title: string, description: string, link: string }) => (
  <div className="bg-slate-900 border border-blue-900/10 p-10 rounded-[3rem] hover:translate-y-[-12px] transition-all hover:border-blue-500/30 group">
    <div className="mb-8 w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
       {icon}
    </div>
    <h3 className="text-2xl font-black text-white mb-4 italic">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-10">{description}</p>
    <button className="text-blue-500 font-black hover:text-white transition-colors flex items-center gap-2 group-hover:gap-4">
      {link} <ArrowRight size={20} />
    </button>
  </div>
);

export default Home;
