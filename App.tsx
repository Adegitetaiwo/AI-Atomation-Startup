
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Checkout from './pages/Checkout';
import StudyCRM from './pages/StudyCRM';
import CursorEffect from './components/CursorEffect';
import AuthModal from './components/AuthModal';
import { Menu, X, Rocket, GraduationCap, Layout, Youtube, User, LogOut, Sun, Moon } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = ({ user, onLogout, onOpenAuth, theme, onToggleTheme }: { 
  user: any, 
  onLogout: () => void, 
  onOpenAuth: () => void,
  theme: string,
  onToggleTheme: () => void
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/', icon: <Rocket size={18} /> },
    { name: 'Academy', path: '/academy', icon: <GraduationCap size={18} /> },
  ];

  if (user && user.paid) {
    navLinks.push({ name: 'Study CRM', path: '/crm', icon: <Layout size={18} /> });
  }

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200 dark:border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Layout className="text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                CSUIT<span className="text-blue-500">AI</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-bold transition-colors ${
                    location.pathname === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <button 
                onClick={onToggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 transition-transform hover:scale-105"
              >
                <Youtube size={18} />
                <span>Tutorials</span>
              </a>

              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-blue-500/20">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-black text-white">
                      {user.email[0].toUpperCase()}
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{user.email.split('@')[0]}</span>
                    {user.paid && <span className="bg-green-500/20 text-green-600 dark:text-green-400 text-[8px] px-1.5 py-0.5 rounded font-black uppercase">Paid</span>}
                  </div>
                  <button onClick={onLogout} className="text-slate-400 hover:text-red-500 transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={onOpenAuth}
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-bold text-sm"
                >
                  <User size={18} />
                  <span>Sign In</span>
                </button>
              )}

              <button 
                onClick={handleConsultClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-black transition-all shadow-lg shadow-blue-600/30"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={onToggleTheme} className="text-slate-600 dark:text-slate-400">
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
             </button>
             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300">
               {isOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-blue-900/30 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-blue-900/20"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {!user && (
             <button 
              onClick={() => { setIsOpen(false); onOpenAuth(); }}
              className="w-full text-left flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-blue-900/20"
            >
              <User size={18} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-blue-900/20 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="text-2xl font-black mb-4 text-slate-900 dark:text-white uppercase tracking-tighter">CSUIT<span className="text-blue-500">AI</span></div>
      <p className="text-slate-500 dark:text-slate-500 mb-8 max-w-md mx-auto font-medium">
        Revolutionizing business processes through AI and Workflow Automation.
      </p>
      <div className="flex justify-center space-x-6 text-slate-600 dark:text-slate-400 font-bold text-sm">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Solutions</Link>
        <Link to="/academy" className="hover:text-blue-600 dark:hover:text-blue-400">Academy</Link>
        <a href="https://youtube.com" className="hover:text-blue-600 dark:hover:text-blue-400">Tutorials</a>
      </div>
      <p className="mt-8 text-slate-400 dark:text-slate-600 text-xs font-black uppercase tracking-widest">© 2024 CsuitAI Solutions. All rights reserved.</p>
    </div>
  </footer>
);

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedUser = localStorage.getItem('csuit_user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedTheme = localStorage.getItem('csuit_theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.className = nextTheme;
    localStorage.setItem('csuit_theme', nextTheme);
  };

  const handleLogin = (userData: any) => {
    setUser(userData);
    localStorage.setItem('csuit_user', JSON.stringify(userData));
    setIsAuthOpen(false);
  };

  const handleUpdateUser = (updatedUser: any) => {
    setUser(updatedUser);
    localStorage.setItem('csuit_user', JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('csuit_user');
    window.location.href = '#/';
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <ScrollToTop />
        <CursorEffect />
        <Navbar 
          user={user} 
          onLogout={handleLogout} 
          onOpenAuth={() => setIsAuthOpen(true)} 
          theme={theme}
          onToggleTheme={toggleTheme}
        />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academy" element={<Academy user={user} onOpenAuth={() => setIsAuthOpen(true)} />} />
            <Route 
                path="/checkout" 
                element={user ? <Checkout user={user} onUpdateUser={handleUpdateUser} /> : <Navigate to="/academy" />} 
            />
            <Route 
                path="/crm" 
                element={user && user.paid ? <StudyCRM user={user} /> : <Navigate to="/academy" />} 
            />
          </Routes>
        </main>
        <Footer />
        {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} onAuth={handleLogin} />}
      </div>
    </HashRouter>
  );
}
