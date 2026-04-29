import { ScanFace, Scissors, Stethoscope, ClipboardList, RefreshCw } from "lucide-react";

const services = [
  { icon: ScanFace, title: "AI Skin Analysis", desc: "Acne, pigmentation, melasma, eczema and 50+ more conditions detected instantly.", tag: "Most Popular" },
  { icon: Scissors, title: "Hair Care Diagnosis", desc: "Hair fall, dandruff, scalp health and PRP eligibility — analyzed by AI.", tag: "New" },
  { icon: Stethoscope, title: "Doctor Consultation", desc: "Video or chat with MCI-registered dermatologists, 7 days a week." },
  { icon: ClipboardList, title: "Personalized Treatment", desc: "Prescription products and routines tailored to your skin profile." },
  { icon: RefreshCw, title: "Follow-up Support", desc: "30-day follow-ups, progress tracking and unlimited doctor messaging." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">Everything your skin & hair <span className="text-gradient">needs</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group relative bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
              {s.tag && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-gradient-primary text-primary-foreground px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              )}
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 shadow-glow">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
