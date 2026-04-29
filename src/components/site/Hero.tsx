import { ScanFace, Stethoscope, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import appMockup from "@/assets/app-mockup.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 overflow-hidden bg-gradient-hero">
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/70 backdrop-blur border border-border shadow-soft mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">MCI Registered Dermatologists</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Worried About <br />
            <span className="text-gradient">Skin & Hair</span> Problems?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Get AI-powered dermatology analysis in 30 seconds, plus an instant
            consultation with a real, certified doctor — all from your phone.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-95 shadow-glow rounded-full h-14 px-7 text-base">
              <a href="#contact"><ScanFace className="w-5 h-5" /> Scan Your Skin</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-7 text-base border-primary/30 hover:bg-primary/5">
              <a href="#contact"><Stethoscope className="w-5 h-5" /> Consult a Dermatologist</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#fbcfe8", "#e9d5ff", "#fce7f3", "#ddd6fe"].map((c, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">Trusted by 50,000+ patients</p>
            </div>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 rounded-full" />
          <div className="relative animate-float">
            <img
              src={appMockup}
              alt="DRDERMX skin analysis app on smartphone"
              width={1024}
              height={1280}
              className="relative mx-auto max-w-sm w-full rounded-3xl shadow-glow"
            />
          </div>
          <div className="absolute -left-4 top-12 bg-card border border-border rounded-2xl shadow-card p-4 w-48 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xs text-muted-foreground">Skin Score</p>
            <p className="text-3xl font-bold text-gradient">92<span className="text-lg">/100</span></p>
            <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[92%] bg-gradient-primary rounded-full" />
            </div>
          </div>
          <div className="absolute -right-2 bottom-16 bg-card border border-border rounded-2xl shadow-card p-3 flex items-center gap-2 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center">
              <ShieldCheck className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-semibold">Doctor Verified</p>
              <p className="text-[10px] text-muted-foreground">Dr. Aanya, MD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
