import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-coral">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4C9.24 4 7 6.24 7 9c0 1.77.93 3.31 2.32 4.19C7.38 14.05 6 15.88 6 18h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-2.12-1.38-3.95-3.32-4.81A4.987 4.987 0 0 0 17 9c0-2.76-2.24-5-5-5Zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"
            fill="white"
          />
          <circle cx="10" cy="9" r="1" fill="white" />
          <circle cx="14" cy="9" r="1" fill="white" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Floxo
      </span>
    </Link>
  );
}
