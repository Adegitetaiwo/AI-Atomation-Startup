
import React from 'react';

const FloatingIcons: React.FC = () => {
  // Uniform size for all icons to ensure visual consistency
  const baseSize = "w-14 h-14";
  const containerClass = "bg-white rounded-2xl flex items-center justify-center shadow-xl border border-slate-100 p-3 hover:scale-110 transition-transform duration-500";

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Zapier Icon - Standardized size */}
      <div className="absolute top-[15%] left-[10%] floating" style={{ animationDelay: '0s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg" 
            alt="Zapier" 
            className="w-full h-full object-contain"
           />
        </div>
      </div>

      {/* Microsoft Power Automate Icons */}
      <div className="absolute bottom-[35%] right-[10%] floating" style={{ animationDelay: '1s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://img.icons8.com/?size=100&id=kTTt25v6Drpd&format=png&color=000000" 
            alt="Slack" 
            className="w-full h-full object-contain" 
           />
        </div>
      </div>

      {/* Gmail Icon - Standardized size */}
      <div className="absolute bottom-[20%] left-[18%] floating" style={{ animationDelay: '4s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" 
            alt="Gmail" 
            className="w-full h-full object-contain" 
           />
        </div>
      </div>

      {/* Slack Icon - Moved to a unique position to prevent overlapping with other icons */}
      <div className="absolute bottom-[35%] right-[10%] floating" style={{ animationDelay: '1s' }}>
        <div className={`${baseSize} ${containerClass}`}>
           <img 
            src="https://www.vectorlogo.zone/logos/slack/slack-icon.svg" 
            alt="Slack" 
            className="w-full h-full object-contain" 
           />
        </div>
      </div>

    </div>
  );
};

export default FloatingIcons;
