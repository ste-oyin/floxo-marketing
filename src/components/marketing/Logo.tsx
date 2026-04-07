import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6b47" />
            <stop offset="100%" stopColor="#e8a87c" />
          </linearGradient>
        </defs>
        {/* Rounded square outline */}
        <rect x="2" y="2" width="44" height="44" rx="10" stroke="url(#logoGrad)" strokeWidth="2.5" fill="none" />
        {/* Filmstrip tick marks — top */}
        {[11, 17, 23, 29, 35].map((x) => (
          <line key={`t${x}`} x1={x} y1="2" x2={x} y2="7" stroke="url(#logoGrad)" strokeWidth="1.2" />
        ))}
        {/* Filmstrip tick marks — bottom */}
        {[11, 17, 23, 29, 35].map((x) => (
          <line key={`b${x}`} x1={x} y1="41" x2={x} y2="46" stroke="url(#logoGrad)" strokeWidth="1.2" />
        ))}
        {/* Filmstrip tick marks — left */}
        {[11, 17, 23, 29, 35].map((y) => (
          <line key={`l${y}`} x1="2" y1={y} x2="7" y2={y} stroke="url(#logoGrad)" strokeWidth="1.2" />
        ))}
        {/* Filmstrip tick marks — right */}
        {[11, 17, 23, 29, 35].map((y) => (
          <line key={`r${y}`} x1="41" y1={y} x2="46" y2={y} stroke="url(#logoGrad)" strokeWidth="1.2" />
        ))}
        {/* Eye shape — two mirrored beziers */}
        <path
          d="M10 24 Q18 14 24 14 Q30 14 38 24 Q30 34 24 34 Q18 34 10 24Z"
          stroke="url(#logoGrad)"
          strokeWidth="2"
          fill="none"
        />
        {/* Iris */}
        <circle cx="24" cy="24" r="5.5" stroke="url(#logoGrad)" strokeWidth="1.8" fill="none" />
        {/* Pupil */}
        <circle cx="24" cy="24" r="2.5" fill="url(#logoGrad)" />
        {/* Highlight dot */}
        <circle cx="22" cy="22" r="1.2" fill="#ffffff" opacity="0.9" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Floxo
      </span>
    </Link>
  );
}
