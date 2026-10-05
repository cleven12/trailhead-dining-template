import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-charcoal pt-20 pb-10">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="eyebrow">Reservation only</p>
          <h3 className="mt-4 font-display text-4xl text-bone md:text-5xl">
            Trailhead Table
          </h3>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-bone/60">
            An eco-luxe table at the foot of the Peak. Hand-built from
            up-cycled wood, lit by hundreds of warm lights, set with food
            harvested that morning.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-honey hover:text-honey"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-honey hover:text-honey"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-bone/50">Visit</p>
          <ul className="mt-5 space-y-3 text-sm text-bone/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <span>
                Main Road<br />
                Old Town, Mountain Region<br />
                Your Country
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <a href="tel:+255700000000" className="hover:text-honey">
                +255 700 000 000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-bone/50">Hours</p>
          <ul className="mt-5 space-y-3 text-sm text-bone/75">
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
              <div>
                <p>Tuesday — Sunday</p>
                <p className="text-bone/55">17:30 — 22:30</p>
                <p className="mt-3 text-bone/55">Closed Mondays</p>
              </div>
            </li>
          </ul>
          <Link
            to="/reservations"
            className="mt-7 inline-block text-[0.72rem] uppercase tracking-[0.3em] text-honey hover:text-bone"
          >
            Reserve a table →
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/5 px-6 pt-8 text-[0.7rem] uppercase tracking-[0.25em] text-bone/40 md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} Trailhead Table</p>
        <p>Crafted in Your Town, Your Country</p>
      </div>
    </footer>
  );
}
