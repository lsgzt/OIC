import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    content:
      "OIC GLOBAL made my dream of studying abroad a reality. Their guidance was invaluable throughout the entire process.",
    initials: "SJ",
  },
  {
    name: "David Chen",
    country: "Canada",
    content:
      "Professional and knowledgeable team. They helped me secure my work permit with minimal stress.",
    initials: "DC",
  },
  {
    name: "Maria Garcia",
    country: "Spain",
    content:
      "Excellent service! The team was always available to answer my questions and guide me through the process.",
    initials: "MG",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Client Testimonials</h2>
          <p className="text-muted-foreground mt-4">
            What our clients say about their experience with us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.country}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
