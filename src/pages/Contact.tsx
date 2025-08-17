import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'Beginner',
    message: '',
    preferredTime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "I'll get back to you within 24 hours to confirm your lesson.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        level: 'Beginner',
        message: '',
        preferredTime: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Contact & Booking | German Tutor Online</title>
        <meta name="description" content="Contact your German tutor and book your free trial lesson. Flexible scheduling and worldwide availability." />
        <link rel="canonical" href={canonical} />
        {/* Calendly script */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Helmet>

      <h1 className="font-heading text-4xl font-bold mb-6">Contact & Booking</h1>
      <p className="text-muted-foreground mb-8">Have a question or ready to start? Send a message or book a free trial lesson below.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Book a Free Trial Lesson</h2>
            <p className="mb-4">Schedule a 30-minute trial lesson at your convenience.</p>
            <Button 
              className="w-full"
              onClick={() => {
                // @ts-ignore - Calendly is loaded from the script tag
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/germanlingo'
                });
                return false;
              }}
            >
              Book Now
            </Button>
          </div>

          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="text-muted-foreground">Email: stefanie@germanlingo.com</p>
            <p className="text-muted-foreground">Based in Dallas, TX</p>
            <p className="text-muted-foreground">Online lessons available worldwide</p>
          </div>
          <div className="bg-muted/50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Office Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 bg-background"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 bg-background"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm mb-1">Your level</label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 bg-background"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Your message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 bg-background"
              rows={4}
              placeholder="Tell me about your goals and how I can help you with German..."
            />
          </div>
          <div>
            <label htmlFor="preferredTime" className="block text-sm mb-1">Preferred time for contact</label>
            <input
              type="text"
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full rounded-md border px-3 py-2 bg-background"
              placeholder="e.g., Weekday evenings, Weekend mornings, etc."
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : 'Send Message'}
          </Button>
        </form>
      </div>
    </main>
  );
}
