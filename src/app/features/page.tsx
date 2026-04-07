import Link from "next/link";
import {
  AlertTriangle,
  BarChart3,
  Clock,
  EyeOff,
  Flame,
  GitCompareArrows,
  Lightbulb,
  PenTool,
  Route,
  Timer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = { title: "Features" };

type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  visualClass: string;
};

const features: FeatureItem[] = [
  {
    icon: Flame,
    title: "Heatmap Overlays",
    description:
      "Layer density maps directly on your floor plan so hot spots and cold zones stand out at a glance. Compare time windows to see how traffic shifts by hour, day, or campaign. Export views for stakeholders without leaving Floxo.",
    visualClass: "from-coral/30 via-coral/10 to-teal/5",
  },
  {
    icon: Route,
    title: "Path Analysis",
    description:
      "Reconstruct anonymized journeys from entry to exit and identify the routes people actually take—not the ones you assumed. Highlight dominant flows, detours, and choke points so you can redesign aisles and signage with evidence.",
    visualClass: "from-teal/25 via-background to-coral/15",
  },
  {
    icon: Clock,
    title: "Dwell Time Analytics",
    description:
      "Measure how long visitors stay in each zone to understand engagement versus abandonment. Set thresholds for alerts when dwell drops or spikes unexpectedly. Tie dwell to conversions and experiments to prioritize what to fix first.",
    visualClass: "from-coral/20 via-teal/15 to-background",
  },
  {
    icon: GitCompareArrows,
    title: "Zone Transitions",
    description:
      "See how movement flows between zones—where people enter, exit, and backtrack. Spot unintended cross-traffic and optimize adjacencies for merchandising and safety. Use transition matrices to validate layout changes over time.",
    visualClass: "from-teal/20 via-coral/10 to-background",
  },
  {
    icon: AlertTriangle,
    title: "Congestion Detection",
    description:
      "Automatically surface areas where density exceeds safe or comfortable levels before queues spill into walkways. Get alerts tied to time of day so staffing and signage can respond in real time. Reduce friction and protect throughput during peaks.",
    visualClass: "from-amber-500/15 via-coral/25 to-background",
  },
  {
    icon: EyeOff,
    title: "Dead Zone Detection",
    description:
      "Find underused corners and displays that never earn meaningful visits. Compare dead zones across locations to separate bad layout from bad local demand. Turn dead space into tests for new categories or experiences.",
    visualClass: "from-muted-foreground/10 via-background to-coral/15",
  },
  {
    icon: Timer,
    title: "Queue Time Estimation",
    description:
      "Estimate wait duration at checkout, service desks, and fitting rooms from movement patterns—without invasive tracking. Track trends before and after operational changes to prove impact. Give teams a number everyone can align on.",
    visualClass: "from-teal/30 via-coral/10 to-background",
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description:
      "Receive ranked recommendations for layout and signage grounded in your traffic and dwell data. Each suggestion ties to measurable outcomes so you can prioritize quick wins. Iterate faster than manual walk-throughs and spreadsheets.",
    visualClass: "from-coral/25 via-amber-400/10 to-teal/20",
  },
  {
    icon: PenTool,
    title: "Floor Plan Editor",
    description:
      "Draw and adjust zones on your plan so analytics match the real world—walls, departments, and temporary builds included. Version plans as you test changes without losing historical context. Keep one source of truth for every location.",
    visualClass: "from-teal/20 via-background to-coral/25",
  },
  {
    icon: BarChart3,
    title: "Layout Comparison",
    description:
      "Compare metrics across floor plans or time periods side by side to see what moved the needle. Roll up differences by zone, day, or store cluster for portfolio decisions. Make A/B tests for physical space as rigorous as digital ones.",
    visualClass: "from-coral/15 via-teal/25 to-coral/10",
  },
];

function FeatureVisual({
  gradientClass,
  children,
}: {
  gradientClass: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border/80 bg-surface p-8 lg:min-h-[280px]">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradientClass}`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative flex h-full min-h-[180px] items-center justify-center lg:min-h-[220px]">
        {children}
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Powerful Features
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              Floxo turns camera footage into spatial intelligence—so you can see
              how people move, where they linger, and how to shape the floor for
              better flow and stronger results.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-20 lg:space-y-28">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-coral/30 bg-coral/10 text-coral">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h2 className="font-heading mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {feature.description}
                  </p>
                </div>

                <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                  <FeatureVisual gradientClass={feature.visualClass}>
                    <div className="flex h-28 w-40 items-center justify-center rounded-xl border border-border/60 bg-background/40 shadow-lg backdrop-blur-sm">
                      <Icon className="h-14 w-14 text-teal/80" strokeWidth={1.25} aria-hidden />
                    </div>
                  </FeatureVisual>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-coral/90 via-coral to-[#ff8c47] p-10 text-center shadow-2xl shadow-coral/15 sm:p-14 lg:p-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to optimize your space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 sm:text-lg">
            Join retail teams who use Floxo to turn cameras into clarity—without
            new hardware or long integrations.
          </p>
          <div className="mt-10">
            <Link
              href="https://floxo-app.vercel.app/signup"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-semibold text-coral shadow-sm transition-colors hover:bg-white/90"
            >
              Get started free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
