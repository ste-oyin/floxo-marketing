import type { ReactNode } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = { title: "Pricing" };

const tiers = [
  {
    name: "Starter",
    price: "$79",
    priceDetail: "/mo",
    description: "Everything you need to understand traffic at a single store.",
    borderClass: "border-border",
    badge: null as string | null,
    recommended: false,
    features: [
      "1 location",
      "5 videos per month",
      "Heatmaps",
      "Basic analytics",
    ],
    cta: "Get started",
    href: "https://app.floxo.io/signup",
  },
  {
    name: "Growth",
    price: "$199",
    priceDetail: "/mo",
    description: "Scale insights across your footprint with full analytics and support.",
    borderClass: "border-2 border-coral/50 shadow-lg shadow-coral/10",
    badge: "Most popular",
    recommended: true,
    features: [
      "Up to 10 locations",
      "25 videos per month",
      "All analytics",
      "Smart suggestions",
      "Priority support",
    ],
    cta: "Get started",
    href: "https://app.floxo.io/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "",
    description: "Tailored deployments for large retail and operations teams.",
    borderClass: "border-border",
    badge: null as string | null,
    recommended: false,
    features: [
      "Unlimited locations",
      "Unlimited videos",
      "Custom integrations",
      "Dedicated support",
      "SLA",
    ],
    cta: "Contact sales",
    href: "/contact",
  },
] as const;

type ComparisonRow = {
  feature: string;
  starter: ReactNode;
  growth: ReactNode;
  enterprise: ReactNode;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Locations",
    starter: "1",
    growth: "Up to 10",
    enterprise: "Unlimited",
  },
  {
    feature: "Videos per month",
    starter: "5",
    growth: "25",
    enterprise: "Unlimited",
  },
  {
    feature: "Heatmaps",
    starter: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    growth: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Basic analytics",
    starter: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    growth: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Full analytics suite",
    starter: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    growth: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Smart suggestions",
    starter: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    growth: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Priority support",
    starter: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    growth: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Custom integrations",
    starter: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    growth: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
  {
    feature: "Dedicated support & SLA",
    starter: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    growth: <X className="mx-auto h-5 w-5 text-muted-foreground/60" aria-label="Not included" />,
    enterprise: <Check className="mx-auto h-5 w-5 text-teal" aria-label="Included" />,
  },
];

const faqs = [
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "What counts as a video analysis?",
    a: "Each uploaded store video that we process into heatmaps, paths, and analytics counts toward your monthly quota. Re-processing the same file typically does not count again unless you request a full re-run.",
  },
  {
    q: "Do you offer annual billing?",
    a: "We offer annual contracts on Growth and Enterprise with discounted rates. Contact sales for a quote tailored to your rollout timeline.",
  },
  {
    q: "Is my data secure?",
    a: "Floxo uses encryption in transit and at rest, role-based access, and infrastructure designed for retail compliance. Enterprise customers can review our security documentation and DPA.",
  },
  {
    q: "What kind of support do I get?",
    a: "Starter includes email support with standard response times. Growth adds priority support with faster SLAs. Enterprise includes a dedicated contact, onboarding, and contractual SLA options.",
  },
  {
    q: "Can Enterprise include custom integrations?",
    a: "Yes. Enterprise is built for your stack—POS, BI tools, data warehouses, and internal APIs. We scope integrations during onboarding so timelines and ownership are clear from day one.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pick the plan that matches your stores today—scale to more locations and
              deeper analytics when you are ready. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border bg-surface ${tier.borderClass} ${tier.recommended ? "lg:-mt-2 lg:mb-2" : ""}`}
            >
              {tier.badge ? (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                  <span className="inline-flex rounded-full border border-coral/30 bg-coral/15 px-3 py-1 text-xs font-medium text-coral">
                    {tier.badge}
                  </span>
                </div>
              ) : null}
              <div className="flex flex-1 flex-col border-b border-border/60 p-6 pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    {tier.name}
                  </h2>
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-1">
                  <span className="font-heading text-3xl font-semibold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  {tier.priceDetail ? (
                    <span className="text-muted-foreground">{tier.priceDetail}</span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <Link
                  href={tier.href}
                  className={`flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${
                    tier.recommended
                      ? "bg-coral text-white hover:bg-coral/90"
                      : "border border-border bg-transparent text-foreground hover:bg-muted/30"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground">
            Compare plans
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            See how features line up across Starter, Growth, and Enterprise.
          </p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-border bg-surface">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="px-4 py-4 font-medium text-foreground sm:px-6">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center font-medium text-foreground sm:px-6">
                    Starter
                  </th>
                  <th className="px-4 py-4 text-center font-medium text-coral sm:px-6">
                    Growth
                  </th>
                  <th className="px-4 py-4 text-center font-medium text-foreground sm:px-6">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/80 last:border-0"
                  >
                    <td className="px-4 py-4 text-muted-foreground sm:px-6">
                      {row.feature}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground sm:px-6">
                      {row.starter}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground sm:px-6">
                      {row.growth}
                    </td>
                    <td className="px-4 py-4 text-center text-foreground sm:px-6">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-16">
          <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            Quick answers about billing, security, and how Floxo fits your rollout.
          </p>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-border bg-surface px-4 py-1 open:pb-4"
              >
                <summary className="cursor-pointer list-none py-3 font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {faq.q}
                    <span
                      className="text-muted-foreground transition group-open:rotate-180"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </span>
                </summary>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
