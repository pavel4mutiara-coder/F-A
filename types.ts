
export interface Person {
  name: string;
  father: string;
  mother: string;
  address: string;
  presentAddress?: string;
}

export interface EventDetails {
  date: string;
  venue: string;
  dinnerTime?: string;
}

export interface InvitationContent {
  intro: string;
  requestText: string;
  brideLabel: string;
  groomLabel: string;
  dateLabel: string;
  venueLabel: string;
  bride: Person;
  groom: Person;
  event: EventDetails;
}

export interface InvitationData {
  bn: InvitationContent;
  en: InvitationContent;
}
