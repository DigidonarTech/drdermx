import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    role: "Acne — 8 weeks",
    text: "My cystic acne cleared up almost completely. The doctor adjusted my routine twice based on progress photos. Life-changing.",
    color: "#fbcfe8",
  },
  {
    name: "Arjun M.",
    role: "Hair fall — 12 weeks",
    text: "I was losing 100+ strands daily. The PRP recommendation and prescription serum brought it down to under 20. Honest and effective.",
    color: "#e9d5ff",
  },
  {
    name: "Neha K.",
    role: "Pigmentation — 6 weeks",
    text: "Years of melasma, gone. The AI report was eerily accurate and the dermatologist felt like a friend, not a salesperson.",
    color: "#fce7f3",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Real Results</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3">Loved by <span className="text-gradient">50,000+ patients</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="relative bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-glow transition-all hover:-translate-y-1">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15" />
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full grid place-items-center font-bold text-plum" style={{ background: r.color }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
