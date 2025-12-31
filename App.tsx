
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router';
import Home from './pages/Home';
import Academy from './pages/Academy';
import CursorEffect from './components/CursorEffect';
import { Menu, X, Rocket, GraduationCap, Layout, Youtube } from 'lucide-react';

// ScrollToTop component to reset scroll position on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/', icon: <Rocket size={18} /> },
    { name: 'Academy', path: '/academy', icon: <GraduationCap size={18} /> },
  ];

  const handleConsultClick = () => {
    const element = document.getElementById('consult');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#/';
      setTimeout(() => {
        document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Layout className="text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tighter text-white">
                NEXUS<span className="text-blue-500">AI</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 transition-transform hover:scale-105"
              >
                <Youtube size={18} />
                <span>Tutorials</span>
              </a>
              <button 
                onClick={handleConsultClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/30"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-blue-900/30 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-blue-900/20"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 border-t border-blue-900/20 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="text-2xl font-bold mb-4">NEXUS<span className="text-blue-500">AI</span></div>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        Revolutionizing business processes through AI and Workflow Automation.
      </p>
      <div className="flex justify-center space-x-6 text-slate-400">
        <a href="#" className="hover:text-blue-400">Services</a>
        <a href="#" className="hover:text-blue-400">Academy</a>
        <a href="#" className="hover:text-blue-400">YouTube</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </div>
      <p className="mt-8 text-slate-600 text-sm">© 2024 NexusAI Solutions. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <ScrollToTop />
        <CursorEffect />
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
