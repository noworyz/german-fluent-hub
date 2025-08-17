import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Globe, GraduationCap, Briefcase, MessageSquare, BookOpen, Globe2, Book, Map } from "lucide-react";
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
                Tailored 1:1 online lessons, group sessions (tailored age groups), and in-person instruction (DFW area only) for study, work, travel, and personal growth. Flexible scheduling, clear progress, real-world results.
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
              <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-3">About Me</h2>
              <p className="text-xl font-medium mb-4">Stefanie Singh</p>
              <p className="text-muted-foreground mb-4">
                <span className="font-bold italic">Hallo und herzlich willkommen!</span> I'm a native German speaker with a Master's in Education, a certification in Intercultural Learning, and advanced certifications in education leadership from Harvard. With over 13 years of experience teaching at renowned institutions, I'm passionate about helping students discover the beauty of the German language and culture.
              </p>
              <p className="text-muted-foreground mb-4">
                I've taught students of all ages and at every language level, from absolute beginners to advanced speakers. Whether your goal is travel, career, study, or personal enrichment, I'll guide you with patience, expertise, and lessons tailored to your needs.
              </p>
              <p className="text-muted-foreground mb-4">
                I look forward to meeting you and helping you reach your language learning goals!
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="text-primary mt-1" /><span>Native speaker with Master's in Education</span></li>
                <li className="flex items-start gap-2"><Clock className="text-primary mt-1" /><span>13+ years of teaching experience</span></li>
                <li className="flex items-start gap-2"><Globe className="text-primary mt-1" /><span>Taught at German International School and Goethe-Institut</span></li>
                <li className="flex items-start gap-2"><GraduationCap className="text-primary mt-1" /><span>Advanced certifications in education leadership from Harvard</span></li>
                <li className="flex items-start gap-2"><a href="https://www.linkedin.com/in/stefanie-singh-4606187b/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Connect on LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Learn German? */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-4">
              Why Learn German?
            </h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-12 text-muted-foreground">
              Learning German opens doors to new opportunities, cultures, and connections. Here are just a few reasons why it's worth the journey:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">International Communication</h3>
                <p className="text-muted-foreground">
                  German is the most widely spoken native language in Europe and is used as a second language by many Europeans, making it a valuable tool for cross-cultural communication.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Higher Education Opportunities</h3>
                <p className="text-muted-foreground">
                  Germany is known for its free, high-quality education system and world-class universities, attracting students from around the globe.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Advancement</h3>
                <p className="text-muted-foreground">
                  Speaking German can give you a competitive edge in the job market, opening doors to positions with both German and international companies at home and abroad.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultural Enrichment</h3>
                <p className="text-muted-foreground">
                  From Goethe's literature to Beethoven's symphonies, learning German connects you with a rich heritage of history, art, and music.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Book className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Science and Research</h3>
                <p className="text-muted-foreground">
                  German is the second most commonly used scientific language, offering access to cutting-edge research and publications.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Map className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Travel</h3>
                <p className="text-muted-foreground">
                  Whether exploring fairy-tale castles, vibrant cities, or breathtaking landscapes, speaking German enhances your travel experience in Germany and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Learn with Me? */}
        <section className="bg-secondary/50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-10">About The Lessons</h2>
            <p className="text-center text-lg max-w-4xl mx-auto mb-10">
              All lessons are thoughtfully tailored to your language level, learning style, and personal goals. Whether you're starting from scratch, preparing for an exam, or refining your skills for professional or travel purposes, each session is designed to help you progress with confidence.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="animate-enter h-full">
                <CardHeader>
                  <GraduationCap className="text-primary" />
                  <CardTitle>Personalized Approach</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Lessons are customized to your level, goals, and interests. We'll focus on the vocabulary and grammar that matter most to you, whether it's for travel, work, or personal enrichment.
                </CardContent>
              </Card>
              <Card className="animate-enter h-full">
                <CardHeader>
                  <Clock className="text-primary" />
                  <CardTitle>Flexible & Convenient</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Morning or evening, weekday or weekend—book lessons that fit your schedule. All you need is an internet connection to join from anywhere in the world.
                </CardContent>
              </Card>
              <Card className="animate-enter h-full">
                <CardHeader>
                  <Globe className="text-primary" />
                  <CardTitle>Immersive Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Learn through real-life conversations, role plays, and practical activities. We'll use authentic materials like news articles, videos, and songs to make learning engaging and effective.
                </CardContent>
              </Card>
              <Card className="animate-enter h-full">
                <CardHeader>
                  <Briefcase className="text-primary" />
                  <CardTitle>Practical Results</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Focus on the language skills you need most—whether it's acing an exam, nailing a job interview, or confidently navigating daily life in a German-speaking country.
                </CardContent>
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
              { title: "1:1 Lesson", price: "$75", desc: "1 x 60-minute private lesson", cta: "Book Now" },
              { title: "5-Lesson Pack", price: "$350", desc: "5 x 60-minute private lessons", cta: "Save $25" },
              { title: "10-Lesson Pack", price: "$650", desc: "10 x 60-minute private lessons", cta: "Save $100" },
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
