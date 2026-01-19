
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

  const handlePrint = (e: React.MouseEvent) => {
    e.preventDefault();
    // Using a small timeout ensures any browser UI state settles before blocking print dialog
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'bn' ? 'বিবাহের আমন্ত্রণপত্র' : 'Wedding Invitation',
          text: language === 'bn' ? 'ফারিহা ও আব্দুল্লাহ এর শুভ বিবাহের আমন্ত্রণপত্র' : 'You are cordially invited to the wedding of Fariha & Abdullah',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopyText();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-8 bg-[#022c22] transition-colors duration-500 overflow-x-hidden print:p-0 print:bg-transparent">
      
      {/* Dynamic Header */}
      <div className="no-print w-full max-w-lg mb-8 text-center space-y-6">
        <div className="inline-block px-4 py-1 border border-[#d4af37]/30 rounded-full text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#d4af37]/80 animate-pulse">
          Official Digital Invite
        </div>
        
        <h1 className={`font-cinzel text-lg sm:text-2xl gold-text font-bold tracking-[0.1em] transition-all duration-700 ${language === 'bn' ? 'font-bangla' : ''}`}>
          {language === 'bn' ? 'ফারিহা ও আব্দুল্লাহ' : 'Fariha & Abdullah'}
        </h1>
        
        {/* Modern Switcher */}
        <div className="flex justify-center items-center p-1.5 bg-[#064e3b]/40 rounded-2xl border border-[#d4af37]/20 shadow-xl max-w-fit mx-auto backdrop-blur-sm">
          <button 
            type="button"
            onClick={() => setLanguage('bn')}
            className={`px-6 py-2 rounded-xl text-xs sm:text-sm transition-all duration-500 font-medium ${language === 'bn' ? 'bg-[#d4af37] text-[#022c22] shadow-lg scale-105' : 'text-[#fef08a] hover:bg-[#d4af37]/10'}`}
          >
            বাংলা
          </button>
          <button 
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 rounded-xl text-xs sm:text-sm transition-all duration-500 font-medium ${language === 'en' ? 'bg-[#d4af37] text-[#022c22] shadow-lg scale-105 font-bold' : 'text-[#fef08a] hover:bg-[#d4af37]/10'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Invitation Card Container */}
      <main className="w-full flex justify-center items-center py-4 print:py-0 print:m-0">
        <InvitationCard language={language} />
      </main>

      {/* Interactive Controls */}
      <div className="no-print w-full max-w-md mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          type="button"
          onClick={handlePrint}
          className="flex items-center justify-center px-6 py-4 bg-transparent border border-[#d4af37] text-[#fef08a] hover:bg-[#d4af37] hover:text-[#022c22] transition-all duration-300 rounded-xl group shadow-lg"
        >
          <span className={`text-xs uppercase tracking-widest font-bold ${language === 'bn' ? 'font-bangla' : 'font-cinzel'}`}>
            {language === 'bn' ? 'সেভ করুন (PDF)' : 'Save as PDF'}
          </span>
        </button>

        <button 
          type="button"
          onClick={handleShare}
          className="flex items-center justify-center px-6 py-4 bg-[#d4af37] text-[#022c22] hover:bg-[#fef08a] transition-all duration-300 rounded-xl shadow-lg"
        >
          <span className={`text-xs uppercase tracking-widest font-bold ${language === 'bn' ? 'font-bangla' : 'font-cinzel'}`}>
            {copied ? (language === 'bn' ? 'কপি হয়েছে' : 'Copied!') : (language === 'bn' ? 'শেয়ার করুন' : 'Share Invitation')}
          </span>
        </button>
      </div>

      <div className="no-print mt-6 text-center text-[#fef08a]/60 text-[10px] sm:text-xs">
        {language === 'bn' ? 
          '* PDF হিসেবে সেভ করতে প্রিন্ট অপশনে "Save as PDF" সিলেক্ট করুন' : 
          '* To save as PDF, select "Save as PDF" in the print destination'}
      </div>

      {/* Footer Branding */}
      <footer className="no-print mt-16 text-center space-y-4 pb-12">
        <div className="h-[1px] w-20 bg-[#d4af37]/20 mx-auto" />
        <p className="text-[9px] text-[#fef08a]/40 uppercase tracking-[0.5em] font-medium">
          Digital Invitation Edition 2026
        </p>
        <p className="text-[8px] text-[#fef08a]/20 uppercase tracking-widest">
          Bride's Family Presentation • Sylhet
        </p>
      </footer>
    </div>
  );
};

export default App;
