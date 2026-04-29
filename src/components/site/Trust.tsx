import { ShieldCheck, Award, Lock, BadgeCheck, Users, Microscope } from "lucide-react";

const badges = [
  { icon: ShieldCheck, title: "MCI Registered", desc: "All doctors verified by Medical Council" },
  { icon: Microscope, title: "AI + Expert Verified", desc: "Every diagnosis reviewed by humans" },
  { icon: Lock, title: "100% Private & Secure", desc: "End-to-end encrypted consultations" },
  { icon: Award, title: "Clinically Proven", desc: "94% accuracy across 50+ conditions" },
];

const stats = [
  { v: "50K+", l: "Happy Patients" },
  { v: "200+", l: "Certified Doctors" },
  { v: "94%", l: "Accuracy Rate" },
  { v: "4.9★", l: "App Rating" },
];

export function Trust() {
  return (
    <section id="trust" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Why Trust DRDERMX</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">Doctor-led. <span className="text-gradient">AI-powered.</span> You-first.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {badges.map((b) => (
            <div key={b.title} className="flex gap-4 p-6 rounded-2xl bg-gradient-soft border border-border hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-card grid place-items-center shrink-0 shadow-card">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-primary p-10 shadow-glow grid grid-cols-2 lg:grid-cols-4 gap-8 text-primary-foreground">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-4xl sm:text-5xl font-display font-bold">{s.v}</p>
              <p className="text-sm opacity-90 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
