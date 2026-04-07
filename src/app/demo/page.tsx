import Link from "next/link";
import { BarChart3, Flame, Lightbulb, Play, Upload } from "lucide-react";

export const metadata = { title: "Demo" };

const walkthrough = [
  {
    icon: Upload,
    title: "Upload & Processing",
    description:
      "Drop in camera footage and let Floxo extract movement and spatial signals automatically—no manual tagging or prep work.",
  },
  {
    icon: Flame,
    title: "Heatmap Visualization",
    description:
      "See where attention concentrates on your floor plan with clear, color-coded density layers you can tune by time and zone.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track paths, dwell, and engagement in one place with charts and breakdowns that stay tied to the real layout of your space.",
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description:
      "Get prioritized layout ideas grounded in your data—so you can test changes with confidence instead of guessing.",
  },
] as const;

export default function DemoPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              See Floxo in Action
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore how the platform works end to end before you commit—watch
              the flow from upload to insight and decide if Floxo fits your team.
            </p>
          </div>

          <div className="relative mx-auto mt-12 aspect-video max-w-5xl overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
            <div
              className="absolute inset-0 bg-gradient-to-br from-muted/50 via-transparent to-coral/5"
              aria-hidden
            />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-coral text-coral-foreground shadow-lg ring-4 ring-coral/25"
                role="img"
                aria-label="Video placeholder"
              >
                <Play className="ml-1 h-9 w-9 fill-current" aria-hidden />
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Product demo video — coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Product walkthrough
          </h2>
          <p className="mt-3 text-muted-foreground">
            A quick tour of what you will see inside Floxo once your footage is
            in the system.
          </p>
        </div>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {walkthrough.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 === 1;

            return (
              <div
                key={item.title}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 ${
                  reverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div
                  className={`relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-surface sm:min-h-[260px] ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"
                    aria-hidden
                  />
                  <div className="flex h-full items-center justify-center p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border/80 bg-muted/30 text-coral">
                      <Icon className="h-10 w-10" strokeWidth={1.5} aria-hidden />
                    </div>
                  </div>
                  <p className="absolute bottom-4 left-4 right-4 text-center text-xs font-medium text-muted-foreground">
                    Screenshot placeholder
                  </p>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <h3 className="flex items-center gap-3 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    <Icon
                      className="h-7 w-7 shrink-0 text-coral"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-3xl border border-border bg-background px-8 py-12 text-center shadow-sm sm:px-12">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Ready to try it yourself?
            </h2>
            <p className="text-muted-foreground">
              Create an account and run Floxo on your own footage when you are
              ready—no credit card required to get started.
            </p>
            <Link
              href="https://floxo-app.vercel.app/signup"
              className="inline-flex h-11 items-center justify-center rounded-full bg-coral px-8 text-sm font-semibold text-white transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
