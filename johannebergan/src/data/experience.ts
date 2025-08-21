// /data/experience.ts

export type Experience = {
  title: string;
  org: string;
  description: string;
  start?: string;
  end?: string;
  ongoing?: boolean;
  location: string;
};

export const experience: Experience[] = [
    {
        title: "Kursleder for kodekurs",
        org: "Learnlink",
        description: "Ledet kodekurs for barn og ungdom (7–15 år) i Python, Minecraft og Roblox. Underviste i programmering på en engasjerende måte, med fokus på samarbeid, kreativitet og mestring.",
        start: "Sommer 2025",
        location: "Oslo"
    },
    {
        title: "Butikkmedarbeider",
        org: "Bunnpris Rosenborg",
        description:
            "Som butikkmedarbeider har jeg lært å håndtere daglige driftsoppgaver og kundeservice. Jeg har utviklet kommunikasjonsevner og evne til å arbeide under press.",
        start: "Nov 2022",
        end: "Mai 2025",
        location: "Trondheim",
    },
    {
        title: "Pleiemedarbeider",
        org: "Hjemmetjenesten Bærum kommune",
        description:
            "I denne rollen har jeg lært å gi omsorg til eldre og utviklet ansvarsbevissthet. Jeg har fått innsikt i å jobbe strukturert og selvstendig.",
        start: "Mai 2022",
        ongoing: true,
        location: "Bærum",
    },
    {
        title: "Førstegangstjeneste i Sjøforsvaret",
        org: "KNM Fridtjof Nansen",
        description:
            "Ledende menig med stilling som operasjonsgast på fregatt KNM Fridtjof Nansen. Stillingen innebar å holde oversiktsbilde over andre fartøy og aktivitet rundt fartøyet. Har vært på deployering i 6 måneder som en del av en amerikansk hangarskipsgruppe.",
        start: "Apr 2021",
        end:"Apr 2022",
        location: "Norge / internasjonalt",
    },
    {
        title: "SFO-assistent og lærervikar",
        org: "Bekkestua Barneskole",
        description:
            "I denne rollen lærte jeg å lede barnegrupper og bidra i konflikthåndtering.",
        start: "Aug 2020",
        end:"Apr 2021",
        location: "Bekkestua",
    },
];

