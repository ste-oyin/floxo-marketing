import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Clock,
  Cpu,
  Eye,
  Flame,
  Lightbulb,
  Play,
  Route,
  TrendingUp,
  Upload,
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
   Shared SVG helpers — store floor plan building blocks
   ──────────────────────────────────────────────────────────── */

const W = "#3a4a5a";

function Gondola({ x, y, rows, w = 50 }: { x: number; y: number; rows: number; w?: number }) {
  const spacing = 6;
  return (
    <g>
      {Array.from({ length: rows }).map((_, i) => (
        <line
          key={i}
          x1={x}
          y1={y + i * spacing}
          x2={x + w}
          y2={y + i * spacing}
          stroke={W}
          strokeWidth="1"
        />
      ))}
    </g>
  );
}

/* ────────────────────────────────────────────────────────────
   Hero Floor Plan (detailed, with glow heatmap)
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

          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
            <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
            </filter>
            <radialGradient id="hRed">
              <stop offset="0%" stopColor="#ff6b47" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#ff6b47" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff6b47" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hOrange">
              <stop offset="0%" stopColor="#f0883e" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#f0883e" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f0883e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="hYellow">
              <stop offset="0%" stopColor="#f0c060" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#f0c060" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f0c060" stopOpacity="0" />
            </radialGradient>
            <marker id="arrowHead" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
              <polygon points="0,0 6,2.5 0,5" fill="#e8a87c" opacity="0.8" />
            </marker>
          </defs>

          {/* ── Walls (thin strokes only) ── */}
          <rect x="35" y="25" width="410" height="310" rx="3" stroke={W} strokeWidth="1.5" fill="none" />
          {/* Entrance gap bottom-left */}
          <line x1="35" y1="300" x2="35" y2="335" stroke="#0d1117" strokeWidth="3" />
          {/* Interior walls */}
          <line x1="195" y1="25" x2="195" y2="195" stroke={W} strokeWidth="1" />
          <line x1="310" y1="25" x2="310" y2="335" stroke={W} strokeWidth="1" />
          <line x1="35" y1="195" x2="310" y2="195" stroke={W} strokeWidth="1" />
          {/* Small rooms top-left partition */}
          <line x1="35" y1="120" x2="100" y2="120" stroke={W} strokeWidth="0.8" />

          {/* ── Gondola shelves — parallel thin lines ── */}
          {/* Top-left room — 3 gondolas */}
          <Gondola x={50} y={40} rows={5} w={55} />
          <Gondola x={50} y={72} rows={5} w={55} />
          <Gondola x={120} y={40} rows={5} w={60} />
          <Gondola x={120} y={72} rows={5} w={60} />

          {/* Below partition */}
          <Gondola x={50} y={132} rows={4} w={55} />
          <Gondola x={120} y={132} rows={4} w={60} />
          <Gondola x={50} y={162} rows={4} w={55} />
          <Gondola x={120} y={162} rows={4} w={60} />

          {/* Center area */}
          <Gondola x={210} y={40} rows={5} w={85} />
          <Gondola x={210} y={78} rows={5} w={85} />
          <Gondola x={210} y={116} rows={5} w={85} />
          <Gondola x={210} y={154} rows={5} w={85} />

          {/* Right wing */}
          <Gondola x={325} y={40} rows={5} w={105} />
          <Gondola x={325} y={78} rows={5} w={105} />
          <Gondola x={325} y={116} rows={5} w={105} />
          <Gondola x={325} y={154} rows={5} w={105} />
          <Gondola x={325} y={200} rows={5} w={105} />
          <Gondola x={325} y={240} rows={5} w={105} />

          {/* Bottom-left area */}
          <Gondola x={50} y={210} rows={4} w={110} />
          <Gondola x={50} y={240} rows={4} w={110} />
          <Gondola x={175} y={210} rows={4} w={120} />
          <Gondola x={175} y={240} rows={4} w={120} />

          {/* ── Checkout counters at the bottom ── */}
          {[60, 120, 180, 240].map((cx) => (
            <g key={cx}>
              <rect x={cx} y={300} width={40} height={18} rx="2" stroke={W} strokeWidth="1" fill="none" />
              <rect x={cx + 28} y={303} width={8} height={12} rx="1" stroke={W} strokeWidth="0.7" fill="none" />
            </g>
          ))}

          {/* ── Heatmap overlay (blurred glow) ── */}
          <g filter="url(#glowSoft)">
            {/* Main hot corridor across top aisles */}
            <ellipse cx="130" cy="65" rx="80" ry="30" fill="url(#hRed)" />
            <ellipse cx="260" cy="65" rx="70" ry="28" fill="url(#hOrange)" />
            <ellipse cx="380" cy="65" rx="55" ry="25" fill="url(#hOrange)" />
            {/* Mid section heat */}
            <ellipse cx="130" cy="150" rx="70" ry="25" fill="url(#hOrange)" />
            <ellipse cx="260" cy="140" rx="65" ry="30" fill="url(#hRed)" />
            <ellipse cx="380" cy="150" rx="50" ry="28" fill="url(#hRed)" />
            {/* Bottom area */}
            <ellipse cx="140" cy="230" rx="80" ry="22" fill="url(#hOrange)" />
            <ellipse cx="260" cy="225" rx="60" ry="20" fill="url(#hYellow)" />
            <ellipse cx="380" cy="230" rx="50" ry="28" fill="url(#hRed)" />
            {/* Checkout heat */}
            <ellipse cx="160" cy="305" rx="100" ry="18" fill="url(#hRed)" />
            {/* Connecting corridor blobs */}
            <ellipse cx="190" cy="100" rx="20" ry="50" fill="url(#hOrange)" />
            <ellipse cx="310" cy="180" rx="15" ry="60" fill="url(#hOrange)" />
            <ellipse cx="100" cy="195" rx="60" ry="12" fill="url(#hYellow)" />
          </g>

          {/* Secondary glow layer for extra intensity at hot spots */}
          <g filter="url(#glow)" opacity="0.5">
            <ellipse cx="130" cy="65" rx="40" ry="15" fill="#ff6b47" />
            <ellipse cx="260" cy="140" rx="35" ry="15" fill="#ff6b47" />
            <ellipse cx="380" cy="230" rx="30" ry="15" fill="#ff6b47" />
            <ellipse cx="160" cy="305" rx="50" ry="10" fill="#ff6b47" />
          </g>

          {/* ── Path arrows (dotted + triangle markers) ── */}
          <path
            d="M42 320 Q60 290 100 270 Q150 250 200 200 Q240 170 270 130 Q290 100 320 70 Q360 40 430 45"
            stroke="#e8a87c"
            strokeWidth="1.2"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.7"
            markerEnd="url(#arrowHead)"
          />
          <path
            d="M42 325 Q80 300 140 280 Q200 260 250 240 Q280 225 300 210 Q315 195 320 180"
            stroke="#e8a87c"
            strokeWidth="1.2"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.55"
            markerEnd="url(#arrowHead)"
          />
          <path
            d="M42 315 Q70 280 110 250 Q130 235 140 215 Q155 200 210 200 Q250 200 290 250 Q320 280 380 290 Q410 295 435 280"
            stroke="#e8a87c"
            strokeWidth="1.2"
            strokeDasharray="5 4"
            fill="none"
            opacity="0.45"
            markerEnd="url(#arrowHead)"
          />
          <path
            d="M42 330 Q90 310 130 310 Q170 305 200 305"
            stroke="#e8a87c"
            strokeWidth="1"
            strokeDasharray="4 3"
            fill="none"
            opacity="0.35"
            markerEnd="url(#arrowHead)"
          />
        </svg>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Dashboard Mock
   ──────────────────────────────────────────────────────────── */

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
        <div className="bg-surface p-4">
          <p className="mb-3 text-xs font-semibold text-foreground">
            Zone-to-Zone Transition
          </p>
          <svg viewBox="0 0 200 100" className="w-full" fill="none">
            {[
              [30, 20], [80, 50], [130, 25], [170, 55],
              [50, 80], [120, 75], [160, 85],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill="#ff6b47" opacity={0.8 - i * 0.05} />
                <circle cx={cx} cy={cy} r="3" fill="#0d1117" />
              </g>
            ))}
            {[
              [30, 20, 80, 50], [80, 50, 130, 25], [130, 25, 170, 55],
              [80, 50, 50, 80], [80, 50, 120, 75], [120, 75, 170, 55],
              [120, 75, 160, 85], [50, 80, 120, 75], [30, 20, 130, 25],
            ].map(([x1, y1, x2, y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ff6b47" strokeWidth="1" opacity={0.3} />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Comparison Panel (dark themed, architectural SVGs)
   ──────────────────────────────────────────────────────────── */

function ComparisonPanel({
  title,
  variant,
}: {
  title: string;
  variant: "before" | "after";
}) {
  const isBefore = variant === "before";
  const prefix = isBefore ? "b" : "a";

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="border-b border-border px-5 py-3">
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <div className="p-4">
        <svg viewBox="0 0 300 200" fill="none" className="w-full rounded-lg">
          <rect width="300" height="200" rx="6" fill="#0d1117" />

          <defs>
            <filter id={`${prefix}Glow`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
            <radialGradient id={`${prefix}Red`}>
              <stop offset="0%" stopColor="#ff6b47" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ff6b47" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ff6b47" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`${prefix}Orange`}>
              <stop offset="0%" stopColor="#f0883e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f0883e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f0883e" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`${prefix}Blue`}>
              <stop offset="0%" stopColor="#58a6ff" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#58a6ff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#58a6ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id={`${prefix}Teal`}>
              <stop offset="0%" stopColor="#3fb9a8" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#3fb9a8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3fb9a8" stopOpacity="0" />
            </radialGradient>
            <marker id={`${prefix}Arrow`} markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto">
              <polygon points="0,0 5,2 0,4" fill={isBefore ? "#e8a87c" : "#3fb9a8"} opacity="0.7" />
            </marker>
          </defs>

          {/* Walls */}
          <rect x="15" y="10" width="270" height="175" rx="2" stroke="#3a4a5a" strokeWidth="1" fill="none" />
          <line x1="110" y1="10" x2="110" y2="130" stroke="#3a4a5a" strokeWidth="0.7" />
          <line x1="190" y1="10" x2="190" y2="185" stroke="#3a4a5a" strokeWidth="0.7" />
          <line x1="15" y1="130" x2="190" y2="130" stroke="#3a4a5a" strokeWidth="0.7" />

          {/* Gondola shelves as parallel lines */}
          {/* Left top */}
          {[25, 30, 35, 40, 45].map((y) => (
            <line key={`lt${y}`} x1="25" y1={y} x2="70" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[58, 63, 68, 73, 78].map((y) => (
            <line key={`lt2${y}`} x1="25" y1={y} x2="70" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[25, 30, 35, 40, 45].map((y) => (
            <line key={`lt3${y}`} x1="78" y1={y} x2="100" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[58, 63, 68, 73, 78].map((y) => (
            <line key={`lt4${y}`} x1="78" y1={y} x2="100" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {/* Left bottom */}
          {[92, 97, 102, 107].map((y) => (
            <line key={`lb${y}`} x1="25" y1={y} x2="70" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[92, 97, 102, 107].map((y) => (
            <line key={`lb2${y}`} x1="78" y1={y} x2="100" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {/* Center gondolas */}
          {[25, 30, 35, 40, 45].map((y) => (
            <line key={`c1${y}`} x1="120" y1={y} x2="180" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[58, 63, 68, 73, 78].map((y) => (
            <line key={`c2${y}`} x1="120" y1={y} x2="180" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[92, 97, 102, 107].map((y) => (
            <line key={`c3${y}`} x1="120" y1={y} x2="180" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {/* Right wing gondolas */}
          {[25, 30, 35, 40, 45].map((y) => (
            <line key={`r1${y}`} x1="200" y1={y} x2="275" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[58, 63, 68, 73, 78].map((y) => (
            <line key={`r2${y}`} x1="200" y1={y} x2="275" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[92, 97, 102, 107].map((y) => (
            <line key={`r3${y}`} x1="200" y1={y} x2="275" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[120, 125, 130, 135, 140].map((y) => (
            <line key={`r4${y}`} x1="200" y1={y} x2="275" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {/* Bottom area shelves */}
          {[142, 147, 152, 157].map((y) => (
            <line key={`btm${y}`} x1="25" y1={y} x2="100" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {[142, 147, 152, 157].map((y) => (
            <line key={`btm2${y}`} x1="120" y1={y} x2="180" y2={y} stroke="#3a4a5a" strokeWidth="0.6" />
          ))}
          {/* Checkout counters */}
          {[30, 70, 110, 150].map((cx) => (
            <g key={`ck${cx}`}>
              <rect x={cx} y={172} width={25} height={10} rx="1" stroke="#3a4a5a" strokeWidth="0.6" fill="none" />
              <rect x={cx + 18} y={174} width={5} height={6} rx="0.5" stroke="#3a4a5a" strokeWidth="0.5" fill="none" />
            </g>
          ))}

          {/* Heatmap */}
          <g filter={`url(#${prefix}Glow)`}>
            {isBefore ? (
              <>
                <ellipse cx="65" cy="60" rx="45" ry="28" fill={`url(#${prefix}Red)`} />
                <ellipse cx="150" cy="65" rx="40" ry="30" fill={`url(#${prefix}Red)`} />
                <ellipse cx="240" cy="60" rx="38" ry="25" fill={`url(#${prefix}Orange)`} />
                <ellipse cx="65" cy="100" rx="40" ry="18" fill={`url(#${prefix}Orange)`} />
                <ellipse cx="150" cy="100" rx="35" ry="15" fill={`url(#${prefix}Red)`} />
                <ellipse cx="240" cy="130" rx="35" ry="25" fill={`url(#${prefix}Red)`} />
                <ellipse cx="100" cy="175" rx="55" ry="12" fill={`url(#${prefix}Orange)`} />
              </>
            ) : (
              <>
                <ellipse cx="65" cy="60" rx="40" ry="22" fill={`url(#${prefix}Teal)`} />
                <ellipse cx="150" cy="65" rx="50" ry="25" fill={`url(#${prefix}Blue)`} />
                <ellipse cx="240" cy="70" rx="35" ry="25" fill={`url(#${prefix}Teal)`} />
                <ellipse cx="100" cy="130" rx="30" ry="15" fill={`url(#${prefix}Blue)`} />
                <ellipse cx="240" cy="140" rx="30" ry="20" fill={`url(#${prefix}Teal)`} />
                <ellipse cx="100" cy="175" rx="55" ry="10" fill={`url(#${prefix}Teal)`} />
              </>
            )}
          </g>

          {/* Paths */}
          {isBefore ? (
            <>
              <path d="M20 182 Q50 160 70 130 Q90 100 130 80 Q170 60 250 40" stroke="#e8a87c" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.6" markerEnd={`url(#${prefix}Arrow)`} />
              <path d="M20 185 Q70 170 100 150 Q140 130 180 120 Q210 112 250 100" stroke="#e8a87c" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.4" markerEnd={`url(#${prefix}Arrow)`} />
            </>
          ) : (
            <>
              <path d="M20 182 Q60 155 100 120 Q140 90 180 70 Q220 50 270 35" stroke="#3fb9a8" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.6" markerEnd={`url(#${prefix}Arrow)`} />
              <path d="M20 185 Q80 165 140 145 Q190 130 230 110 Q260 95 275 75" stroke="#3fb9a8" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.45" markerEnd={`url(#${prefix}Arrow)`} />
              <path d="M20 178 Q50 150 80 130 Q100 115 110 100 Q125 80 150 60" stroke="#3fb9a8" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.35" markerEnd={`url(#${prefix}Arrow)`} />
            </>
          )}
        </svg>
      </div>
      <div className="px-5 pb-4">
        {isBefore ? (
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>High Congestion Zones</li>
            <li>Low Engagement Areas</li>
            <li>Bottlenecks &amp; Dead Zones</li>
          </ul>
        ) : (
          <div className="flex flex-wrap gap-4">
            <div>
              <span className="text-lg font-bold text-coral">+18%</span>
              <p className="text-[10px] text-muted-foreground">Sales Lift</p>
            </div>
            <div>
              <span className="text-lg font-bold text-teal">-22%</span>
              <p className="text-[10px] text-muted-foreground">Queue Time</p>
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Improved Flow</p>
              <p className="text-[10px] text-muted-foreground">&amp; Dwell Time</p>
            </div>
            <div>
              <p className="text-xs font-medium text-foreground">Reduced</p>
              <p className="text-[10px] text-muted-foreground">Dead Zones</p>
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
            <DashboardMock />
          </div>
        </div>
      </section>

      {/* ─── Comparison (dark themed) ─── */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Floxo Layout Comparison Tool
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
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
                  <step.icon className="size-6 text-coral" aria-hidden />
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
