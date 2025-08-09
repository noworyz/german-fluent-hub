import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import tutorImg from "@/assets/tutor-portrait.jpg";

export default function About() {
  const location = useLocation();
  const canonical = `${window.location.origin}${location.pathname}`;

  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>About Your German Tutor | Professional Online Lessons</title>
        <meta name="description" content="Meet Anna, your professional German tutor. Learn about her teaching philosophy and experience helping students worldwide." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <h1 className="font-heading text-4xl font-bold mb-6">About the Tutor</h1>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img src={tutorImg} alt="Professional German tutor smiling" className="w-full max-w-md rounded-lg shadow" />
        <div className="prose prose-neutral max-w-none">
          <p>
            I’m Anna, a passionate German tutor with over eight years of teaching experience. I’ve helped students from more than 30 countries achieve their goals—from passing exams to landing jobs in German-speaking companies.
          </p>
          <p>
            My lessons are practical, supportive, and tailored to your goals. We’ll focus on real-life communication, clear grammar, and the exact skills you need.
          </p>
        </div>
      </div>
    </main>
  );
}
