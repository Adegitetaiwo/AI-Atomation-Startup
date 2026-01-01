
import React, { useState, useEffect } from 'react';
import { X, Mail, Lock, Layout, ArrowRight, AlertCircle, Check } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onAuth: (user: any) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ onClose, onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showGoogleSim, setShowGoogleSim] = useState(false);

  useEffect(() => {
    setError('');
  }, [isLogin]);

  const getUsersFromDB = () => {
    const users = localStorage.getItem('csuit_db_users');
    return users ? JSON.parse(users) : [];
  };

  const saveUserToDB = (user: any) => {
    const users = getUsersFromDB();
    const index = users.findIndex((u: any) => u.email === user.email);
    if (index > -1) {
      users[index] = user;
    } else {
      users.push(user);
    }
    localStorage.setItem('csuit_db_users', JSON.stringify(users));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const users = getUsersFromDB();

    if (isLogin) {
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        onAuth(user);
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } else {
      const exists = users.find((u: any) => u.email === email);
      if (exists) {
        setError('An account with this email already exists.');
        return;
      }
      
      const newUser = { 
        email, 
        password, 
        name: email.split('@')[0], 
        paid: false,
        id: Math.random().toString(36).substr(2, 9)
      };
      saveUserToDB(newUser);
      onAuth(newUser);
    }
  };

  const handlePickSimulatedAccount = (accEmail: string, name: string) => {
    const users = getUsersFromDB();
    let user = users.find((u: any) => u.email === accEmail);
    
    if (!user) {
      user = { 
        email: accEmail, 
        name: name, 
        paid: false, 
        provider: 'google',
        id: `google-${Math.random().toString(36).substr(2, 5)}`
      };
      saveUserToDB(user);
    }
    onAuth(user);
  };

  if (showGoogleSim) {
    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setShowGoogleSim(false)}></div>
        <div className="w-full max-w-sm bg-white rounded-3xl p-8 relative z-10 animate-in fade-in zoom-in duration-300">
          <div className="text-center mb-8">
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="h-10 mx-auto mb-4" alt="Google" />
            <h3 className="text-xl font-bold text-slate-900">Sign in with Google</h3>
            <p className="text-slate-500 text-sm mt-1">to continue to CsuitAI</p>
          </div>
          
          <div className="space-y-3">
            {[
              { email: 'alex.worker@gmail.com', name: 'Alex Worker' },
              { email: 'j.doe.dev@gmail.com', name: 'John Doe' }
            ].map((acc) => (
              <button 
                key={acc.email}
                onClick={() => handlePickSimulatedAccount(acc.email, acc.name)}
                className="w-full flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors text-left border border-slate-100"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {acc.name[0]}
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-bold text-slate-900 text-sm truncate">{acc.name}</div>
                  <div className="text-slate-500 text-xs truncate">{acc.email}</div>
                </div>
              </button>
            ))}
            <button 
              onClick={() => setShowGoogleSim(false)}
              className="w-full py-3 text-slate-500 text-sm font-bold hover:bg-slate-50 rounded-2xl transition-colors"
            >
              Use another account
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-8 text-center px-4 leading-relaxed">
            To continue, Google will share your name, email address, language preference, and profile picture with CsuitAI.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-blue-500/20 rounded-[3rem] p-10 relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/20">
            <Layout className="text-white" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter font-display">
            {isLogin ? 'Sign In' : 'Join CsuitAI'}
          </h2>
          <p className="text-slate-500 text-xs mt-2 font-bold uppercase tracking-widest">Enterprise Access Portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-2xl flex items-start gap-3 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle size={18} className="shrink-0" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        <div className="space-y-6">
          <button 
            onClick={() => setShowGoogleSim(true)}
            className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 dark:bg-white dark:hover:bg-slate-100 text-slate-900 py-3.5 rounded-2xl font-black transition-all border border-slate-200 dark:border-none shadow-sm"
          >
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" className="h-5" alt="Google" />
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white dark:bg-slate-900 px-4 text-slate-400 dark:text-slate-600 font-black">OR</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 pl-12 rounded-2xl text-slate-900 dark:text-white outline-none focus:border-blue-600 transition-all font-bold" 
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 pl-12 rounded-2xl text-slate-900 dark:text-white outline-none focus:border-blue-600 transition-all font-bold" 
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group">
              {isLogin ? 'Enter Workspace' : 'Create Account'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 text-xs font-black uppercase tracking-widest transition-colors"
            >
              {isLogin ? "New to Csuit? Register" : "Have an account? Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
