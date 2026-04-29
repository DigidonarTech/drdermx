import { Sparkles, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Apple, Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">DRDERMX</span>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              AI-powered dermatology and trichology platform. Real doctors, real results, in your pocket.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Twitter].map((Ic, i) => (
                <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center transition-colors">
                  <Ic className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-background">AI Skin Analysis</a></li>
              <li><a href="#services" className="hover:text-background">Hair Diagnosis</a></li>
              <li><a href="#services" className="hover:text-background">Doctor Consultation</a></li>
              <li><a href="#services" className="hover:text-background">Treatment Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> care@drdermx.com</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Mumbai · Bengaluru · Delhi</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get the App</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="flex items-center gap-2 px-4 h-12 rounded-xl bg-background/10 hover:bg-background/20 transition-colors text-sm">
                <Apple className="w-5 h-5" /> Download on App Store
              </a>
              <a href="#" className="flex items-center gap-2 px-4 h-12 rounded-xl bg-background/10 hover:bg-background/20 transition-colors text-sm">
                <Smartphone className="w-5 h-5" /> Get it on Google Play
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <p>© 2026 DRDERMX (demo). All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Privacy Policy</a>
            <a href="#" className="hover:text-background">Terms of Service</a>
            <a href="#" className="hover:text-background">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
