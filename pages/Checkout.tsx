
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

  // Generate a mock payment ID
  const paymentId = useMemo(() => `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`, [paymentPlan]);

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate Payaza gateway interaction
    setTimeout(() => {
      setIsProcessing(false);
      
      // Update global user state with paid status
      onUpdateUser({ ...user, paid: true });
      
      window.alert("Payment Successful! Reference: " + paymentId + "\n\nYour account has been verified for Study CRM access.");
      setStep(2);
    }, 2500);
  };

  const handleFinish = () => {
    navigate('/crm');
  };

  // View: Success step
  if (step === 2) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
           <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/30">
              <CheckCircle2 size={48} className="text-white" />
           </div>
           <div>
              <h2 className="text-4xl font-black text-white mb-2 italic uppercase">Enrollment Complete!</h2>
              <p className="text-slate-400 font-medium">Welcome to the Jan '26 Nexus Elite Cohort, {user?.name || 'Student'}.</p>
           </div>
           <div className="bg-slate-900 border border-blue-500/20 p-6 rounded-3xl text-left">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-500 text-sm font-bold uppercase">Enrollment ID</span>
                <span className="text-white font-black">NX-2026-9482</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-500 text-sm font-bold uppercase">Payment Ref</span>
                <span className="text-blue-400 font-bold font-mono text-xs">{paymentId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm font-bold uppercase">Status</span>
                <span className="text-green-500 font-black">VERIFIED ACCESS</span>
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
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <Link to="/academy" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors">
            <ArrowLeft size={18} /> Back to Academy
          </Link>
          <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-2xl border border-blue-500/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Authenticated as </span>
            <span className="text-white font-black text-xs uppercase italic tracking-tighter">{user.email}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-8">
            <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter">Cohort Enrollment</h1>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white uppercase italic tracking-widest text-blue-500">1. Select Payment Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <button 
                  onClick={() => setPaymentPlan('full')}
                  className={`p-6 rounded-3xl border-2 transition-all text-left ${paymentPlan === 'full' ? 'bg-blue-600/10 border-blue-500' : 'bg-slate-900 border-slate-800 hover:border-blue-900'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-black text-white text-lg">Full Payment</span>
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentPlan === 'full' ? 'border-blue-500 bg-white' : 'border-slate-700'}`}></div>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">$50</div>
                  <p className="text-slate-400 text-xs font-medium">One-time payment for full 8 weeks access + bonuses.</p>
                </button>

                <button 
                  onClick={() => setPaymentPlan('part')}
                  className={`p-6 rounded-3xl border-2 transition-all text-left ${paymentPlan === 'part' ? 'bg-blue-600/10 border-blue-500' : 'bg-slate-900 border-slate-800 hover:border-blue-900'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-black text-white text-lg">Part Payment</span>
                    <div className={`w-5 h-5 rounded-full border-2 ${paymentPlan === 'part' ? 'border-blue-500 bg-white' : 'border-slate-700'}`}></div>
                  </div>
                  <div className="text-3xl font-black text-white mb-2">$30 <span className="text-sm text-slate-500">/ mo</span></div>
                  <p className="text-slate-400 text-xs font-medium">Split your mastery over 2 months ($60 total).</p>
                </button>
              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-slate-900">
               <h3 className="text-xl font-bold text-white uppercase italic tracking-widest text-blue-500">2. Payment Gateway</h3>
               <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-blue-500/10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <img src="https://payaza.com/wp-content/uploads/2021/11/Payaza_logo-01.png" className="h-6 opacity-80" alt="Payaza" />
                    </div>
                    <div className="flex gap-2 text-slate-500">
                       <CreditCard />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <input type="text" placeholder="Cardholder Name" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-600 transition-all font-bold" />
                    <input type="text" placeholder="Card Number" className="w-full bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-600 transition-all font-bold" />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-600 transition-all font-bold" />
                      <input type="text" placeholder="CVV" className="bg-slate-950 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-blue-600 transition-all font-bold" />
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-32 bg-slate-900 rounded-[3rem] border border-blue-500/20 p-10 space-y-8 shadow-2xl">
              <h3 className="text-2xl font-black text-white italic uppercase">Order Summary</h3>
              <div className="space-y-4 border-b border-slate-800 pb-8">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Elite Cohort (Jan '26)</span>
                  <span className="text-white font-bold">$50.00</span>
                </div>
                {paymentPlan === 'part' && (
                  <div className="flex justify-between items-center text-blue-400">
                    <span className="font-medium">Installment Plan</span>
                    <span className="font-bold">-$20.00</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-medium">CRM Portal Fee</span>
                  <span className="text-green-500 font-bold">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-3xl font-black text-white italic">
                <span>TOTAL</span>
                <span>${paymentPlan === 'full' ? '50.00' : '30.00'}</span>
              </div>

              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin" /> Processing...
                  </>
                ) : (
                  <>Secure Payment via Payaza</>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck size={14} className="text-blue-500" /> AES-256 Encrypted Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
