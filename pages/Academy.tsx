
import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, ArrowRight, Star, Calendar, Check, Play, Quote, Mail, Sparkles, Brain, X } from 'lucide-react';
import NormalDistribution from '../components/NormalDistribution';
import AssessmentQuiz from '../components/AssessmentQuiz';
import { useNavigate } from 'react-router';

interface AcademyProps {
  user: any;
  onOpenAuth: () => void;
}

const Academy: React.FC<AcademyProps> = ({ user, onOpenAuth }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const navigate = useNavigate();

  const getNextCohort = () => {
    return "January '26"; 
  };

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200',
      title: 'MASTER THE FUTURE',
      subtitle: 'Where Agentic AI meets elite Data Analytics training.'
    },
    {
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200',
      title: 'BRIDGE THE GAP',
      subtitle: 'Our AI assessment identifies exactly what you need to succeed.'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200',
      title: 'ELITE MENTORSHIP',
      subtitle: 'Join a cohort led by Africa\'s top automation consultants.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleApply = () => {
    if (!user) {
      onOpenAuth();
    } else {
      navigate('/checkout');
    }
  };

  const companies = [
    "Google", "Microsoft", "Meta", "Amazon", "Tesla", "Netflix", "Uber", "Airbnb", "Standard Chartered", "Dangote", "MTN", "Safaricom"
  ];

  return (
    <div className="bg-slate-950">
      {/* Header Carousel */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        {carouselImages.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10"></div>
            <img src={img.url} className="w-full h-full object-cover opacity-70" alt={img.title} />
            <div className="absolute inset-0 flex items-center z-20 px-8 md:px-24">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">
                  {img.title}
                </h1>
                <p className="text-xl md:text-2xl text-blue-400 mb-10 max-w-lg font-medium">
                  {img.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <button 
                    onClick={handleApply}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30"
                  >
                    APPLY & SECURE SPOT
                  </button>
                  <button onClick={() => setShowQuiz(true)} className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold transition-all border border-white/10 flex items-center gap-2 justify-center">
                    <Brain size={20} className="text-blue-400" /> Start Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {carouselImages.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-500 w-12' : 'bg-slate-600'}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Assessment Quiz Section */}
      {showQuiz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-slate-900 rounded-[3rem] border border-blue-500/20 overflow-hidden relative shadow-2xl">
            <button onClick={() => setShowQuiz(false)} className="absolute top-8 right-8 text-slate-400 hover:text-white z-10 p-2">
              <X size={24} />
            </button>
            <AssessmentQuiz onComplete={() => {}} onStartCheckout={handleApply} />
          </div>
        </div>
      )}

      {/* Looping Logos */}
      <section className="py-12 bg-slate-900 overflow-hidden border-y border-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 mb-8">
            <h3 className="text-center text-slate-500 text-sm font-bold uppercase tracking-[0.3em]">Where Our Alumni Lead</h3>
        </div>
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="mx-16 text-3xl font-black text-slate-700/50 hover:text-blue-500/80 transition-colors cursor-default">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Quiz Callout */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
         <div className="bg-gradient-to-r from-blue-900/20 to-slate-900 p-12 rounded-[3rem] border border-blue-500/10 relative overflow-hidden">
            <Sparkles className="absolute -top-10 -right-10 text-blue-500/10 w-40 h-40" />
            <h2 className="text-4xl font-black text-white mb-6 italic">Unsure of your path?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto font-medium">
               Take our 10-question logic assessment to find if you are naturally wired for <strong>Data Analytics</strong> or <strong>Agentic AI Engineering</strong>.
            </p>
            <button 
              onClick={() => setShowQuiz(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black text-lg transition-all shadow-xl shadow-blue-600/20"
            >
              Take the Quiz
            </button>
         </div>
      </section>

      {/* Story: The Nexus Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                  <h2 className="text-5xl font-black text-white mb-8 italic">Not Just Another Course. <br /><span className="text-blue-500">A Career Rebirth.</span></h2>
                  <p className="text-slate-400 text-xl leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6 font-medium">
                      "I spent 4 years in University learning Data Science. In 4 weeks at Nexus, I built an Agentic AI system that now handles the data entry for a $10M logistics firm. My starting salary jumped from $1k to $5k monthly."
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                      <img src="https://i.pravatar.cc/100?u=ibrahim" className="w-16 h-16 rounded-full border-2 border-blue-500" />
                      <div>
                          <div className="text-white font-black text-lg">Ibrahim K.</div>
                          <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Nexus Alumnus, Lead Automation at Z-Tech</div>
                      </div>
                  </div>
              </div>
              <div className="bg-slate-900 p-12 rounded-[3rem] border border-blue-900/20 shadow-inner">
                  <h3 className="text-2xl font-black text-white mb-6 italic uppercase tracking-wider">Our 4-Pillar Roadmap</h3>
                  <div className="space-y-8">
                      <RoadmapItem step="01" title="AI Assessment" desc="Pinpoint your skill gaps with our custom LLM-powered diagnostic tool." />
                      <RoadmapItem step="02" title="Foundation Mastery" desc="Data cleaning, SQL, and advanced logic for automation." />
                      <RoadmapItem step="03" title="Agentic Engineering" desc="Build AI agents that use tools like Make.com and Zapier." />
                      <RoadmapItem step="04" title="Cohort Project" desc="Build a real production system for a partner agency." />
                  </div>
              </div>
          </div>
      </section>

      {/* Normal Distribution Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <NormalDistribution />
        </div>
      </section>

      {/* Consultants & Faculty */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 italic">Meet Your Architects</h2>
          <p className="text-slate-500 text-lg font-medium">We don't just teach; we consult for the world's biggest brands.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <TutorCard 
            name="Dr. Sarah Chen"
            role="Chief Architect, Nexus"
            image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600"
            bio="The primary architect behind 200+ enterprise automations. Sarah teaches you how to think in systems."
          />
          <TutorCard 
            name="James Olumide"
            role="Lead Consultant"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
            bio="Agentic AI specialist. James has a track record of reducing operational costs by $5M for Nigerian startups."
          />
          <TutorCard 
            name="Elena Rodriguez"
            role="Analytics Lead"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600"
            bio="Turning raw data into billions. Elena is the master of Power BI and complex workflow logic."
          />
        </div>
      </section>

      {/* Pricing / Final Funnel */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-16 md:p-32 rounded-[4rem] border border-blue-400 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.5)] relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic">Ready to Lead?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Applications for the <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full font-black">{getNextCohort()} Cohort</span> are now open. Only 50 spots available for 8 weeks of intensive mastery.
          </p>
          
          <div className="flex flex-col items-center">
             <div className="bg-slate-950 p-10 rounded-[3rem] text-left w-full max-w-md shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs rotate-6">SECURE SPOT</div>
                <div className="text-6xl font-black text-white my-4">$50</div>
                <p className="text-blue-400 text-sm mb-8 font-bold italic">Includes lifetime access to Nexus Study CRM.</p>
                <button 
                  onClick={handleApply}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all mb-4 shadow-xl shadow-blue-600/20"
                >
                   Apply & Secure Spot
                </button>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-bold"><Check size={16} className="text-blue-500" /> 8 Weeks Intensive Training</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-bold"><Check size={16} className="text-blue-500" /> Job Placement Assistance</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-bold"><Check size={16} className="text-blue-500" /> Installment Options Available</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form (Academy Version) */}
      <section id="enroll" className="max-w-7xl mx-auto px-4 py-16 mb-20 scroll-mt-24">
        <div className="bg-slate-900 border border-blue-900/20 rounded-[3rem] p-10 lg:p-16 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-white mb-6 italic">Enrollment Inquiry</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                Not ready to pay yet? Use this form to make an inquiry. Our admissions team will reach out to discuss the curriculum, career outcomes, or payment plans.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-4 text-white font-black bg-slate-950/50 p-4 rounded-xl border border-blue-500/10 uppercase italic tracking-wider">
                    <Mail className="text-blue-500" /> academy@nexusai.com
                 </div>
              </div>
            </div>
            <div className="bg-black/40 rounded-[2.5rem] h-[550px] border border-blue-500/10 relative overflow-hidden group">
               <iframe 
                src="https://form.typeform.com/to/placeholder" 
                title="Nexus Academy Inquiry Form"
                className="w-full h-full rounded-[2.5rem] border-none grayscale opacity-20"
               ></iframe>
               <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95 z-10 p-10 text-center">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                      <Mail size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-wider">Admissions Inquiry</h3>
                    <p className="text-slate-400 font-bold text-sm">Please use this for questions only.</p>
                    <button onClick={() => window.location.reload()} className="bg-blue-600 text-white px-8 py-3 rounded-full font-black text-sm uppercase">Open Inquiry Portal</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RoadmapItem = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
    <div className="flex gap-6 group cursor-default">
        <div className="text-4xl font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase italic">{step}</div>
        <div>
            <h4 className="text-xl font-black text-white mb-2 italic uppercase">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
        </div>
    </div>
);

const TutorCard = ({ name, role, image, bio }: { name: string, role: string, image: string, bio: string }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-square border border-blue-500/10">
      <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" alt={name} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8">
        <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter">{name}</h4>
        <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">{role}</p>
      </div>
    </div>
    <p className="text-slate-400 leading-relaxed px-4 font-medium">{bio}</p>
  </div>
);

export default Academy;
