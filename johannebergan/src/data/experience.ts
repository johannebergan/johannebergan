// /data/experience.ts

export type Experience = {
  title: string;
  org: string;
  description: string;
  period: string;
  location: string;
};

export const experience: Experience[] = [
    {
        title: "Kursleder i Learnlink",
        org: "Learnlink",
        description: "Kurslededer for kodekurs",
        period: "Sommer 2025",
        location: "Oslo"    
    },
    {
        title: "Butikkmedarbeider",
        org: "Bunnpris Rosenborg",
        description:
            "Som butikkmedarbeider har jeg lært å håndtere daglige driftsoppgaver og kundeservice. Jeg har utviklet kommunikasjonsevner og evne til å arbeide under press.",
        period: "Nov 2022 –",
        location: "Trondheim",
    },
    {
        title: "Pleiemedarbeider",
        org: "Hjemmetjenesten Bærum kommune",
        description:
            "I denne rollen har jeg lært å gi omsorg til eldre og utviklet ansvarsbevissthet. Jeg har fått innsikt i å jobbe strukturert og selvstendig.",
        period: "Mai 2022 –",
        location: "Bærum",
    },
    {
        title: "Førstegangstjeneste i Sjøforsvaret",
        org: "KNM Fridtjof Nansen",
        description:
            "Ledende menig med stilling som operasjonsgast på fregatt KNM Fridtjof Nansen. Stillingen innebar å holde oversiktsbilde over andre fartøy og aktivitet rundt fartøyet. Har vært på deployering i 6 måneder som en del av en amerikansk hangarskipsgruppe.",
        period: "Apr 2021 – Apr 2022",
        location: "Norge / internasjonalt",
    },
    {
        title: "SFO-assistent og lærervikar",
        org: "Bekkestua Barneskole",
        description:
            "I denne rollen lærte jeg å lede barnegrupper og bidra i konflikthåndtering.",
        period: "Aug 2020 – Apr 2021",
        location: "Bekkestua",
    },
];

