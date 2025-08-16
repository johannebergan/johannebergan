import { experience } from "@/data/experience";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CvPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Her er min CV</h1>
      </header>

      <section aria-labelledby="erfaring" className="space-y-4">
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
                <span className="font-medium">{exp.period}</span>
                <span aria-hidden>•</span>
                <span>{exp.location}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
