import { experience } from "@/data/experience";
import { education } from "@/data/education";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { verv } from "@/data/verv";


function formatRange(start: string, end?: string, ongoing?: boolean) {
  if (!start) return "";
  if (ongoing) return `${start} – pågår`;
  if (end) return `${start} – ${end}`;
  return start;
}


export default function CvPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Her er min CV</h1>
      </header>

      <section aria-labelledby="erfaring" className="space-y-10">
        <h2 id="erfaring" className="text-xl font-medium">Erfaring</h2>

        <div className=" space-y-6">
          {experience.map((exp, i) => (
            <Card
              key={`${exp.title}-${exp.org}-${i}`}
              className="h-full hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="leading-tight">{exp.title}</CardTitle>
                <CardDescription>{exp.org}</CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">
                <p>{exp.description}</p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <span className="font-medium">
                  {formatRange(exp.start ?? "", exp.end, exp.ongoing)}


                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <hr className="my-12 border-t" />

      <section aria-labelledby="utdanning" className="space-y-10">
        <h2 id="utdanning" className="text-xl font-medium">Utdanning</h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <Card
              key={`${edu.institution}-${edu.degree}-${i}`}
              className="h-full hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="leading-tight">
                  {edu.degree}{edu.field ? ` · ${edu.field}` : ""}
                </CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">
                <p>{edu.description}</p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <span className="font-medium">
                  {formatRange(edu.start ?? "", edu.end, edu.ongoing)}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <hr className="my-12 border-t" />

      <section aria-labelledby="verv" className="space-y-10">
        <h2 id="verv" className="text-xl font-medium">Verv</h2>

        <div className="space-y-6">
          {verv.map((v, i) => (
            <Card
              key={`${v.role}-${v.org}-${i}`}
              className="h-full hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="leading-tight">{v.role}</CardTitle>
                <CardDescription >{v.org}</CardDescription>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">
                <p>{v.description}</p>
              </CardContent>

              <CardFooter className="text-sm">
                <span className="font-medium">
                  {formatRange(v.start, v.end, v.ongoing)}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
