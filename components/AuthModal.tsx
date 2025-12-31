
import React, { useState } from 'react';
import { X, Mail, Lock, Layout, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onAuth: (user: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth({ email, name: email.split('@')[0] });
  };

  const handleGoogleAuth = () => {
    // Mocking Google Sign-In
    onAuth({ email: 'user@gmail.com', name: 'Google User', provider: 'google' });
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="w-full max-w-md bg-slate-900 border border-blue-500/20 rounded-[3rem] p-10 relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
            <Layout className="text-white" />
          </div>
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">
            {isLogin ? 'Sign In' : 'Create Account'}
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Nexus Study CRM Access</p>
        </div>

        <div className="space-y-6">
          <button 
            onClick={handleGoogleAuth}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 py-3.5 rounded-2xl font-black transition-all shadow-xl"
          >
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="h-5" alt="Google" />
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-slate-900 px-4 text-slate-600 font-black">OR</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-600 transition-all font-bold" 
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 p-4 pl-12 rounded-2xl text-white outline-none focus:border-blue-600 transition-all font-bold" 
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group">
              {isLogin ? 'Enter CRM' : 'Register Account'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-500 hover:text-blue-400 text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
