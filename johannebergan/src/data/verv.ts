export type Verv = {
  role: string;
  org: string;
  start: string; 
  end?: string;  
  ongoing?: boolean;
  description: string;
};

export const verv: Verv[] = [
  {
    role: "Medlem i Bedriftskomiteen i Online",
    org: "Linjeforeningen for Informatikk ved NTNU",
    start: "Aug 2022",
    ongoing: true,
    description:
      "Som medlem har jeg bidratt i planlegging og utføring av bedriftsarrangementer og generell kontakt med bedrifter.",
  },
  {
    role: "Økonomiansvarlig i Bedriftskomiteen i Online",
    org: "Linjeforeningen for Informatikk ved NTNU",
    start: "Mars 2024",
    end: "Mars 2025",
    description:
      "Som økonomiansvarlig har jeg ansvar for komiteens økonomi, inkludert budsjettstyring for våre arrangementer.",
  },
  {
    role: "Instituttillitsvalgt ved Institutt for Datateknologi og Informatikk",
    org: "NTNU",
    start: "Aug 2024",
    end: "Juli 2025",
    description:
      "Som instituttillitsvalgt representerer jeg studentene i møter med instituttledelsen. Jeg er en del av studentrådet, hvor vi aktivt fremmer saker som er viktige for studentene.",
  },
  {
    role: "Klassetillitsvalgt for Informatikk 3. klasse",
    org: "NTNU",
    start: "Aug 2022",
    ongoing: true,
    description:
      "Som klassetillitsvalgt har jeg fungert som kontaktpunkt mellom klassen og instituttet. Jeg har tatt opp spørsmål og saker som angår klassen for å sikre en best mulig studieopplevelse.",
  },
];