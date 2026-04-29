import { Camera, Brain, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  { icon: Camera, title: "Upload a Photo", desc: "Snap a clear photo of your skin or scalp concern in seconds." },
  { icon: Brain, title: "AI Detects Issues", desc: "Our medical AI identifies 50+ conditions with clinical accuracy." },
  { icon: Stethoscope, title: "Doctor Consultation", desc: "Connect instantly with a board-certified dermatologist." },
  { icon: HeartPulse, title: "Personalized Plan", desc: "Get a custom treatment plan delivered to your door." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">From concern to <span className="text-gradient">cure</span> in 4 steps</h2>
          <p className="mt-4 text-muted-foreground">No clinic visits. No long waits. Just clear answers backed by AI and real doctors.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center text-sm font-bold shadow-glow">
                {i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-soft border border-border grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
