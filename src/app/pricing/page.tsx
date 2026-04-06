import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = { title: "Pricing" };

const tiers = [
  {
    name: "Starter",
    price: "$299",
    priceDetail: "/mo",
    description: "For independent stores, 1–3 locations.",
    features: [
      "Heatmap analytics",
      "Path tracking",
      "Dwell time analysis",
      "Email support",
      "5 video analyses/month",
    ],
    cta: "Get started",
    href: "https://app.floxo.io/signup",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$199",
    priceDetail: "/mo per location",
    description: "For growing chains, 10–50 locations.",
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Smart suggestions",
      "Floor plan comparison",
      "Priority support",
      "Unlimited analyses",
    ],
    cta: "Get started",
    href: "https://app.floxo.io/signup",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "pricing",
    description: "For large retailers, 50+ locations.",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact sales",
    href: "/contact",
    highlighted: false,
  },
] as const;

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with a free pilot. Scale as you grow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={
                tier.highlighted
                  ? "relative z-10 scale-[1.02] border-2 border-primary shadow-lg lg:scale-105"
                  : "border-border/80"
              }
            >
              <CardHeader className="gap-3 border-b border-border/50 pb-6">
                <div className="flex flex-wrap items-center gap-2">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  {"badge" in tier && tier.badge ? (
                    <Badge>{tier.badge}</Badge>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-baseline gap-1">
                  <span className="font-heading text-3xl font-semibold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground">{tier.priceDetail}</span>
                </div>
                <CardDescription className="text-base">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {tier.features.map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t border-border/50 bg-transparent">
                <Button
                  variant={tier.highlighted ? "default" : "outline"}
                  size="lg"
                  className="w-full"
                  nativeButton={false}
                  render={<Link href={tier.href} />}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mt-12 border-primary/30 bg-primary/5 ring-1 ring-primary/15">
          <CardContent className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="space-y-2">
              <p className="font-heading text-lg font-medium text-foreground">
                Free Pilot
              </p>
              <p className="max-w-2xl text-muted-foreground">
                Not sure yet? Upload one video and see your heatmap in 24 hours. No
                credit card required.
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0"
              nativeButton={false}
              render={<Link href="/contact" />}
            >
              Start free pilot
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
