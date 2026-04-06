import Link from "next/link";
import {
  Cpu,
  Flame,
  Lightbulb,
  Play,
  Route,
  TrendingUp,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { label: "Up to 23% revenue increase", hint: "from layout improvements" },
  { label: "Works with existing CCTV", hint: "no rip-and-replace" },
  { label: "Results in 24 hours", hint: "from first upload" },
  { label: "No new hardware", hint: "software-only deployment" },
];

const features = [
  {
    icon: Flame,
    title: "Heatmaps",
    description: "See exactly where customers spend time and which zones underperform.",
  },
  {
    icon: Route,
    title: "Path analysis",
    description: "Understand how people navigate your space from entrance to checkout.",
  },
  {
    icon: Lightbulb,
    title: "Smart suggestions",
    description: "Get AI-powered layout recommendations backed by real movement data.",
  },
];

const steps = [
  {
    icon: Upload,
    title: "Upload footage",
    description: "Connect your existing security cameras or upload clips—no new sensors.",
  },
  {
    icon: Cpu,
    title: "We analyze",
    description: "Our models turn video into anonymized paths, dwell time, and flow maps.",
  },
  {
    icon: TrendingUp,
    title: "You optimize",
    description: "Apply insights across 10–100 locations with consistent, measurable impact.",
  },
];

const placeholderBrands = [
  "Northline Retail",
  "Urban Goods Co.",
  "Harbor Markets",
  "Summit Outfitters",
  "Relay Stores",
  "Crestline Apparel",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-primary/10 via-accent/5 to-background px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/0.12,transparent)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium tracking-wide text-primary">
            Spatial intelligence for mid-market retail
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]">
            See how your space really moves
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Floxo turns your existing security camera footage into heatmaps, customer paths,
            and data-backed store layout recommendations—built for chains with 10–100
            locations, with no new hardware required.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant="default"
              size="lg"
              className="h-11 px-6 text-base"
              nativeButton={false}
              render={<Link href="https://app.floxo.io/signup" />}
            >
              Get started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 gap-2 border-border/80 bg-background/60 px-6 text-base backdrop-blur-sm"
              nativeButton={false}
              render={<Link href="/demo" />}
            >
              <Play className="size-4 fill-current" />
              Watch demo
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-muted/30 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center lg:text-left"
            >
              <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to read the floor
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              One platform for movement intelligence—so merchandising and ops teams align on
              the same picture of the store.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border/60 bg-card/80 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <feature.icon className="size-6 text-primary" aria-hidden />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-muted/20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              From raw footage to layout decisions in three straightforward steps.
            </p>
          </div>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border/60 bg-background shadow-sm">
                  <step.icon className="size-7 text-primary" aria-hidden />
                </div>
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Step {index + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Trusted by forward-thinking retailers
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Teams at growing chains use Floxo to align stores on what actually happens on the
            floor—not assumptions.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {placeholderBrands.map((name) => (
              <div
                key={name}
                className="flex h-11 min-w-[7.5rem] items-center justify-center rounded-lg bg-muted/80 px-5 ring-1 ring-border/50"
              >
                <span className="text-xs font-medium text-muted-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 via-primary to-accent/80 p-10 text-center shadow-lg sm:p-14 lg:p-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to optimize your space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90 sm:text-lg">
            Join retail teams who use Floxo to turn cameras into clarity—without new hardware
            or long integrations.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="h-11 px-8 text-base font-semibold shadow-sm"
              nativeButton={false}
              render={<Link href="https://app.floxo.io/signup" />}
            >
              Get started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
