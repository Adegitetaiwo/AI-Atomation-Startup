
import React from 'react';

const FloatingIcons: React.FC = () => {
  const baseSize = "w-14 h-14";
  const containerClass = "bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-100 p-3 hover:scale-110 transition-transform duration-500";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Zapier Icon - Updated with requested PNG logo */}
      <div className="absolute top-[12%] left-[10%] floating" style={{ animationDelay: '0s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://1000logos.net/wp-content/uploads/2022/09/Zapier-Logo-500x281.png" 
            alt="Zapier" 
            className="w-full h-full object-contain"
           />
        </div>
      </div>

      {/* n8n Icon - Brand link */}
      <div className="absolute top-[22%] right-[12%] floating" style={{ animationDelay: '2.5s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://n8n.io/brandguidelines/logo-dark.svg" 
            alt="n8n" 
            className="w-full h-full object-contain"
           />
        </div>
      </div>

      {/* Gmail Icon - Requested Icons8 link */}
      <div className="absolute top-[48%] left-[6%] floating" style={{ animationDelay: '1.2s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" 
            alt="Gmail" 
            className="w-full h-full object-contain"
           />
        </div>
      </div>

      {/* Microsoft Power Automate Icon - Requested Icons8 link */}
      <div className="absolute bottom-[22%] left-[18%] floating" style={{ animationDelay: '4s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://img.icons8.com/?size=100&id=kTTt25v6Drpd&format=png&color=000000" 
            alt="Power Automate" 
            className="w-full h-full object-contain" 
           />
        </div>
      </div>

      {/* Slack Icon */}
      <div className="absolute bottom-[32%] right-[10%] floating" style={{ animationDelay: '1.8s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" 
            alt="Slack" 
            className="w-full h-full object-contain" 
           />
        </div>
      </div>
    </div>
  );
};

export default FloatingIcons;
