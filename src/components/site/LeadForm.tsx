import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number"),
  concern: z.enum(["skin", "hair", "both"]),
});

export function LeadForm() {
  const [concern, setConcern] = useState<"skin" | "hair" | "both">("skin");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      concern,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSubmitted(true);
    toast.success("Thanks! Our team will call you within 10 minutes.");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-glow border border-border bg-card">
          <div className="p-10 lg:p-12 bg-gradient-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <Sparkles className="w-8 h-8 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Get a Free Dermatology Consultation</h2>
            <p className="mt-4 opacity-90">Share your concern and our medical team will call you back within 10 minutes — no charges, no obligation.</p>
            <ul className="mt-8 space-y-3 text-sm">
              {["100% confidential", "MCI registered doctors", "AI-powered pre-screening", "First consult on us"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 lg:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-gradient-primary grid place-items-center shadow-glow mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">You're all set!</h3>
                <p className="text-muted-foreground mt-2 max-w-sm">Our care team will reach out within 10 minutes. Meanwhile, download the app to start your AI scan.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Aanya Sharma" required maxLength={80} className="mt-1.5 h-12 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required maxLength={20} className="mt-1.5 h-12 rounded-xl" />
                </div>
                <div>
                  <Label>Your Concern</Label>
                  <div className="mt-1.5 grid grid-cols-3 gap-2">
                    {(["skin", "hair", "both"] as const).map((c) => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setConcern(c)}
                        className={`h-12 rounded-xl border text-sm font-medium capitalize transition-all ${
                          concern === c
                            ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                            : "border-border bg-background hover:border-primary/40"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <Button type="submit" disabled={loading} size="lg" className="w-full bg-gradient-primary hover:opacity-95 rounded-xl h-13 text-base shadow-glow">
                  {loading ? "Submitting..." : "Get Free Consultation"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our Terms & Privacy Policy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
