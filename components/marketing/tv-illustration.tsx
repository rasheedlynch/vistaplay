export function TvIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="h-auto w-full"
      role="img"
      aria-hidden="true"
    >
      <rect
        x="40"
        y="40"
        width="400"
        height="260"
        rx="28"
        className="fill-white stroke-ink"
        strokeWidth="3"
      />
      <rect x="64" y="64" width="352" height="180" rx="16" className="fill-tint" />
      <circle cx="240" cy="154" r="34" className="fill-brand" />
      <path d="M230 138 L262 154 L230 170 Z" className="fill-white" />
      <rect x="80" y="262" width="120" height="10" rx="5" className="fill-line" />
      <rect x="210" y="262" width="80" height="10" rx="5" className="fill-line" />
      <rect x="216" y="300" width="48" height="14" rx="6" className="fill-ink/10" />
      <rect x="180" y="314" width="120" height="10" rx="5" className="fill-ink/10" />

      <rect
        x="320"
        y="210"
        width="120"
        height="200"
        rx="24"
        className="fill-white stroke-ink"
        strokeWidth="3"
      />
      <rect x="336" y="234" width="88" height="130" rx="12" className="fill-tint" />
      <circle cx="380" cy="299" r="20" className="fill-brand" />
      <path d="M374 289 L392 299 L374 309 Z" className="fill-white" />
      <rect x="368" y="382" width="24" height="6" rx="3" className="fill-line" />
    </svg>
  );
}
