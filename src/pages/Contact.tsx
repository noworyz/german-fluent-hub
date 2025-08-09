import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { DayPicker } from "react-day-picker";

export default function Contact() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;
  const [selected, setSelected] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Request received!", description: "I’ll get back to you within 24 hours to confirm your lesson." });
  };

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Contact & Booking | German Tutor Online</title>
        <meta name="description" content="Contact your German tutor and book your free trial lesson. Flexible scheduling and worldwide availability." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <h1 className="font-heading text-4xl font-bold mb-6">Contact & Booking</h1>
      <p className="text-muted-foreground mb-8">Have a question or ready to start? Send a message or request a time below.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full rounded-md border px-3 py-2 bg-background" required placeholder="Your full name" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-md border px-3 py-2 bg-background" required placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-sm mb-1">Your level</label>
            <select className="w-full rounded-md border px-3 py-2 bg-background">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Learning goals</label>
            <textarea className="w-full rounded-md border px-3 py-2 bg-background" rows={4} placeholder="Exam prep, job interviews, travel, etc." />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Preferred date</label>
              <DayPicker mode="single" selected={selected} onSelect={setSelected} />
            </div>
            <div>
              <label className="block text-sm mb-1">Preferred time</label>
              <select className="w-full rounded-md border px-3 py-2 bg-background" value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="">Select a time</option>
                {["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <Button variant="hero" type="submit">Send Request</Button>
          <p className="text-sm text-muted-foreground">Or schedule instantly via Calendly: <a className="story-link" href="#" aria-label="Calendly link">Open calendar</a></p>
        </form>

        <aside className="rounded-lg border p-6 bg-secondary/30">
          <h2 className="font-heading text-2xl font-semibold mb-3">What happens next?</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>I’ll email you within 24 hours to confirm details.</li>
            <li>We’ll meet on Zoom/Google Meet at your chosen time.</li>
            <li>You’ll receive study materials and a simple plan after each lesson.</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
