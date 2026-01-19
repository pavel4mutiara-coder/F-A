
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
    <div className="invitation-card-root fade-in relative w-full max-w-[500px] mx-auto min-h-[750px] bg-[#022c22] overflow-hidden premium-shadow flex flex-col justify-between border-[6px] sm:border-[10px] border-double border-[#d4af37] shadow-2xl">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <GeometricPattern />
      </div>

      {/* Frame Details */}
      <GeometricBorder />
      <CornerOrnament className="absolute top-1 left-1 w-12 h-12 sm:w-20 sm:h-20 z-20" />
      <CornerOrnament className="absolute top-1 right-1 rotate-90 w-12 h-12 sm:w-20 sm:h-20 z-20" />
      <CornerOrnament className="absolute bottom-1 left-1 -rotate-90 w-12 h-12 sm:w-20 sm:h-20 z-20" />
      <CornerOrnament className="absolute bottom-1 right-1 rotate-180 w-12 h-12 sm:w-20 sm:h-20 z-20" />

      {/* Content Layer */}
      <div className={`relative z-10 flex-1 flex flex-col items-center text-center px-6 sm:px-10 py-10 sm:py-14 ${isBangla ? 'font-bangla' : ''}`}>
        
        {/* Arabic Header */}
        <div className="w-full mb-4 sm:mb-6">
          <CalligraphyFrame>
            <span 
              className="font-amiri text-3xl sm:text-5xl gold-text leading-tight font-bold whitespace-nowrap" 
              dir="rtl"
            >
              {BISMILLAH_TEXT}
            </span>
          </CalligraphyFrame>
        </div>

        {/* Introduction */}
        <div className="mb-6 sm:mb-10 space-y-3">
          <p className={`${isBangla ? 'text-sm sm:text-lg' : 'font-amiri text-base sm:text-xl italic'} text-[#fef08a] opacity-90`}>
            {content.intro}
          </p>
          <div className="flex items-center justify-center space-x-3 py-1">
            <div className="h-[1px] w-8 bg-[#d4af37]/50" />
            <h2 className="font-cinzel text-xs sm:text-sm tracking-[0.3em] font-bold text-[#d4af37] uppercase">
              {isBangla ? 'বিবাহের আমন্ত্রণ' : 'Invitation'}
            </h2>
            <div className="h-[1px] w-8 bg-[#d4af37]/50" />
          </div>
          <p className={`text-[11px] sm:text-[15px] leading-relaxed max-w-[90%] mx-auto font-medium text-[#fef08a]/90 ${isBangla ? 'font-bangla' : 'uppercase tracking-widest'}`}>
            {content.requestText}
          </p>
        </div>

        {/* Names Section */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-6 mb-8 w-full">
          <h1 className={`font-cinzel text-4xl sm:text-6xl font-bold gold-text leading-none ${isBangla ? 'font-bangla' : ''}`}>
            {bride.name}
          </h1>
          <div className="flex items-center space-x-4 w-2/3 justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <span className="font-amiri text-2xl sm:text-3xl italic text-[#fef08a]">{isBangla ? 'ও' : '&'}</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <h1 className={`font-cinzel text-4xl sm:text-6xl font-bold gold-text leading-none ${isBangla ? 'font-bangla' : ''}`}>
            {groom.name}
          </h1>
        </div>

        <DecorativeDivider />

        {/* Parentage */}
        <div className={`grid grid-cols-2 gap-6 sm:gap-12 w-full text-[10px] sm:text-[13px] text-[#fef08a]/90 mb-10 px-2 font-medium ${isBangla ? '' : 'tracking-wide uppercase'}`}>
          <div className="space-y-1">
            <p className="font-bold border-b border-[#d4af37]/30 pb-1 mb-1 text-[#d4af37]">{isBangla ? 'কন্যার' : 'Daughter of'}</p>
            <p>{bride.father}</p>
            <p>{bride.mother}</p>
          </div>
          <div className="space-y-1">
            <p className="font-bold border-b border-[#d4af37]/30 pb-1 mb-1 text-[#d4af37]">{isBangla ? 'বরের' : 'Son of'}</p>
            <p>{groom.father}</p>
            <p>{groom.mother}</p>
          </div>
        </div>

        {/* Event Meta */}
        <div className="mt-auto space-y-6 sm:space-y-8 w-full">
          <div className="space-y-2">
            <p className={`text-[10px] sm:text-xs opacity-70 ${isBangla ? '' : 'uppercase tracking-widest'}`}>
              {isBangla ? 'তারিখ' : 'The Date'}
            </p>
            <p className={`font-cinzel text-xl sm:text-3xl font-bold gold-text ${isBangla ? 'font-bangla' : ''}`}>
              {event.date}
            </p>
          </div>

          <div className="space-y-2">
            <p className={`text-[10px] sm:text-xs opacity-70 ${isBangla ? '' : 'uppercase tracking-widest'}`}>
              {isBangla ? 'স্থান' : 'The Venue'}
            </p>
            <p className={`font-playfair text-base sm:text-xl font-bold text-[#fef08a] max-w-[280px] sm:max-w-none mx-auto leading-snug ${isBangla ? 'font-bangla' : ''}`}>
              {event.venue}
            </p>
          </div>

          {event.dinnerTime && (
            <div className="pt-2">
              <p className={`text-[10px] sm:text-xs opacity-70 mb-1 ${isBangla ? '' : 'uppercase tracking-widest'}`}>
                {isBangla ? 'প্রীতিভোজ' : 'Dinner'}
              </p>
              <p className="font-cinzel text-lg sm:text-2xl font-bold text-[#d4af37]">
                {event.dinnerTime}
              </p>
            </div>
          )}
        </div>

        {/* Footer info - simplified for mobile */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#d4af37]/20 w-full flex justify-between text-[8px] sm:text-[10px] text-[#fef08a]/60 uppercase tracking-widest font-medium">
          <p>{isBangla ? 'সিলেট, বাংলাদেশ' : 'Sylhet, Bangladesh'}</p>
          <p>{isBangla ? '২০২৬' : 'MMXXVI'}</p>
        </div>

      </div>
    </div>
  );
};

export default InvitationCard;
