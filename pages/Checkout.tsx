
import React, { useState, useMemo } from 'react';
import { CreditCard, CheckCircle2, ShieldCheck, ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

interface CheckoutProps {
  user: any;
  onUpdateUser: (user: any) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ user, onUpdateUser }) => {
  const [paymentPlan, setPaymentPlan] = useState<'full' | 'part'>('full');
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const paymentId = useMemo(() => `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, [paymentPlan]);

  const handlePayment = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      
      // 1. Update session state
      const updatedUser = { ...user, paid: true };
      
      // 2. Persist back to our "Local Database"
      const usersRaw = localStorage.getItem('csuit_db_users');
      if (usersRaw) {
        const users = JSON.parse(usersRaw);
        const updatedUsers = users.map((u: any) => 
          u.email === user.email ? { ...u, paid: true } : u
        );
        localStorage.setItem('csuit_db_users', JSON.stringify(updatedUsers));
      }

      onUpdateUser(updatedUser);
      setStep(2);
    }, 2500);
  };

  const handleFinish = () => {
    navigate('/crm');
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
           <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30">
              <CheckCircle2 size={48} className="text-white" />
           </div>
           <div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter font-display">Enrollment Complete</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Welcome to the Jan '26 Csuit Elite Cohort, {user?.name || 'Student'}.</p>
           </div>
           <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-blue-500/20 p-6 rounded-3xl text-left">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400 text-sm font-bold uppercase">Enrollment ID</span>
                <span className="text-slate-900 dark:text-white font-black">CS-2026-9482</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-400 text-sm font-bold uppercase">Payment Ref</span>
                <span className="text-blue-600 font-bold font-mono text-xs">{paymentId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm font-bold uppercase">Status</span>
                <span className="text-green-600 font-black">VERIFIED ACCESS</span>
              </div>
           </div>
           <button 
             onClick={handleFinish}
             className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl"
           >
             Go to Study CRM
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <Link to="/academy" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white font-bold transition-colors">
            <ArrowLeft size={18} /> Back to Academy
          </Link>
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-2xl border border-slate-200 dark:border-blue-500/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Session as </span>
            <span className="text-slate-900 dark:text-white font-black text-xs uppercase tracking-tighter">{user.email}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter font-display leading-none">Cohort Enrollment</h1>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest font-display">1. Payment Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setPaymentPlan('full')}
                  className={`p-6 rounded-3xl border-2 transition-all text-left ${paymentPlan === 'full' ? 'bg-blue-600/5 border-blue-600' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-black text-slate-900 dark:text-white text-lg">Full Payment</span>
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentPlan === 'full' ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}></div>
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">$50</div>
                  <p className="text-slate-500 text-xs font-medium">One-time payment for full cohort access.</p>
                </button>

                <button 
                  onClick={() => setPaymentPlan('part')}
                  className={`p-6 rounded-3xl border-2 transition-all text-left ${paymentPlan === 'part' ? 'bg-blue-600/5 border-blue-600' : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-black text-slate-900 dark:text-white text-lg">Installments</span>
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentPlan === 'part' ? 'border-blue-600 bg-blue-600' : 'border-slate-300'}`}></div>
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">$30 <span className="text-sm text-slate-500">/ mo</span></div>
                  <p className="text-slate-500 text-xs font-medium">Split over 2 monthly payments.</p>
                </button>
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-slate-100 dark:border-slate-900">
               <h3 className="text-xl font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest font-display">2. Secure Gateway</h3>
               <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-blue-500/10">
                  <div className="flex items-center justify-between mb-8">
                    <img src="https://payaza.com/wp-content/uploads/2021/11/Payaza_logo-01.png" className="h-6 grayscale dark:invert opacity-80" alt="Payaza" />
                    <CreditCard className="text-slate-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <input type="text" placeholder="Cardholder Name" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-blue-600 font-bold" />
                    <input type="text" placeholder="Card Number" className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-blue-600 font-bold" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-blue-600 font-bold" />
                      <input type="text" placeholder="CVV" className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-slate-900 dark:text-white outline-none focus:border-blue-600 font-bold" />
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-32 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-blue-500/20 p-10 space-y-8 shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase font-display">Order Summary</h3>
              <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Csuit Academy Cohort</span>
                  <span className="text-slate-900 dark:text-white font-black">$50.00</span>
                </div>
                {paymentPlan === 'part' && (
                  <div className="flex justify-between items-center text-blue-600">
                    <span className="font-bold uppercase tracking-widest text-[10px]">Installment Balance</span>
                    <span className="font-black">-$20.00</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Study Portal Access</span>
                  <span className="text-green-600 font-black">COMPLIMENTARY</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-3xl font-black text-slate-900 dark:text-white tracking-tighter">
                <span>TOTAL</span>
                <span>${paymentPlan === 'full' ? '50.00' : '30.00'}</span>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3"
              >
                {isProcessing ? <Loader2 className="animate-spin" /> : 'Pay via Payaza'}
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} className="text-blue-600" /> AES-256 Encrypted Gateway
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
