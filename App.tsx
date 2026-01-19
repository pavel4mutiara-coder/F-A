
import React, { useState } from 'react';
import InvitationCard from './components/InvitationCard';
import { INVITATION_DATA } from './constants';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState<'bn' | 'en'>('en');

  const handleCopyText = () => {
    const content = INVITATION_DATA[language];
    const text = language === 'en' ? 
    `Wedding Invitation: ${content.bride.name} & ${content.groom.name}
Date: ${content.event.date}
Venue: ${content.event.venue}
Requesting the honor of your presence.` :
    `বিবাহের আমন্ত্রণ: ${content.bride.name} ও ${content.groom.name}
তারিখ: ${content.event.date}
স্থান: ${content.event.venue}
আপনার সদয় উপস্থিতি ও দোয়া কামনা করছি।`;

    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-[#022c22] print:p-0 print:bg-transparent">
      {/* Header - Minimal and Elegant */}
      <div className="no-print mb-6 text-center space-y-4">
        <h1 className={`font-cinzel text-xl gold-text font-bold tracking-[0.2em] opacity-80 uppercase ${language === 'bn' ? 'font-bangla tracking-normal' : ''}`}>
          {language === 'bn' ? 'ফারিহা ও আব্দুল্লাহ এর শুভ বিবাহ' : 'The Wedding of Fariha & Abdullah'}
        </h1>
        
        {/* Language Toggle */}
        <div className="flex justify-center items-center bg-[#064e3b]/50 p-1 rounded-full border border-[#d4af37]/30 shadow-inner max-w-fit mx-auto">
          <button 
            onClick={() => setLanguage('bn')}
            className={`px-6 py-2 rounded-full font-bangla text-sm transition-all duration-300 ${language === 'bn' ? 'bg-[#d4af37] text-[#022c22] font-bold shadow-md' : 'text-[#fef08a] hover:bg-[#d4af37]/10'}`}
          >
            বাংলা
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 rounded-full font-cinzel text-sm transition-all duration-300 ${language === 'en' ? 'bg-[#d4af37] text-[#022c22] font-bold shadow-md' : 'text-[#fef08a] hover:bg-[#d4af37]/10'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Main Preview */}
      <div className="w-full flex justify-center items-center print:m-0">
        <InvitationCard language={language} />
      </div>

      {/* UI Controls - Moved to Bottom */}
      <div className="no-print mt-10 flex flex-wrap gap-4 justify-center items-center">
        <button 
          onClick={handlePrint}
          className={`px-8 py-3 bg-transparent border-2 border-[#d4af37] text-[#fef08a] text-sm uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#022c22] transition-all duration-300 font-bold shadow-lg ${language === 'bn' ? 'font-bangla tracking-normal' : 'font-cinzel'}`}
        >
          {language === 'bn' ? 'প্রিন্ট / সেভ করুন' : 'Print / Save PDF'}
        </button>

        <button 
          onClick={handleCopyText}
          className={`px-8 py-3 bg-transparent border-2 border-[#d4af37] text-[#fef08a] text-sm uppercase tracking-widest hover:bg-[#d4af37] hover:text-[#022c22] transition-all duration-300 min-w-[160px] font-bold shadow-lg ${language === 'bn' ? 'font-bangla tracking-normal' : 'font-cinzel'}`}
        >
          {copied ? (language === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (language === 'bn' ? 'তথ্য কপি করুন' : 'Copy Text Info')}
        </button>
      </div>

      <div className="no-print mt-6 text-[10px] text-[#fef08a] opacity-40 uppercase tracking-[0.3em] font-medium text-center">
        {language === 'bn' ? 'প্রিমিয়াম ডিজিটাল আমন্ত্রণপত্র' : 'Premium Invitation • Digital Edition'}
      </div>

      {/* Footer Info */}
      <div className="no-print mt-12 text-center text-[#fef08a] opacity-30 text-[9px] uppercase tracking-widest font-medium">
        <p>&copy; 2026 Elegant Islamic Invitations | Bride's Family Edition</p>
      </div>
    </div>
  );
};

export default App;
