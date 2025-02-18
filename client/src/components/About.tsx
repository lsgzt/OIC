import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Licensed Immigration Consultants",
  "20+ Years of Experience",
  "Personalized Solutions",
  "High Success Rate",
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose <span className="text-primary">OIC GLOBAL</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              With over two decades of experience, OIC GLOBAL has helped thousands
              of individuals and families achieve their immigration goals. Our team
              of licensed consultants provides personalized solutions and
              expert guidance throughout your immigration journey.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg">Book a Consultation</Button>
          </div>
          <div className="lg:order-first">
            <div className="aspect-square bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
