import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import tutorImg from "@/assets/tutor-portrait.jpg";
import { CheckCircle } from "lucide-react";

export default function About() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>About Your German Tutor | Professional Online Lessons</title>
        <meta name="description" content="Meet your professional German tutor. Learn about her teaching philosophy and experience helping students worldwide." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      
      <h1 className="font-heading text-4xl font-bold mb-6">About Me</h1>
      
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          <img src={tutorImg} alt="Professional German tutor" className="w-full max-w-md rounded-lg shadow-lg" />
          <div className="prose prose-neutral max-w-none">
            <h2 className="font-heading text-3xl font-semibold mb-4"><span className="font-bold italic">Hallo und herzlich willkommen!</span></h2>
            <p className="text-lg">
              I'm a native German speaker with a Master's in Education and a certification in Intercultural Learning. For more than 13 years, I've had the joy of working in the education sector, teaching at renowned institutions such as the German International School and the Goethe-Institut.
            </p>
            <p className="text-lg">
              Teaching German is more than just my profession—it's my passion. I love helping learners not only build strong language skills but also discover the culture, traditions, and unique charm of the German-speaking world.
            </p>
            <p className="text-lg">
              I've taught students of all ages and at every language level, from absolute beginners to advanced speakers. Whether your goal is travel, career, study, or personal enrichment, I'll guide you with patience, expertise, and lessons tailored to your needs.
            </p>
            <p className="text-lg font-medium">
              I look forward to meeting you and helping you reach your language learning goals!
            </p>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-lg mb-12">
          <h2 className="font-heading text-3xl font-semibold mb-6 text-center">My Mission</h2>
          <p className="text-lg text-center max-w-4xl mx-auto">
            My mission is to empower learners of all ages and backgrounds to confidently communicate in German by providing personalized, engaging, and culturally immersive language instruction. I am committed to creating a supportive learning environment that fosters curiosity, builds lasting skills, and connects students with the rich heritage and vibrant culture of the German-speaking world. Through patient guidance and tailored lessons, I aim to help every learner reach their language goals and open doors to new opportunities in education, career, and life.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-semibold mb-6">Why Learn German?</h2>
          <p className="mb-6">
            Learning German opens doors to new opportunities, cultures, and connections. Here are just a few reasons why it's worth the journey:
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">International Communication</h3>
                <p className="text-muted-foreground">German is the most widely spoken native language in Europe and is used as a second language by many Europeans, making it a valuable tool for cross-cultural communication.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Higher Education Opportunities</h3>
                <p className="text-muted-foreground">Germany is known for its free, high-quality education system and world-class universities, attracting students from around the globe.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Career Advancement</h3>
                <p className="text-muted-foreground">Speaking German can give you a competitive edge in the job market, opening doors to positions with both German and international companies at home and abroad.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Cultural Enrichment</h3>
                <p className="text-muted-foreground">From Goethe's literature to Beethoven's symphonies, learning German connects you with a rich heritage of history, art, and music.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Science and Research</h3>
                <p className="text-muted-foreground">German is the second most commonly used scientific language, offering access to cutting-edge research and publications.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Travel</h3>
                <p className="text-muted-foreground">Whether exploring fairy-tale castles, vibrant cities, or breathtaking landscapes, speaking German enhances your travel experience in Germany and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
