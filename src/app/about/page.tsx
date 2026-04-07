import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Camera,
  Cpu,
  HeartHandshake,
  RefreshCw,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata = { title: "About" };

const values = [
  {
    icon: BarChart3,
    title: "Data-Driven",
    description:
      "We treat the sales floor like a product: hypotheses, experiments, and measurable outcomes—not hunches dressed up as strategy.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Spatial intelligence without surveillance theater. We work from anonymized movement signals, not identities.",
  },
  {
    icon: HeartHandshake,
    title: "Retailer-Obsessed",
    description:
      "We build for store teams on the ground: clear visuals, practical next steps, and workflows that fit how retail actually runs.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Layouts are never “done.” Floxo is built to learn with every season, promotion, and reset—so insight compounds over time.",
  },
] as const;

const team = [
  {
    name: "Alex Chen",
    role: "Co-Founder & CEO",
    avatarClass: "bg-coral",
  },
  {
    name: "Jordan Rivera",
    role: "Head of Product",
    avatarClass: "bg-teal",
  },
  {
    name: "Sam Okonkwo",
    role: "Lead ML Engineer",
    avatarClass: "bg-chart-4",
  },
  {
    name: "Taylor Kim",
    role: "Director of Customer Success",
    avatarClass: "bg-chart-5",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,71,0.15),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-coral">
              Our story
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About Floxo
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We are on a mission to democratize spatial intelligence for retail.
              Every brand—whether you run ten doors or a thousand—deserves a
              clear picture of how shoppers move, where attention clusters, and
              which layout choices actually pay for the rent.
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-coral">
                <AlertTriangle className="size-6" aria-hidden />
              </div>
              <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                The problem
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Stores still lean on gut instinct for layout, adjacencies, and
                flow. Planograms change, seasons turn, and promotions land—but
                teams rarely see{" "}
                <span className="text-foreground">what actually happened</span>{" "}
                on the floor. Dead zones quietly drain revenue. Congestion
                frustrates shoppers. High-value paths never get the signage or
                staffing they deserve.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Meanwhile, the cost of square footage only goes up. Without
                spatial intelligence, every guess is an expensive bet.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-8">
              <ul className="space-y-5 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>
                    Layout decisions are informed by anecdotes, not consistent
                    measurement across locations.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>
                    Heat and flow change with campaigns—yet feedback loops are
                    slow and uneven from store to store.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  <span>
                    New sensors and rip-and-replace deployments are a heavy
                    lift most teams cannot justify.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-coral" aria-hidden />
              How we help
            </div>
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              The Floxo approach
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Floxo turns{" "}
              <span className="text-foreground">
                cameras you already have
              </span>{" "}
              into a steady stream of spatial insight. Our models translate
              video into anonymized paths, dwell patterns, and zone-level
              behavior—so you can optimize layouts with evidence, not opinion.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-coral/15 text-coral">
                <Camera className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                Use existing footage
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Connect security cameras or upload clips—no new hardware
                footprint required to get started.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-coral/15 text-coral">
                <Cpu className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                AI that respects privacy
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Models focus on movement and density—not identities—so you can
                measure the floor responsibly.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-coral/15 text-coral">
                <BarChart3 className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                Data-driven layout optimization
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Heatmaps, paths, and recommendations align teams on what to
                test next—from one store to your full fleet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What we value
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Principles that guide what we build and how we show up for
              retailers.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-coral/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-coral">
                  <Icon className="size-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-coral">
              <Users className="size-6" aria-hidden />
            </div>
            <h2 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Team
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              We are a small, focused group spanning product, computer vision, and
              retail operations—united by the belief that better spaces start
              with better visibility.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-surface p-6 text-center"
              >
                <div
                  className={`mx-auto h-16 w-16 rounded-full ${member.avatarClass}`}
                  aria-hidden
                />
                <p className="mt-4 font-heading font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Build smarter stores with Floxo
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you want to explore a pilot or talk through your fleet,
                we would love to hear from you.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <Link
                  href="https://floxo-app.vercel.app/signup"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-coral px-8 text-sm font-semibold text-white transition-all hover:brightness-110 sm:w-auto"
                >
                  Get started
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-semibold text-foreground transition-colors hover:border-coral/40 hover:text-coral sm:w-auto"
                >
                  Join us
                </Link>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer a guided walkthrough?{" "}
                <Link
                  href="/demo"
                  className="font-medium text-coral underline-offset-4 hover:underline"
                >
                  Book a demo
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
