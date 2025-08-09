import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Globe, GraduationCap, Briefcase } from "lucide-react";
import heroImg from "@/assets/hero-german.jpg";
import tutorImg from "@/assets/tutor-portrait.jpg";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const Index = () => {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>German Tutor Online | Learn German Confidently</title>
        <meta name="description" content="German tutor online for beginners to advanced, exam prep, and Business German. Learn German from home. Book your free trial lesson today." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <header className="relative">
        <section className="relative isolate">
          <img
            src={heroImg}
            alt="Learn German online with a friendly tutor and iconic German landmarks"
            className="h-[70vh] w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
          <div className="container mx-auto px-6 absolute inset-0 flex items-center">
            <div className="max-w-2xl animate-enter">
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-4">
                Learn German Confidently – Anytime, Anywhere
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Tailored 1:1 online lessons for study, work, travel, and personal growth. Flexible scheduling, clear progress, real-world results.
              </p>
              <div className="flex gap-3">
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact?trial=true">Book Your Free Trial Lesson</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#services">View Services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main className="flex-1">
        {/* About */}
        <section id="about" className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img src={tutorImg} alt="Professional German tutor headshot smiling" className="w-full max-w-md rounded-lg shadow-md" loading="lazy" />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">About the Tutor</h2>
              <p className="text-muted-foreground mb-4">
                Hallo! I’m Anna, a professional German tutor with 8+ years of experience helping students worldwide. My philosophy is simple: keep lessons practical, positive, and personalized.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /><span>Native-level fluency with clear, friendly explanations</span></li>
                <li className="flex items-start gap-2"><Clock className="text-primary mt-1" /><span>Flexible scheduling and fast feedback</span></li>
                <li className="flex items-start gap-2"><Globe className="text-primary mt-1" /><span>Experience with learners from 30+ countries</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Learn with Me */}
        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-10">Why Learn with Me?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="animate-enter">
                <CardHeader>
                  <GraduationCap className="text-primary" />
                  <CardTitle>Tailored Lessons</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Customized to your level, goals, and interests so you learn faster.</CardContent>
              </Card>
              <Card className="animate-enter">
                <CardHeader>
                  <Clock className="text-primary" />
                  <CardTitle>Flexible Scheduling</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Morning or evening—book lessons that fit your life and time zone.</CardContent>
              </Card>
              <Card className="animate-enter">
                <CardHeader>
                  <Globe className="text-primary" />
                  <CardTitle>Anywhere, Anytime</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">Learn online from home with clear materials and live practice.</CardContent>
              </Card>
              <Card className="animate-enter">
                <CardHeader>
                  <Briefcase className="text-primary" />
                  <CardTitle>Real-World Results</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">German for studies, job interviews, business, exams, and travel.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-10">Services & Lesson Types</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Beginner", desc: "Start speaking from lesson one with simple, useful phrases." },
              { title: "Intermediate", desc: "Boost vocabulary, grammar, and confidence in conversation." },
              { title: "Advanced", desc: "Refine fluency, nuance, and natural expression." },
              { title: "Exam Preparation", desc: "Goethe/DSD/TestDaF—targeted practice and mock tests." },
              { title: "Business German", desc: "Professional emails, meetings, and presentations." },
            ].map((s) => (
              <Card key={s.title} className="hover-scale">
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{s.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-secondary/50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-10">Student Success Stories</h2>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="container mx-auto px-6 py-16">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-10">Pricing & Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Free Trial", price: "$0", desc: "25-minute intro + level check", cta: "Book Now" },
              { title: "Single Lesson", price: "$40", desc: "1 x 60-minute lesson", cta: "Book Now" },
              { title: "5-Lesson Pack", price: "$185", desc: "5 x 60-minute lessons", cta: "Book & Save" },
              { title: "10-Lesson Pack", price: "$360", desc: "10 x 60-minute lessons", cta: "Best Value" },
            ].map((p) => (
              <Card key={p.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-3xl font-heading font-bold mb-2">{p.price}</p>
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <Button asChild variant={p.title === "10-Lesson Pack" ? "hero" : "cta"} className="w-full">
                    <Link to="/contact">{p.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* JSON-LD Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "German Online Tutor",
          "description": "Professional German tutor offering online lessons for all levels, including Business German and exam preparation.",
          "areaServed": "Worldwide",
          "url": canonical,
        })}
      </script>
    </div>
  );
};

export default Index;
