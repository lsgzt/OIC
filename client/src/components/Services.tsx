import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Briefcase, Users, Home } from "lucide-react";

const services = [
  {
    title: "Student Visas",
    description: "Expert guidance for international student applications",
    icon: GraduationCap,
  },
  {
    title: "Work Permits",
    description: "Professional assistance with work visa applications",
    icon: Briefcase,
  },
  {
    title: "Family Sponsorship",
    description: "Unite with your loved ones through family sponsorship",
    icon: Users,
  },
  {
    title: "Permanent Residency",
    description: "Navigate the path to permanent residency with confidence",
    icon: Home,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-muted-foreground mt-4">
            Comprehensive immigration solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="#contact" className="text-primary hover:underline">
                  Learn More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
