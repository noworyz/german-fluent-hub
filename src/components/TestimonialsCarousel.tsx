import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I passed my TestDaF with C1 thanks to Anna’s focused lessons!",
    name: "Miguel, Spain",
  },
  {
    quote: "Practical Business German. I felt confident in meetings within weeks.",
    name: "Sara, USA",
  },
  {
    quote: "Lessons are fun and tailored. I can finally speak without fear!",
    name: "Akiko, Japan",
  },
  {
    quote: "Clear explanations and great materials. Highly recommend!",
    name: "Lukas, Poland",
  },
];

export function TestimonialsCarousel() {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <CardContent className="p-6 flex h-full flex-col justify-between">
                  <p className="text-lg">“{t.quote}”</p>
                  <p className="mt-4 text-sm text-muted-foreground">— {t.name}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
