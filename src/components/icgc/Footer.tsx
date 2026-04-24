import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer id="contact" className="bg-primary text-primary-foreground">
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
            ICGC — Empowering Indian Students
          </p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
            India's trusted career guidance council for students after Class 12 and Diploma.
            Offering data-driven insights and honest counselling, one student at a time.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-accent">Navigate</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/70">
            <li><a href="#suitable" className="hover:text-accent">Suitable for</a></li>
            <li><a href="#tools" className="hover:text-accent">For Students</a></li>
            <li><a href="#why" className="hover:text-accent">Why Counselling</a></li>
            <li><a href="#book" className="hover:text-accent">Request Session</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" />info@indiancareerguidancecouncil.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" />+91 83789 00007</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Sambhajinagar, Maharashtra, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-accent">Session Availability</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" />Mon – Sat, 10 AM – 7 PM IST</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Online & in-person (Sambhajinagar)</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 Indian Career Guidance Council (ICGC). All rights reserved. Data-driven career guidance for Indian students — transparent, honest, and student-first.
      </div>
    </div>
  </footer>
);