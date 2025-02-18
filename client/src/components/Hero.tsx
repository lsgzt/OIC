import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your Gateway to Global
            <span className="text-primary"> Opportunities</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Professional immigration consulting services to help you achieve your
            dreams of living, working, and studying abroad.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="gap-2">
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#services"
              className="text-sm font-semibold leading-6 text-muted-foreground hover:text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
