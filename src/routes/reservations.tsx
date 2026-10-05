import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Check, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { images } from "@/lib/images";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Trailhead Table" },
      {
        name: "description",
        content:
          "Reserve a table at Trailhead Table, an eco-luxe farm-to-table restaurant at the foot of the Peak. Reservations only.",
      },
      { property: "og:title", content: "Reserve a Table — Trailhead Table" },
      {
        property: "og:description",
        content: "Book your evening beneath the lights and the mountain.",
      },
    ],
  }),
  component: ReservationsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(24, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(120),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please choose a time"),
  partySize: z.string().min(1, "Please choose your party size"),
  requests: z.string().max(500).optional(),
});

type FormData = z.infer<typeof schema>;

const times = [
  "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
];

function ReservationsPage() {
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      time: "",
      partySize: "",
      requests: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitted(data);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <SiteHeader />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-44">
        <div className="absolute inset-0 opacity-30">
          <img src={images.reservation} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
          {/* Left */}
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Reservations</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1] text-bone">
              Hold us a <br />
              <span className="italic text-honey">place at dusk.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone/70">
              We seat a small number of tables each evening. Reservations are
              required — we do not accept walk-ins. We'll confirm your booking
              by phone or email within a few hours.
            </p>

            <ul className="mt-12 space-y-5 text-sm text-bone/75">
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <div>
                  <p>Tuesday — Sunday · 17:30 – 22:30</p>
                  <p className="text-bone/50">Last seating at 21:30</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <p>Main Road, Old Town, Mountain Region, Your Country</p>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <a href="tel:+255700000000" className="hover:text-honey">
                  +255 700 000 000
                </a>
              </li>
            </ul>

            <div className="hairline my-12" />

            <p className="text-xs uppercase tracking-[0.25em] text-bone/45">
              Private dining & events
            </p>
            <p className="mt-3 max-w-md text-sm text-bone/65">
              For full restaurant buy-outs, weddings, and private events,
              please email{" "}
              <a className="text-honey hover:underline" href="mailto:events@example.com">
                events@example.com
              </a>
              .
            </p>
          </Reveal>

          {/* Right — Form */}
          <Reveal className="md:col-span-7" delay={150}>
            <div className="relative rounded-sm border border-bone/10 bg-charcoal-soft/80 p-7 backdrop-blur md:p-12">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-honey/40 bg-honey/10">
                    <Check className="h-6 w-6 text-honey" />
                  </div>
                  <h2 className="mt-6 font-display text-4xl text-bone">
                    Asante sana, {submitted.name.split(" ")[0]}.
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-sm text-bone/70">
                    We've received your request for{" "}
                    <span className="text-honey">
                      {submitted.partySize}{" "}
                      {Number(submitted.partySize) === 1 ? "guest" : "guests"}
                    </span>{" "}
                    on{" "}
                    <span className="text-honey">
                      {format(submitted.date, "EEEE, d MMMM")} at {submitted.time}
                    </span>
                    . We'll confirm by phone or email within a few hours.
                  </p>
                  <Button
                    variant="outlineLight"
                    size="lg"
                    className="mt-10"
                    onClick={() => {
                      setSubmitted(null);
                      form.reset();
                    }}
                  >
                    Make Another Booking
                  </Button>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                  <div>
                    <p className="eyebrow text-honey/80">Step 01 / Reservation</p>
                    <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">
                      Book your evening
                    </h2>
                  </div>

                  {/* Date & Time */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Date" error={form.formState.errors.date?.message}>
                      <Popover>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className={cn(
                              "flex h-12 w-full items-center justify-between rounded-sm border border-bone/15 bg-transparent px-4 text-left text-sm text-bone hover:border-honey/60",
                              !form.watch("date") && "text-bone/40",
                            )}
                          >
                            {form.watch("date")
                              ? format(form.watch("date"), "EEE, d MMM yyyy")
                              : "Select a date"}
                            <CalendarIcon className="h-4 w-4 text-honey" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={form.watch("date")}
                            onSelect={(d) => d && form.setValue("date", d, { shouldValidate: true })}
                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>

                    <Field label="Time" error={form.formState.errors.time?.message}>
                      <Select
                        value={form.watch("time")}
                        onValueChange={(v) => form.setValue("time", v, { shouldValidate: true })}
                      >
                        <SelectTrigger className="h-12 rounded-sm border-bone/15 bg-transparent text-sm">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {times.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Party Size" error={form.formState.errors.partySize?.message}>
                    <Select
                      value={form.watch("partySize")}
                      onValueChange={(v) => form.setValue("partySize", v, { shouldValidate: true })}
                    >
                      <SelectTrigger className="h-12 rounded-sm border-bone/15 bg-transparent text-sm">
                        <SelectValue placeholder="How many guests?" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <SelectItem key={n} value={String(n)}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </SelectItem>
                        ))}
                        <SelectItem value="9">9+ (we'll contact you)</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="hairline" />

                  <Field label="Full Name" error={form.formState.errors.name?.message}>
                    <Input
                      {...form.register("name")}
                      placeholder="Asha Mwangi"
                      className="h-12 rounded-sm border-bone/15 bg-transparent text-sm"
                    />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Phone" error={form.formState.errors.phone?.message}>
                      <Input
                        {...form.register("phone")}
                        type="tel"
                        placeholder="+255 700 000 000"
                        className="h-12 rounded-sm border-bone/15 bg-transparent text-sm"
                      />
                    </Field>
                    <Field label="Email" error={form.formState.errors.email?.message}>
                      <Input
                        {...form.register("email")}
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 rounded-sm border-bone/15 bg-transparent text-sm"
                      />
                    </Field>
                  </div>

                  <Field
                    label="Special Requests"
                    optional
                    error={form.formState.errors.requests?.message}
                  >
                    <Textarea
                      {...form.register("requests")}
                      placeholder="Allergies, celebrations, seating preferences…"
                      rows={4}
                      className="rounded-sm border-bone/15 bg-transparent text-sm"
                    />
                  </Field>

                  <Button type="submit" variant="ember" size="xl" className="w-full">
                    Request Reservation
                  </Button>
                  <p className="text-center text-[0.65rem] uppercase tracking-[0.28em] text-bone/40">
                    We confirm within a few hours
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-bone/55">
        <span>{label}</span>
        {optional && <span className="text-bone/30">Optional</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
