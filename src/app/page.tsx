import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Clock,
  Cpu,
  Eye,
  Flame,
  GitCompareArrows,
  Lightbulb,
  Play,
  Route,
  TrendingUp,
  Upload,
  Zap,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────── */

const stats = [
  { value: "23%", label: "Average revenue lift" },
  { value: "24h", label: "First insights" },
  { value: "0", label: "New hardware needed" },
  { value: "100+", label: "Locations supported" },
];

const insightCards = [
  {
    badge: "Premium insight",
    title: "Congestion Hotspot detected at Aisle 4",
    metric: "20%",
    metricLabel: "Congestion",
    color: "coral",
  },
  {
    badge: "Alert",
    title: "Dead Zone identified in Pharmacy corner",
    metric: "14%",
    metricLabel: "Metric",
    color: "amber",
  },
];

const steps = [
  {
    icon: Upload,
    step: "Step 1",
    title: "Upload footage.",
    description:
      "Connect your existing security cameras or upload clips — no new sensors.",
  },
  {
    icon: Cpu,
    step: "Step 2",
    title: "We analyze.",
    description:
      "Our models turn video into anonymized paths, dwell time, and flow maps.",
  },
  {
    icon: TrendingUp,
    step: "Step 3",
    title: "You optimize.",
    description:
      "Apply insights across 10–100 locations with consistent, measurable impact.",
  },
];

const features = [
  {
    icon: Flame,
    title: "Heatmap Overlays",
    description:
      "Visualize customer density and high-traffic zones with intuitive heatmaps.",
  },
  {
    icon: Route,
    title: "Path Analysis",
    description:
      "Trace typical customer journeys from entrance to checkout to identify flow bottlenecks.",
  },
  {
    icon: Clock,
    title: "Dwell Time",
    description:
      "Measure how long shoppers spend in specific areas to gauge engagement.",
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description:
      "Receive AI-powered layout recommendations backed by real movement data.",
  },
];

const brands = [
  "Northline Retail",
  "Urban Goods Co.",
  "Harbor Markets",
  "Summit Outfitters",
  "Relay Stores",
  "Crestline Apparel",
];

/* ────────────────────────────────────────────────────────────
   Decorative SVG components
   ──────────────────────────────────────────────────────────── */

function HeroFloorPlan() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-3xl bg-coral/20 blur-3xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-1">
        <svg
          viewBox="0 0 480 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <rect width="480" height="360" rx="8" fill="#0d1117" />
          {/* Walls */}
          <rect x="40" y="30" width="400" height="300" rx="4" stroke="#30363d" strokeWidth="2" fill="none" />
          <line x1="200" y1="30" x2="200" y2="200" stroke="#30363d" strokeWidth="1.5" />
          <line x1="320" y1="30" x2="320" y2="330" stroke="#30363d" strokeWidth="1.5" />
          <line x1="40" y1="200" x2="320" y2="200" stroke="#30363d" strokeWidth="1.5" />
          {/* Fixtures */}
          <rect x="60" y="50" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="60" y="80" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="130" y="50" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="130" y="80" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="60" y="120" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="60" y="150" width="50" height="15" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="220" y="50" width="80" height="40" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="220" y="110" width="80" height="40" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="340" y="50" width="80" height="20" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="340" y="90" width="80" height="20" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="340" y="130" width="80" height="20" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="60" y="220" width="100" height="30" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="60" y="270" width="100" height="30" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          <rect x="340" y="220" width="80" height="90" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="1" />
          {/* Heatmap blobs */}
          <ellipse cx="160" cy="130" rx="70" ry="50" fill="url(#heatRed)" opacity="0.7" />
          <ellipse cx="260" cy="90" rx="50" ry="40" fill="url(#heatOrange)" opacity="0.6" />
          <ellipse cx="380" cy="260" rx="40" ry="35" fill="url(#heatRed)" opacity="0.5" />
          <ellipse cx="100" cy="250" rx="50" ry="30" fill="url(#heatOrange)" opacity="0.4" />
          <ellipse cx="260" cy="260" rx="45" ry="35" fill="url(#heatYellow)" opacity="0.3" />
          {/* Path arrows */}
          <path d="M80 310 Q140 280 180 250 Q220 220 280 210 Q340 200 400 180" stroke="#ff6b47" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.6" />
          <path d="M100 310 Q160 270 220 260 Q280 250 360 280" stroke="#ff6b47" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.4" />
          {/* Arrow tips */}
          <circle cx="400" cy="180" r="3" fill="#ff6b47" opacity="0.6" />
          <circle cx="360" cy="280" r="3" fill="#ff6b47" opacity="0.4" />
          <defs>
            <radialGradient id="heatRed">
              <stop offset="0%" stopColor="#ff6b47" />
              <stop offset="100%" stopColor="#ff6b47" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heatOrange">
              <stop offset="0%" stopColor="#f0883e" />
              <stop offset="100%" stopColor="#f0883e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heatYellow">
              <stop offset="0%" stopColor="#f0c060" />
              <stop offset="100%" stopColor="#f0c060" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-surface">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-coral text-[10px] font-bold text-white">
          F
        </div>
        <span className="text-xs font-semibold text-foreground">
          Command Center
        </span>
        <div className="ml-auto h-6 w-32 rounded bg-white/5" />
      </div>
      <div className="grid gap-px bg-white/5 md:grid-cols-2">
        {/* Bar chart */}
        <div className="bg-surface p-4">
          <p className="mb-3 text-xs font-semibold text-foreground">
            Peak Hour Patterns
          </p>
          <div className="flex items-end gap-1.5" style={{ height: 100 }}>
            {[40, 25, 30, 55, 70, 85, 95, 80, 60, 45, 35, 50, 65, 75, 90, 70, 55, 40].map(
              (h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-coral/80"
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-muted-foreground">
            <span>7am</span>
            <span>12pm</span>
            <span>5pm</span>
            <span>9pm</span>
          </div>
        </div>
        {/* Network */}
        <div className="bg-surface p-4">
          <p className="mb-3 text-xs font-semibold text-foreground">
            Zone-to-Zone Transition
          </p>
          <svg
            viewBox="0 0 200 100"
            className="w-full"
            fill="none"
          >
            {/* Nodes */}
            {[
              [30, 20],
              [80, 50],
              [130, 25],
              [170, 55],
              [50, 80],
              [120, 75],
              [160, 85],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill="#ff6b47" opacity={0.8 - i * 0.05} />
                <circle cx={cx} cy={cy} r="3" fill="#0d1117" />
              </g>
            ))}
            {/* Edges */}
            {[
              [30, 20, 80, 50],
              [80, 50, 130, 25],
              [130, 25, 170, 55],
              [80, 50, 50, 80],
              [80, 50, 120, 75],
              [120, 75, 170, 55],
              [120, 75, 160, 85],
              [50, 80, 120, 75],
              [30, 20, 130, 25],
            ].map(([x1, y1, x2, y2], i) => (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#ff6b47"
                strokeWidth="1"
                opacity={0.3}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

function ComparisonPanel({
  title,
  variant,
}: {
  title: string;
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
      <div className="border-b border-black/5 px-5 py-3">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
      </div>
      <div className="p-4">
        <svg
          viewBox="0 0 300 200"
          fill="none"
          className="w-full rounded-lg"
        >
          <rect width="300" height="200" rx="6" fill="#1c2333" />
          {/* Grid */}
          <rect x="20" y="15" width="260" height="170" rx="3" stroke="#30363d" strokeWidth="1" fill="none" />
          <line x1="100" y1="15" x2="100" y2="185" stroke="#30363d" strokeWidth="0.5" />
          <line x1="180" y1="15" x2="180" y2="185" stroke="#30363d" strokeWidth="0.5" />
          <line x1="20" y1="90" x2="280" y2="90" stroke="#30363d" strokeWidth="0.5" />
          {/* Shelves */}
          {[35, 55, 75, 115, 135, 155].map((y) => (
            <g key={y}>
              <rect x="30" y={y} width="60" height="8" rx="1" fill="#21262d" stroke="#30363d" strokeWidth="0.5" />
              <rect x="110" y={y} width="60" height="8" rx="1" fill="#21262d" stroke="#30363d" strokeWidth="0.5" />
            </g>
          ))}
          <rect x="190" y="30" width="80" height="50" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="0.5" />
          <rect x="190" y="110" width="80" height="60" rx="2" fill="#21262d" stroke="#30363d" strokeWidth="0.5" />
          {/* Heatmap */}
          {isBefore ? (
            <>
              <ellipse cx="100" cy="80" rx="60" ry="45" fill="url(#cmpRed)" opacity="0.65" />
              <ellipse cx="230" cy="140" rx="40" ry="30" fill="url(#cmpRed)" opacity="0.5" />
              <ellipse cx="60" cy="150" rx="35" ry="25" fill="url(#cmpOrange)" opacity="0.45" />
            </>
          ) : (
            <>
              <ellipse cx="150" cy="100" rx="70" ry="50" fill="url(#cmpBlue)" opacity="0.4" />
              <ellipse cx="230" cy="70" rx="40" ry="30" fill="url(#cmpTeal)" opacity="0.35" />
              <ellipse cx="70" cy="140" rx="35" ry="25" fill="url(#cmpTeal)" opacity="0.3" />
            </>
          )}
          {/* Paths */}
          <path
            d={
              isBefore
                ? "M50 185 Q80 150 100 120 Q120 90 160 80 Q200 70 260 50"
                : "M50 185 Q100 150 150 130 Q200 110 250 60"
            }
            stroke={isBefore ? "#ff6b47" : "#3fb9a8"}
            strokeWidth="1.5"
            strokeDasharray="5 3"
            fill="none"
            opacity="0.7"
          />
          <defs>
            <radialGradient id="cmpRed">
              <stop offset="0%" stopColor="#ff6b47" />
              <stop offset="100%" stopColor="#ff6b47" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cmpOrange">
              <stop offset="0%" stopColor="#f0883e" />
              <stop offset="100%" stopColor="#f0883e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cmpBlue">
              <stop offset="0%" stopColor="#58a6ff" />
              <stop offset="100%" stopColor="#58a6ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="cmpTeal">
              <stop offset="0%" stopColor="#3fb9a8" />
              <stop offset="100%" stopColor="#3fb9a8" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="px-5 pb-4">
        {isBefore ? (
          <ul className="space-y-1 text-xs text-gray-600">
            <li>High Congestion Zones</li>
            <li>Low Engagement Areas</li>
            <li>Bottlenecks &amp; Dead Zones</li>
          </ul>
        ) : (
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="text-lg font-bold text-coral">+18%</span>
              <p className="text-[10px] text-gray-500">Sales Lift</p>
            </div>
            <div>
              <span className="text-lg font-bold text-teal">-22%</span>
              <p className="text-[10px] text-gray-500">Queue Time</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-600">Improved Flow</p>
              <p className="text-[10px] text-gray-500">&amp; Dwell Time</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-600">Reduced</p>
              <p className="text-[10px] text-gray-500">Dead Zones</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,107,71,0.12),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-medium tracking-wide text-coral">
              Spatial intelligence for mid-market retail
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              See how your space really moves
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Floxo turns your existing security camera footage into heatmaps,
              customer paths, and data-backed store layout
              recommendations&mdash;built for chains with 10&ndash;100
              locations, with no new hardware required.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://floxo-app.vercel.app/signup"
                className="inline-flex h-12 items-center rounded-full bg-coral px-7 text-sm font-semibold text-white shadow-lg shadow-coral/25 transition-all hover:brightness-110"
              >
                Get started
              </Link>
              <Link
                href="/demo"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                <Play className="size-4 fill-current" />
                Watch demo
              </Link>
            </div>
          </div>
          <HeroFloorPlan />
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="border-y border-border px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="text-3xl font-bold tracking-tight text-coral">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Command Center ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Command Center
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Floxo turns your existing security footage into heatmaps,
              actionable alerts, and rich analytics.
            </p>
          </div>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            {/* Left: insight cards */}
            <div className="space-y-5">
              {insightCards.map((card) => (
                <div
                  key={card.title}
                  className="overflow-hidden rounded-xl border border-coral/20 bg-surface p-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    {card.color === "coral" ? (
                      <Eye className="size-4 text-coral" />
                    ) : (
                      <AlertTriangle className="size-4 text-amber-400" />
                    )}
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-coral">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold">{card.title}</h3>
                  <div className="mt-4 flex items-center gap-6">
                    <div className="h-14 w-20 rounded bg-gradient-to-br from-coral/30 to-transparent" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {card.metricLabel}
                      </p>
                      <p className="text-2xl font-bold text-coral">
                        {card.metric}
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/features"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-coral"
                  >
                    Learn more <ArrowRight className="size-3" />
                  </Link>
                </div>
              ))}
            </div>
            {/* Right: dashboard mock */}
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* ─── Comparison (light section) ─── */}
      <section className="light-section bg-[#f8f9fb] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Floxo Layout Comparison Tool
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            See exactly how layout changes translate into measurable
            improvements.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ComparisonPanel title="Before Optimization" variant="before" />
            <ComparisonPanel title="After Optimization" variant="after" />
          </div>
          <div className="mt-10">
            <Link
              href="/demo"
              className="inline-flex h-12 items-center rounded-full bg-coral px-8 text-sm font-semibold text-white shadow-lg shadow-coral/20 transition-all hover:brightness-110"
            >
              See Detailed Report
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How it works ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            How Floxo works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            From raw footage to layout decisions in three straightforward steps.
          </p>
          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            {steps.map((step) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface shadow-sm">
                  <step.icon
                    className="size-6 text-coral"
                    aria-hidden
                  />
                </div>
                <span className="mb-1.5 text-[11px] font-bold uppercase tracking-widest text-coral">
                  {step.step}
                </span>
                <h3 className="font-heading text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Powerful Features ─── */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Everything you need to understand and optimize your physical space.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-coral/30"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-coral/10">
                  <f.icon className="size-5 text-coral" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social proof ─── */}
      <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            Trusted by forward-thinking retailers
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Teams at growing chains use Floxo to align stores on what actually
            happens on the floor.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {brands.map((name) => (
              <div
                key={name}
                className="flex h-11 min-w-[8rem] items-center justify-center rounded-lg border border-border bg-surface px-5"
              >
                <span className="text-xs font-medium text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-coral/90 via-coral to-[#ff8c47] p-10 text-center shadow-2xl shadow-coral/15 sm:p-14 lg:p-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to optimize your space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 sm:text-lg">
            Join retail teams who use Floxo to turn cameras into
            clarity&mdash;without new hardware or long integrations.
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
