import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  const services = [
    { title: "Beginner", desc: "Start speaking with confidence using simple, useful phrases." },
    { title: "Intermediate", desc: "Grow your vocabulary and grammar through real conversation." },
    { title: "Advanced", desc: "Polish your fluency, nuance, and natural expression." },
    { title: "Exam Preparation", desc: "Targeted practice for Goethe, DSD, TestDaF with mock tests." },
    { title: "Business German", desc: "Professional communication for meetings, emails, and presentations." },
  ];

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>German Lessons Online | Beginner to Business German</title>
        <meta name="description" content="Tailored German lessons online: Beginner, Intermediate, Advanced, Exam Preparation, and Business German." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="font-heading text-4xl font-bold mb-6">Services & Lesson Types</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
