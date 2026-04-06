import {
  Clock,
  Flame,
  LayoutGrid,
  Lightbulb,
  Route,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata = { title: "Features" };

type FeatureBlock = {
  icon: LucideIcon;
  title: string;
  description: string;
  capabilities: string[];
};

const features: FeatureBlock[] = [
  {
    icon: Flame,
    title: "Heatmap Analytics",
    description:
      "Visualize customer density across your floor plan with clarity you can act on.",
    capabilities: [
      "Real-time density mapping",
      "Gaussian-smoothed overlays",
      "Time-period filtering",
      "Zone-level aggregation",
    ],
  },
  {
    icon: Route,
    title: "Path Tracking",
    description:
      "Follow every customer journey from entry to exit and spot the routes that matter.",
    capabilities: [
      "Individual path visualization",
      "Dominant flow patterns",
      "Entry/exit analysis",
      "Path efficiency scoring",
    ],
  },
  {
    icon: Clock,
    title: "Dwell Time Analysis",
    description:
      "Know exactly where customers linger and which zones earn their attention.",
    capabilities: [
      "Zone-based dwell detection",
      "Configurable time thresholds",
      "Engagement rate calculation",
      "Dead zone identification",
    ],
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description:
      "AI-powered recommendations for layout changes grounded in your real traffic data.",
    capabilities: [
      "Data-backed placement advice",
      "Revenue impact estimates",
      "Before/after comparison",
      "Priority-ranked actions",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Floor Plan Comparison",
    description:
      "A/B test your physical space with side-by-side metrics and historical context.",
    capabilities: [
      "Side-by-side metrics",
      "Percentage change tracking",
      "Historical timeline view",
      "Multi-configuration support",
    ],
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "We track movement patterns, not people—built for trust from day one.",
    capabilities: [
      "No facial recognition",
      "Video deleted after processing",
      "GDPR-ready architecture",
      "Anonymized positional data only",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Everything you need to optimize your space
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Floxo turns security camera footage into spatial intelligence—heatmaps,
              paths, dwell insights, and layout recommendations in one platform.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className={cn(
                  "grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center",
                  isReversed && "lg:[&>div:first-child]:order-2"
                )}
              >
                <div
                  className={cn(
                    "flex min-h-[200px] items-center justify-center rounded-2xl border border-dashed border-border/80 bg-muted/40 p-10 lg:min-h-[280px]",
                    isReversed && "lg:order-2"
                  )}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                    <Icon
                      className="h-12 w-12 text-primary"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </div>
                </div>

                <Card
                  className={cn(
                    "border-border/80 shadow-sm",
                    isReversed && "lg:order-1"
                  )}
                >
                  <CardHeader className="gap-2">
                    <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Capabilities
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {feature.capabilities.map((cap) => (
                        <Badge key={cap} variant="secondary">
                          {cap}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
