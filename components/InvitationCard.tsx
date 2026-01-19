
import React from 'react';
import { INVITATION_DATA, BISMILLAH_TEXT } from '../constants';
import { CornerOrnament, GeometricPattern, DecorativeDivider, GeometricBorder, CalligraphyFrame } from './Ornaments';

interface InvitationCardProps {
  language: 'bn' | 'en';
}

const InvitationCard: React.FC<InvitationCardProps> = ({ language }) => {
  const content = INVITATION_DATA[language];
  const { bride, groom, event } = content;
  const isBangla = language === 'bn';

  return (
    <div className="relative w-full max-w-xl mx-auto min-h-[700px] sm:aspect-[9/14] bg-[#022c22] overflow-hidden premium-shadow p-4 sm:p-6 flex flex-col justify-between border-[6px] sm:border-[8px] border-double border-[#d4af37]">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <GeometricPattern />
      </div>

      {/* Subtle Geometric Border Overlay */}
      <GeometricBorder />

      {/* Decorative Corners */}
      <CornerOrnament className="absolute top-1 left-1 w-10 h-10 sm:w-16 sm:h-16 z-20" />
      <CornerOrnament className="absolute top-1 right-1 rotate-90 w-10 h-10 sm:w-16 sm:h-16 z-20" />
      <CornerOrnament className="absolute bottom-1 left-1 -rotate-90 w-10 h-10 sm:w-16 sm:h-16 z-20" />
      <CornerOrnament className="absolute bottom-1 right-1 rotate-180 w-10 h-10 sm:w-16 sm:h-16 z-20" />

      {/* Main Content Container */}
      <div className={`relative z-10 flex-1 flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-8 ${isBangla ? 'font-bangla' : ''}`}>
        
        {/* Arabic Calligraphy Header (Bismillah) */}
        <CalligraphyFrame>
          <div className="flex justify-center items-center w-full px-2">
            <span 
              className="font-amiri text-3xl sm:text-5xl gold-text leading-[1.6] select-all drop-shadow-2xl font-bold tracking-normal whitespace-nowrap" 
              dir="rtl"
              style={{ 
                textShadow: '0 0 10px rgba(212, 175, 55, 0.2)',
                maxWidth: '100%' 
              }}
            >
              {BISMILLAH_TEXT}
            </span>
          </div>
        </CalligraphyFrame>

        {/* Intro */}
        <div className="mb-4 sm:mb-8 space-y-2 sm:space-y-3">
          <p className={`${isBangla ? 'text-sm sm:text-lg' : 'font-amiri text-base sm:text-lg italic'} text-[#fef08a] brightness-125 drop-shadow-sm opacity-90 leading-relaxed`}>
            {content.intro}
          </p>
          <div className="flex items-center justify-center space-x-3">
            <div className="h-[1px] w-6 bg-[#d4af37]/40" />
            <h2 className="font-cinzel text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[#d4af37]">
              {isBangla ? 'বিবাহের আমন্ত্রণ' : 'INVITATION'}
            </h2>
            <div className="h-[1px] w-6 bg-[#d4af37]/40" />
          </div>
          <p className={`text-[11px] sm:text-[14px] ${isBangla ? 'font-bangla font-light' : 'uppercase tracking-widest font-medium'} text-[#fef08a] max-w-[95%] sm:max-w-[85%] mx-auto leading-relaxed`}>
            {content.requestText}
          </p>
        </div>

        {/* Bride & Groom Section */}
        <div className="flex flex-col items-center space-y-2 sm:space-y-4 mb-4 sm:mb-8">
          <h1 className={`font-cinzel text-3xl sm:text-5xl font-bold gold-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)] leading-tight ${isBangla ? 'font-bangla py-1 text-4xl sm:text-6xl' : ''}`}>
            {bride.name}
          </h1>
          <div className="flex items-center space-x-2 sm:space-x-4 w-full justify-center py-1 sm:py-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#fef08a] opacity-40" />
            <span className="font-amiri text-xl sm:text-2xl italic text-[#fef08a] brightness-125">{isBangla ? 'ও' : '&'}</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#fef08a] opacity-40" />
          </div>
          <h1 className={`font-cinzel text-3xl sm:text-5xl font-bold gold-text drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)] leading-tight ${isBangla ? 'font-bangla py-1 text-4xl sm:text-6xl' : ''}`}>
            {groom.name}
          </h1>
        </div>

        <DecorativeDivider />

        {/* Parents Details */}
        <div className={`grid grid-cols-2 gap-4 sm:gap-8 w-full text-[10px] sm:text-[13px] ${isBangla ? '' : 'tracking-widest uppercase'} text-[#fef08a] mb-4 sm:mb-8 px-2 sm:px-4 font-medium`}>
          <div className="space-y-1">
            <p className={`font-bold border-b border-[#d4af37]/40 pb-1 mb-1 text-[#d4af37] ${isBangla ? 'text-xs sm:text-sm' : ''}`}>{isBangla ? 'কন্যার' : 'Daughter of'}</p>
            <p className="leading-tight">{bride.father}</p>
            <p className="leading-tight">{bride.mother}</p>
          </div>
          <div className="space-y-1">
            <p className={`font-bold border-b border-[#d4af37]/40 pb-1 mb-1 text-[#d4af37] ${isBangla ? 'text-xs sm:text-sm' : ''}`}>{isBangla ? 'বরের' : 'Son of'}</p>
            <p className="leading-tight">{groom.father}</p>
            <p className="leading-tight">{groom.mother}</p>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-auto space-y-4 sm:space-y-6 w-full">
          <div className="space-y-1">
            <p className={`text-[10px] sm:text-xs ${isBangla ? 'font-bangla opacity-90' : 'uppercase tracking-[0.2em] font-semibold opacity-80'}`}>
              {isBangla ? 'বিবাহের শুভ তারিখ' : 'On the auspicious day of'}
            </p>
            <p className={`font-cinzel text-xl sm:text-3xl font-bold tracking-[0.15em] gold-text ${isBangla ? 'font-bangla font-semibold' : ''}`}>
              {event.date}
            </p>
          </div>

          <div className="space-y-2">
            <p className={`text-[10px] sm:text-xs ${isBangla ? 'font-bangla opacity-90' : 'uppercase tracking-[0.2em] font-semibold opacity-80'}`}>
              {isBangla ? 'স্থান' : 'At the prestigious'}
            </p>
            <p className={`font-playfair text-base sm:text-xl font-bold max-w-[95%] sm:max-w-[90%] mx-auto leading-relaxed text-[#fef08a] drop-shadow-md ${isBangla ? 'font-bangla font-medium' : ''}`}>
              {event.venue}
            </p>
          </div>

          {event.dinnerTime && (
            <div className="space-y-1 pt-1 sm:pt-2">
              <p className={`text-[10px] sm:text-xs ${isBangla ? 'font-bangla opacity-90' : 'uppercase tracking-[0.2em] font-semibold opacity-80'}`}>
                {isBangla ? 'প্রীতিভোজ' : 'Dinner served at'}
              </p>
              <p className={`font-cinzel text-lg sm:text-xl font-bold tracking-[0.1em] text-[#d4af37] ${isBangla ? 'font-bangla' : ''}`}>
                {event.dinnerTime}
              </p>
            </div>
          )}
        </div>

        {/* Footer Address */}
        <div className={`mt-8 sm:mt-12 text-[9px] sm:text-[11px] ${isBangla ? 'font-bangla' : 'uppercase tracking-wide'} text-[#fef08a] grid grid-cols-2 gap-4 sm:gap-6 w-full border-t border-[#d4af37]/30 pt-4 font-medium`}>
          <div className="text-left">
            <p className={`font-bold text-[#d4af37] text-[8px] sm:text-[10px] mb-1 ${isBangla ? '' : ''}`}>{isBangla ? 'কন্যার পরিবার:' : "BRIDE'S FAMILY:"}</p>
            <p className="leading-normal opacity-90">{bride.address}</p>
          </div>
          <div className="text-right">
            <p className={`font-bold text-[#d4af37] text-[8px] sm:text-[10px] mb-1 ${isBangla ? '' : ''}`}>{isBangla ? 'বরের পরিবার:' : "GROOM'S FAMILY:"}</p>
            <p className="leading-normal opacity-90">{groom.address}</p>
            <p className={`mt-1 text-[8px] sm:text-[9px] italic text-[#fef08a]/70 font-light`}>
              {isBangla ? 'বর্তমান:' : 'Present:'} {groom.presentAddress}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvitationCard;
