import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Sprout } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/images";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Trailhead Table" },
      {
        name: "description",
        content:
          "A farm-to-table menu of local choma, international plates, and vegan dishes — built from what was harvested that morning.",
      },
      { property: "og:title", content: "Menu — Trailhead Table" },
      {
        property: "og:description",
        content: "local choma, international plates, and vegan dishes.",
      },
    ],
  }),
  component: MenuPage,
});

type Dish = {
  name: string;
  desc: string;
  price: string;
  tags?: ("V" | "VG")[];
};

const sections: { title: string; sub: string; dishes: Dish[] }[] = [
  {
    title: "To Begin",
    sub: "Starters",
    dishes: [
      {
        name: "Coconut & Lime Ceviche",
        desc: "Line-caught Pemba fish, young coconut, lime, chili, fresh herbs",
        price: "28,000",
      },
      {
        name: "Charred Eggplant",
        desc: "Smoked eggplant, sesame, sage oil, sourdough from our wood oven",
        price: "22,000",
        tags: ["VG"],
      },
      {
        name: "Mbuzi Sambusa",
        desc: "Hand-folded pastries, slow-braised goat, tamarind, mint",
        price: "24,000",
      },
      {
        name: "Garden Bowl",
        desc: "Morning harvest of leaves, herbs, edible flowers, lemon vinaigrette",
        price: "20,000",
        tags: ["VG"],
      },
    ],
  },
  {
    title: "From the Grill",
    sub: "local Choma",
    dishes: [
      {
        name: "Nyama Choma",
        desc: "Slow-charred grass-fed beef, kachumbari, smoked salt, charcoal flatbread",
        price: "42,000",
      },
      {
        name: "Kuku Wa Kupaka",
        desc: "Coal-grilled chicken, coconut & turmeric, jasmine rice",
        price: "38,000",
      },
      {
        name: "Mbuzi Choma",
        desc: "Whole-roasted mountain goat shoulder, herb butter (for two)",
        price: "120,000",
      },
      {
        name: "Lake Chala Tilapia",
        desc: "Charcoal-grilled whole fish, coconut wali, lime, sukuma wiki",
        price: "58,000",
      },
    ],
  },
  {
    title: "From the Kitchen",
    sub: "International",
    dishes: [
      {
        name: "Hand-Cut Tagliatelle",
        desc: "Heirloom tomato, basil, aged pecorino, olive oil from our trees",
        price: "32,000",
        tags: ["V"],
      },
      {
        name: "Wood-Fired Risotto",
        desc: "Forest mushrooms, sage, parmesan, finished tableside",
        price: "36,000",
        tags: ["V"],
      },
      {
        name: "Pan-Seared Duck",
        desc: "Heritage duck, charred stone fruit, jus, roasted greens",
        price: "62,000",
      },
      {
        name: "Highland Lamb",
        desc: "Mount Meru lamb, white bean, rosemary, red wine reduction",
        price: "68,000",
      },
    ],
  },
  {
    title: "Garden Plates",
    sub: "Vegan",
    dishes: [
      {
        name: "Summit Harvest",
        desc: "Roasted heirloom roots, sage oil, charred greens, dukkah",
        price: "36,000",
        tags: ["VG"],
      },
      {
        name: "Coconut Ugali",
        desc: "Stone-ground white maize, coconut, slow-braised greens",
        price: "26,000",
        tags: ["VG"],
      },
      {
        name: "Smoked Cauliflower",
        desc: "Whole-roasted cauliflower, peanut, tamarind, herb salad",
        price: "30,000",
        tags: ["VG"],
      },
    ],
  },
  {
    title: "To Finish",
    sub: "Desserts",
    dishes: [
      {
        name: "Honey & Cardamom Custard",
        desc: "Wildflower honey from our hives, cardamom, toasted seeds",
        price: "16,000",
        tags: ["V"],
      },
      {
        name: "Dark Chocolate Tart",
        desc: "Single-origin local cacao, salted caramel, sea salt",
        price: "18,000",
        tags: ["V"],
      },
      {
        name: "Coconut Sorbet",
        desc: "Young coconut, lime zest, candied ginger",
        price: "14,000",
        tags: ["VG"],
      },
    ],
  },
];

function TagPill({ tag }: { tag: "V" | "VG" }) {
  const map = {
    V: { label: "Vegetarian", short: "V" },
    VG: { label: "Vegan", short: "VG" },
  } as const;
  return (
    <span
      title={map[tag].label}
      className="inline-flex items-center gap-1 rounded-full border border-sage/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.18em] text-sage"
    >
      {tag === "VG" ? <Sprout className="h-2.5 w-2.5" /> : <Leaf className="h-2.5 w-2.5" />}
      {map[tag].short}
    </span>
  );
}

function MenuPage() {
  return (
    <div>
      <SiteHeader />

      {/* Heading */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-56 md:pb-28">
        <div className="absolute inset-0 opacity-25">
          <img src={images.menu} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/70 to-charcoal" />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow">The Menu</p>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] leading-[1] text-bone">
              What grew, <br />
              <span className="italic text-honey">what grazed,</span> <br />
              what the fire <span className="italic text-honey">touched.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-bone/70">
              Our menu changes with the harvest. Prices are in local
              shillings (local currency). Please tell your host of any allergies — we cook
              everything to order.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs text-bone/60">
              <TagPill tag="V" /> <span>Vegetarian</span>
              <span className="mx-2 h-1 w-1 rounded-full bg-bone/30" />
              <TagPill tag="VG" /> <span>Vegan</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          {sections.map((section, sIdx) => (
            <Reveal key={section.title} className="mb-24 md:mb-32" delay={sIdx * 60}>
              <div className="flex items-baseline justify-between gap-4 border-b border-bone/10 pb-6">
                <h2 className="font-display text-4xl text-bone md:text-5xl">
                  {section.title}
                </h2>
                <span className="eyebrow text-bone/45">{section.sub}</span>
              </div>

              <ul className="mt-10 space-y-10">
                {section.dishes.map((d) => (
                  <li
                    key={d.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-2 sm:gap-x-10"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-2xl text-bone">
                          {d.name}
                        </h3>
                        {d.tags?.map((t) => <TagPill key={t} tag={t} />)}
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-bone/60">
                        {d.desc}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="font-display text-xl text-honey">
                        {d.price}
                      </span>
                      <p className="text-[0.6rem] uppercase tracking-[0.2em] text-bone/40">
                        local currency
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
