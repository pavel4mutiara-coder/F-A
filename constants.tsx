
import { InvitationData } from './types';

export const COLORS = {
  EMERALD: '#022c22',
  GOLD: '#d4af37',
  GOLD_LIGHT: '#fef08a',
  GOLD_DARK: '#a16207',
};

export const BISMILLAH_TEXT = "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";

export const INVITATION_DATA: InvitationData = {
  bn: {
    intro: "আল্লাহর নামে, পরম করুণাময় ও অসীম দয়ালু",
    requestText: "শহীদ আহমেদ ও ফাতিমা আহমেদ রুমা তাঁদের প্রিয় কন্যার শুভ বিবাহ অনুষ্ঠানে আপনার উপস্থিতি ও দোয়া কামনা করছেন",
    brideLabel: "কন্যা",
    groomLabel: "বর",
    dateLabel: "বিবাহের তারিখ",
    venueLabel: "স্থান",
    bride: {
      name: "ফারিহা আহমেদ",
      father: "শহীদ আহমেদ",
      mother: "ফাতিমা আহমেদ রুমা",
      address: "৫৯, নাসিরাবাদ বিলপার, লামাবাজার, সিলেট"
    },
    groom: {
      name: "আব্দুল্লাহ মাসউদ বাবর",
      father: "মোহাম্মদ মুজিবুর রহমান",
      mother: "মোছাম্মৎ মারজিয়া রহমান",
      address: "বোর্ডেশ দক্ষিণ কালপার, বোর্ডেশ বাজার, কানাইঘাট, সিলেট",
      presentAddress: "কুমারপাড়া, ব্লক-বি, বাড়ি নং ২৭, ওয়াজিদ ভিলা"
    },
    event: {
      date: "২৬ জানুয়ারি ২০২৬",
      venue: "কুশিয়ারা ইন্টারন্যাশনাল কনভেনশন হল, চন্ডি ফুল, সিলেট, বাংলাদেশ",
      dinnerTime: "রাত ৭:০০ টা"
    }
  },
  en: {
    intro: "In the name of Allah, Most Gracious, Most Merciful",
    requestText: "Mr. Shahid Ahmed & Mrs. Fatima Ahmed Ruma request the honour of your presence at the wedding ceremony of their beloved daughter",
    brideLabel: "Bride",
    groomLabel: "Groom",
    dateLabel: "Wedding Date",
    venueLabel: "Venue",
    bride: {
      name: "Fariha Ahmed",
      father: "Shahid Ahmed",
      mother: "Fatima Ahmed Ruma",
      address: "59, Nasirabad Bilpar, Lamabazar, Sylhet"
    },
    groom: {
      name: "Abdullah Masud Babor",
      father: "Mohammed Mujibur Rahman",
      mother: "Musamat Marjia Rahman",
      address: "Bordesh Dakshin Kalpar, Bordesh Bazar, Kanaighat, Sylhet",
      presentAddress: "Kumarpara, Block B, House No 27, Wajid Villa"
    },
    event: {
      date: "26 January 2026",
      venue: "Kushiyara International Convention Hall, Chondi Phul, Sylhet, Bangladesh",
      dinnerTime: "7 PM"
    }
  }
};
