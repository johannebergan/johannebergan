export type Education = {
    degree: string;
    institution?: string;
    field?: string;
    startYear?: number;
    endYear?: number;
    ongoing?: boolean;
    description: string;
}


const education: Education[] = [
  {
    institution: "NTNU",
    degree: "Master",
    field: "Informatikk – Software Engineering",
    startYear: 2025,
    ongoing: true,
    description: "Påbegynt mastergrad med spesialisering innen software engineering."
  },
  {
    institution: "NTNU",
    degree: "Bachelor",
    field: "Informatikk",
    startYear: 2022,
    endYear: 2025,
    description: "Fullført bachelor med fokus på programmering og utvikling av brukervennlige datasystemer."
  },
  {
    institution: "Nadderud videregående skole",
    degree: "Videregående",
    field: "Studiespesialisering",
    startYear: 2017,
    endYear: 2020,
    description: "Fullført videregående utdanning med studiespesialisering."
  }
];
