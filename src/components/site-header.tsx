import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = { to: string; label: string; hash?: boolean };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/#experience", label: "Experience", hash: true },
  { to: "/reservations", label: "Reservations" },
];

interface SiteHeaderProps {
  transparentOnTop?: boolean;
}

export function SiteHeader({ transparentOnTop = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-6">
        <Link to="/" className="group flex items-baseline gap-2 min-w-0">
          <span className="font-display text-2xl tracking-[0.02em] text-bone transition-colors group-hover:text-honey md:text-[1.65rem]">
            Trailhead Table
          </span>
          <span className="hidden text-[0.6rem] tracking-[0.4em] text-honey/70 uppercase md:inline">
            Your Town · TZ
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) =>
            item.hash ? (
              <a
                key={item.to}
                href={item.to}
                className="text-[0.72rem] uppercase tracking-[0.28em] text-bone/80 transition-colors hover:text-honey"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to as never}
                className="text-[0.72rem] uppercase tracking-[0.28em] text-bone/80 transition-colors hover:text-honey [&.active]:text-honey"
                activeProps={{ className: "active" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ),
          )}
          <Button asChild variant="ember" size="sm" className="ml-2">
            <Link to="/reservations">Reserve</Link>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-bone p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden bg-charcoal/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[420px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {nav.map((item) =>
            item.hash ? (
              <a
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-bone hover:text-honey"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to as never}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-2xl text-bone hover:text-honey"
              >
                {item.label}
              </Link>
            ),
          )}
          <Button asChild variant="ember" size="lg" className="mt-4">
            <Link to="/reservations" onClick={() => setOpen(false)}>
              Reserve a Table
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
