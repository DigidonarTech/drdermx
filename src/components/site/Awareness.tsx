import { AlertTriangle, Activity, CircleDot, Bandage } from "lucide-react";

const issues = [
  { icon: CircleDot, title: "Mole changing shape", desc: "Asymmetry or sudden growth can be an early warning sign of melanoma." },
  { icon: Bandage, title: "Wounds not healing", desc: "Sores that linger for 3+ weeks need urgent dermatology attention." },
  { icon: Activity, title: "Itchy, scaly patches", desc: "Recurring patches may indicate eczema, psoriasis or fungal infection." },
  { icon: AlertTriangle, title: "Growing bumps", desc: "Painless lumps that grow over weeks should never be ignored." },
];

export function Awareness() {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Don't Ignore the Signs</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">
            Serious skin disorders <span className="text-gradient">often start small.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Early detection saves lives. If you notice any of these, scan with DRDERMX today — it takes 30 seconds.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {issues.map((i) => (
            <div key={i.title} className="bg-card rounded-3xl p-7 border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-destructive/10 grid place-items-center mb-4">
                <i.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-bold">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
