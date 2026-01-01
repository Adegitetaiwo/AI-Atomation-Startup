
import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, ArrowRight, Star, Calendar, Check, Play, Quote, Mail, Sparkles, Brain, X, Linkedin, Twitter, Globe } from 'lucide-react';
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

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Senior Data Analyst at Standard Chartered",
      content: "Csuit changed my perspective on automation. I don't just build dashboards anymore; I build agents that act on the data.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David O.",
      role: "Workflow Engineer at MTN",
      content: "The Make.com masterclass alone paid for the course. I've automated 60% of my team's reporting since graduating.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Chidi E.",
      role: "Operations Lead at Dangote Group",
      content: "The level of logic routing taught here is enterprise-grade. It's the only AI course I've seen that actually focuses on production systems.",
      avatar: "https://i.pravatar.cc/150?u=chidi"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Elena Vance",
      role: "Head of Agentic Systems",
      bio: "Former lead at OpenAI's logistics research team. Elena specializes in multi-agent orchestration.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400"
    },
    {
      name: "Marcus Thorne",
      role: "Chief Automation Architect",
      bio: "An n8n and Make.com veteran who has deployed over 500+ enterprise workflows globally.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
    },
    {
      name: "Sofia Diallo",
      role: "Director of Data Analytics",
      bio: "Specialist in predictive modeling and SQL architecture. Sofia bridges the gap between raw data and AI agents.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400"
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
    <div className="bg-white dark:bg-slate-950">
      {/* Header Carousel */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        {carouselImages.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>
            <img src={img.url} className="w-full h-full object-cover opacity-70" alt={img.title} />
            <div className="absolute inset-0 flex items-center z-20 px-8 md:px-24">
              <div className="max-w-3xl">
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none font-display">
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
      </section>

      {/* Assessment Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-blue-500/20 overflow-hidden relative shadow-2xl">
            <button onClick={() => setShowQuiz(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 dark:hover:text-white z-10 p-2">
              <X size={24} />
            </button>
            <AssessmentQuiz onComplete={() => {}} onStartCheckout={handleApply} />
          </div>
        </div>
      )}

      {/* Looping Logos */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 overflow-hidden border-y border-slate-200 dark:border-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
            <h3 className="text-slate-500 text-sm font-bold uppercase tracking-[0.3em]">Where Our Alumni Lead</h3>
        </div>
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="mx-16 text-3xl font-black text-slate-300 dark:text-slate-700/50 hover:text-blue-600 dark:hover:text-blue-500/80 transition-colors cursor-default">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                  <h2 className="text-5xl font-black text-slate-900 dark:text-white mb-8 font-display uppercase">Not Just Another Course. <br /><span className="text-blue-600 dark:text-blue-500">A Career Rebirth.</span></h2>
                  <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-8 border-l-4 border-blue-600 pl-6 font-medium">
                      "I spent 4 years in University learning Data Science. In 4 weeks at Csuit, I built an Agentic AI system that now handles the data entry for a $10M logistics firm."
                  </p>
                  <div className="flex items-center gap-4">
                      <img src="https://i.pravatar.cc/100?u=ibrahim" className="w-16 h-16 rounded-full border-2 border-blue-600" />
                      <div>
                          <div className="text-slate-900 dark:text-white font-black text-lg">Ibrahim K.</div>
                          <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">Csuit Alumnus, Lead Automation Consultant</div>
                      </div>
                  </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-200 dark:border-blue-900/20 shadow-inner">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-wider font-display">Our 4-Pillar Roadmap</h3>
                  <div className="space-y-8">
                      <RoadmapItem step="01" title="AI Assessment" desc="Pinpoint your skill gaps with our custom diagnostic tool." />
                      <RoadmapItem step="02" title="Foundation Mastery" desc="Data cleaning, SQL, and advanced logic for automation." />
                      <RoadmapItem step="03" title="Agentic Engineering" desc="Build AI agents that use tools like Make.com and Zapier." />
                      <RoadmapItem step="04" title="Cohort Project" desc="Build a real production system for a partner agency." />
                  </div>
              </div>
          </div>
      </section>

      {/* Meet the Architects (Team Section) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 font-display">Meet the Architects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              Join a cohort led by world-class engineers who don't just teach—they deploy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, i) => (
              <div key={i} className="group bg-white dark:bg-slate-950 p-6 rounded-[2.5rem] border border-slate-200 dark:border-blue-500/10 hover:border-blue-600 transition-all shadow-xl">
                <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-[4/5]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <Linkedin className="text-white hover:text-blue-400 cursor-pointer" size={20} />
                      <Twitter className="text-white hover:text-blue-400 cursor-pointer" size={20} />
                      <Globe className="text-white hover:text-blue-400 cursor-pointer" size={20} />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight font-display">{member.name}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Hall of Fame (Testimonials Section) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4 font-display">Alumni Hall of Fame</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Hear from the graduates who are already dominating the AI adoption curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-blue-500/5 relative">
              <Quote className="absolute top-6 right-8 text-blue-600/10" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-blue-600 text-blue-600" />)}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} className="w-12 h-12 rounded-full border-2 border-blue-600" alt={t.name} />
                <div>
                  <div className="text-slate-900 dark:text-white font-black text-sm">{t.name}</div>
                  <div className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Normal Distribution Section */}
      <section className="py-24">
        <NormalDistribution />
      </section>

      {/* Pricing Funnel */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-16 md:p-32 rounded-[4rem] border border-blue-400 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)] relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase font-display">Ready to Lead?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Applications for the <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full font-black">{getNextCohort()} Cohort</span> are now open.
          </p>
          
          <div className="flex flex-col items-center">
             <div className="bg-white dark:bg-slate-950 p-10 rounded-[3rem] text-left w-full max-w-md shadow-2xl relative">
                <div className="text-6xl font-black text-slate-900 dark:text-white my-4">$50</div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-8 font-bold">Includes lifetime access to Csuit Study CRM.</p>
                <button 
                  onClick={handleApply}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all mb-4 shadow-xl"
                >
                   Apply & Secure Spot
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RoadmapItem = ({ step, title, desc }: { step: string, title: string, desc: string }) => (
    <div className="flex gap-6 group cursor-default">
        <div className="text-4xl font-black text-slate-300 dark:text-slate-800 group-hover:text-blue-600 transition-colors uppercase">{step}</div>
        <div>
            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase font-display">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
        </div>
    </div>
);

export default Academy;
