
import React from 'react';
import { Users, GraduationCap, ArrowRight, Star, Calendar, Check, Play, Quote } from 'lucide-react';
import NormalDistribution from '../components/NormalDistribution';

const Academy: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
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

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30">
                    JOIN THE COHORT
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold transition-all border border-white/10 flex items-center gap-2 justify-center">
                    <Play size={20} fill="currentColor" /> Watch Trailer
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

      {/* Story: The Nexus Philosophy */}
      <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                  <h2 className="text-5xl font-black text-white mb-8">Not Just Another Course. <br /><span className="text-blue-500">A Career Rebirth.</span></h2>
                  <p className="text-slate-400 text-xl leading-relaxed mb-8 italic border-l-4 border-blue-600 pl-6">
                      "I spent 4 years in University learning Data Science. In 4 weeks at Nexus, I built an Agentic AI system that now handles the data entry for a $10M logistics firm. My starting salary jumped from $1k to $5k monthly."
                  </p>
                  <div className="flex items-center gap-4 mb-8">
                      <img src="https://i.pravatar.cc/100?u=ibrahim" className="w-16 h-16 rounded-full border-2 border-blue-500" />
                      <div>
                          <div className="text-white font-bold text-lg">Ibrahim K.</div>
                          <div className="text-slate-500">Nexus Alumnus, Lead Automation at Z-Tech</div>
                      </div>
                  </div>
              </div>
              <div className="bg-slate-900 p-12 rounded-[3rem] border border-blue-900/20 shadow-inner">
                  <h3 className="text-2xl font-bold text-white mb-6">Our 4-Pillar Roadmap</h3>
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
          <p className="text-slate-500 text-lg">We don't just teach; we consult for the world's biggest brands.</p>
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

      {/* Success Story / Alumni Spotlight */}
      <section className="py-32 bg-slate-900/60 border-y border-blue-900/10">
          <div className="max-w-7xl mx-auto px-4">
              <div className="bg-slate-950 p-12 rounded-[4rem] border border-blue-500/20 grid lg:grid-cols-2 gap-16 items-center shadow-2xl relative">
                  <div className="absolute -top-10 -right-10 opacity-10"><Quote size={200} className="text-blue-500" /></div>
                  <div className="relative z-10">
                      <span className="bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8 inline-block">Alumni Spotlight</span>
                      <h3 className="text-4xl font-black text-white mb-6 leading-tight">From Office Assistant to $4,000/mo Automation Consultant.</h3>
                      <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                          "I was stuck in a dead-end admin job. I knew I wanted tech, but coding felt too slow. Nexus taught me how to use Make.com and AI to build solutions that businesses actually pay for. I landed my first consultant gig 2 weeks before graduation."
                      </p>
                      <div className="grid grid-cols-2 gap-8 mb-8">
                          <div>
                              <div className="text-blue-500 text-3xl font-black">350%</div>
                              <div className="text-slate-500 text-sm font-bold uppercase">Income Jump</div>
                          </div>
                          <div>
                              <div className="text-blue-500 text-3xl font-black">2 Weeks</div>
                              <div className="text-slate-500 text-sm font-bold uppercase">To Employment</div>
                          </div>
                      </div>
                      <button className="text-white font-black flex items-center gap-3 group">
                         Apply for Next Cohort <ArrowRight className="group-hover:translate-x-2 transition-all text-blue-500" />
                      </button>
                  </div>
                  <div className="relative">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" className="rounded-[3rem] w-full h-[500px] object-cover shadow-2xl" alt="Success Story" />
                      <div className="absolute bottom-8 left-8 bg-blue-600 p-6 rounded-3xl shadow-xl">
                          <div className="text-white font-black text-xl">Samuel T.</div>
                          <div className="text-blue-200 text-sm font-bold italic">Class of 2023</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Pricing / Final Funnel */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-16 md:p-32 rounded-[4rem] border border-blue-400 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.5)] relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 italic">Ready to Lead?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Applications for the <span className="bg-white text-blue-600 px-3 py-1 rounded font-bold">September Cohort</span> are now open. Only 50 spots available to ensure high-touch mentorship.
          </p>
          
          <div className="flex flex-col items-center">
             <div className="bg-slate-950 p-10 rounded-[3rem] text-left w-full max-w-md shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs rotate-6">LIMITED SLOTS</div>
                <div className="text-slate-500 line-through text-sm">Regular Admission: $1,499</div>
                <div className="text-6xl font-black text-white my-4">$499</div>
                <p className="text-blue-400 text-sm mb-8 font-bold italic">Includes lifetime access to AI Study CRM.</p>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all mb-4 shadow-xl shadow-blue-600/20">
                   Apply & Secure Spot
                </button>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm"><Check size={16} className="text-blue-500" /> 12 Weeks Intensive Training</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm"><Check size={16} className="text-blue-500" /> 1:1 Strategy Sessions</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm"><Check size={16} className="text-blue-500" /> Job Placement Assistance</div>
                </div>
             </div>
             
             <div className="mt-12">
                <button className="text-white font-bold underline underline-offset-8 hover:text-blue-200 transition-all text-lg">
                   Book a 1:1 Consultation with a Consultant first
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
        <div className="text-4xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{step}</div>
        <div>
            <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TutorCard = ({ name, role, image, bio }: { name: string, role: string, image: string, bio: string }) => (
  <div className="group">
    <div className="relative overflow-hidden rounded-[3rem] mb-8 aspect-square">
      <img src={image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" alt={name} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8">
        <h4 className="text-3xl font-black text-white italic">{name}</h4>
        <p className="text-blue-500 font-bold uppercase tracking-widest text-xs">{role}</p>
      </div>
    </div>
    <p className="text-slate-400 leading-relaxed px-4">{bio}</p>
  </div>
);

export default Academy;
