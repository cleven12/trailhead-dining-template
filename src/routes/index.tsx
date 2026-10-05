import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles, Leaf, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trailhead Table — Eco-luxe dining beneath the Peak" },
      {
        name: "description",
        content:
          "A reservation-only farm-to-table restaurant in Old Town, Your Country. Hand-built, lit by hundreds of warm lights, with 360° views of the Peak.",
      },
      { property: "og:title", content: "Trailhead Table — Your Town, Your Country" },
      {
        property: "og:description",
        content:
          "Sunset dining beneath the Peak. Farm-to-table, hand-built, by reservation only.",
      },
      { property: "og:image", content: "https://images.unsplash.com/photo-1589182337358-2cb63099350c?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: Home,
});

const dishes = [
  {
    name: "Nyama Choma",
    note: "Slow-charred grass-fed beef, kachumbari, smoked salt",
    price: "42,000",
    img: images.dishChoma,
  },
  {
    name: "Lake Chala Tilapia",
    note: "Charcoal-grilled whole fish, coconut wali, lime",
    price: "58,000",
    img: images.dishMain,
  },
  {
    name: "Summit Harvest",
    note: "Roasted heirloom roots, sage oil, charred greens",
    price: "36,000",
    img: images.dishVegan,
    tag: "Vegan",
  },
];

function Home() {
  return (
    <div className="relative">
      <SiteHeader transparentOnTop />

      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="The Peak at golden hour above Your Town, Your Country"
            className="h-full w-full object-cover slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal" />
          <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
          <Reveal delay={200}>
            <p className="eyebrow">Old Town · Your Country · By reservation</p>
          </Reveal>
          <Reveal delay={400} as="div">
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-bone">
              Trailhead
              <br />
              <span className="italic text-honey">Table</span>
            </h1>
          </Reveal>
          <Reveal delay={650}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
              An open-air table at the foot of the Peak. Hand-built from
              up-cycled wood, lit by hundreds of warm lights, set with food
              harvested that morning.
            </p>
          </Reveal>
          <Reveal delay={850}>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <Button asChild variant="ember" size="xl">
                <Link to="/reservations">
                  Reserve a Table <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="#story"
                className="text-[0.72rem] uppercase tracking-[0.3em] text-bone/70 hover:text-honey"
              >
                Discover the place ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-end gap-2 md:flex">
          <span className="text-[0.6rem] uppercase tracking-[0.4em] text-bone/50">
            01 — Arrival
          </span>
          <span className="h-12 w-px bg-gradient-to-b from-honey/60 to-transparent" />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-28 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-bone md:text-6xl">
              Built by hand,<br />
              <span className="italic text-honey/90">grown by the land.</span>
            </h2>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" delay={150}>
            <div className="space-y-6 text-base leading-relaxed text-bone/70 md:text-lg">
              <p>
                Every beam, every chair, every railing was raised by neighbours
                from wood the forest had already let go of. Nothing new was
                cut. Nothing was shipped that didn't have to be.
              </p>
              <p>
                Our kitchen begins at sunrise in the shamba behind the
                restaurant — heirloom tomatoes, sage, amaranth, herbs still
                wet with dew — and ends at your table by candlelight.
              </p>
              <div className="hairline my-10" />
              <div className="grid grid-cols-3 gap-4 pt-2 text-xs uppercase tracking-[0.2em] text-bone/55">
                <div>
                  <Leaf className="mb-3 h-4 w-4 text-sage" />
                  Farm-to-table
                </div>
                <div>
                  <Sparkles className="mb-3 h-4 w-4 text-honey" />
                  Hand-built
                </div>
                <div>
                  <MapPin className="mb-3 h-4 w-4 text-ember" />
                  360° Views
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-24 max-w-7xl px-6 md:px-10" delay={200}>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
            <img
              src={images.story}
              alt="Hand-built wooden pavilion at dusk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative overflow-hidden bg-charcoal-soft py-28 md:py-40">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${images.experience})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-soft via-charcoal-soft/85 to-charcoal-soft" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">The Experience</p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-bone md:text-7xl">
              When the lights<br />come <span className="italic text-honey">alive.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
            {[
              {
                icon: Sparkles,
                title: "Sunset Service",
                body: "Doors open as the Peak turns rose-gold. Cocktails on the terrace, then dinner as dusk falls.",
              },
              {
                icon: Music,
                title: "Live Acoustic",
                body: "Local local musicians play softly through the evening — guitar, kora, voice. Never amplified.",
              },
              {
                icon: Leaf,
                title: "A Lit-Up Evening",
                body: "Hundreds of warm bulbs strung overhead. Candles on reclaimed wood. The sky finishes the room.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="border-t border-bone/15 pt-8">
                  <item.icon className="h-6 w-6 text-honey" />
                  <h3 className="mt-6 font-display text-2xl text-bone md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-bone/65 md:text-base">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Signature Plates</p>
              <h2 className="mt-6 font-display text-5xl text-bone md:text-6xl">
                From the <span className="italic text-honey">shamba.</span>
              </h2>
            </div>
            <Link
              to="/menu"
              className="text-[0.72rem] uppercase tracking-[0.3em] text-bone/70 hover:text-honey"
            >
              See the full menu →
            </Link>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {dishes.map((d, i) => (
              <Reveal key={d.name} delay={i * 120}>
                <article className="group">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-charcoal-soft">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    {d.tag && (
                      <span className="absolute left-4 top-4 rounded-full border border-sage/60 bg-charcoal/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-sage backdrop-blur">
                        {d.tag}
                      </span>
                    )}
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-bone">{d.name}</h3>
                    <span className="shrink-0 text-xs tracking-widest text-honey">
                      local currency {d.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-bone/60">{d.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section aria-label="Gallery" className="relative overflow-hidden py-16">
        <div className="flex gap-4 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-10">
          {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.experience].map((src, i) => (
            <div
              key={i}
              className="relative h-[60vh] min-h-[420px] w-[78vw] shrink-0 overflow-hidden rounded-sm md:w-[34vw]"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative overflow-hidden py-32 md:py-48">
        <div className="absolute inset-0">
          <img
            src={images.experience}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/80 to-charcoal" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="eyebrow">Advance reservation only</p>
            <h2 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[1] text-bone">
              Join us for the<br />
              <span className="italic text-honey">last light.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-bone/70 md:text-lg">
              Trailhead Table is reservation-only — no walk-ins. We hold a
              limited number of tables each evening so every guest can take in
              the mountain, the music, and the meal in full.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6">
              <Button asChild variant="ember" size="xl">
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-bone/55">
                <MapPin className="h-3.5 w-3.5 text-honey" />
                Main Road · Old Town · the Peak
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
