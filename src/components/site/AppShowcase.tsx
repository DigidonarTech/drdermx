import { Apple, Smartphone, Zap, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  { icon: Zap, title: "Instant Analysis", desc: "Results in under 30 seconds." },
  { icon: FileText, title: "Personalized Reports", desc: "Doctor-reviewed PDF reports." },
  { icon: MessageCircle, title: "Easy Consultation", desc: "Chat or video, anytime." },
];

export function AppShowcase() {
  return (
    <section id="app" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img
            src={appMockup}
            alt="DRDERMX skincare app preview"
            loading="lazy"
            width={1024}
            height={1280}
            className="relative mx-auto max-w-sm w-full rounded-3xl shadow-glow animate-float"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">The DRDERMX App</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">A dermatologist <span className="text-gradient">in your pocket.</span></h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Skin and hair health made effortless — track your progress, follow personalized routines and chat with your doctor anytime.
          </p>
          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-gradient-soft border border-border grid place-items-center shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl h-14 px-6">
              <Apple className="w-5 h-5" /> App Store
            </Button>
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl h-14 px-6">
              <Smartphone className="w-5 h-5" /> Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
