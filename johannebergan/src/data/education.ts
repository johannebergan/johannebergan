export type Education = {
    degree: string;
    institution?: string;
    field?: string;
    start?: string;
    end?: string;
    ongoing?: boolean;
    description: string;
}


export const education: Education[] = [
  {
    institution: "NTNU - Trondheim",
    degree: "Master",
    field: "Informatikk – Software Engineering",
    start: "2025",
    ongoing: true,
    description: "Påbegynt mastergrad med spesialisering innen software engineering."
  },
  {
    institution: "NTNU - Trondheim",
    degree: "Bachelor",
    field: "Informatikk",
    start: "2022",
    end: "2025",
    description: "Fullført bachelor med fokus på programmering og utvikling av brukervennlige datasystemer."
  },
  {
    institution: "Nadderud videregående skole",
    degree: "Videregående",
    field: "Studiespesialisering",
    start: "2017",
    end: "2020",
    description: "Fullført videregående utdanning med studiespesialisering."
  }
];
