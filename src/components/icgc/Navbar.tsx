import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "What We Do", href: "#what" },
  { label: "Suitable For", href: "#suitable" },
  { label: "For Students", href: "#tools" },
  { label: "Why Counselling", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3 transition-all ${
          scrolled
            ? "bg-primary/95 backdrop-blur shadow-soft mx-4 md:mx-auto"
            : "bg-transparent"
        }`}
      >
        <Logo light />
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#login"
            className="rounded-full border border-primary-foreground/30 px-4 py-2 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Login
          </a>
          <a
            href="#book"
            className="btn-playful rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground"
          >
            Book a Session
          </a>
        </div>
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-primary p-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-primary-foreground/80 hover:bg-primary-foreground/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 block rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-accent-foreground"
          >
            Book a Session
          </a>
        </div>
      )}
    </header>
  );
};