// Clean TV + phone mockup in the cinematic palette. Purely decorative.
export function DeviceMockup() {
  return (
    <svg viewBox="0 0 480 420" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="screen-glow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#E0A84F" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#E0A84F" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* TV */}
      <rect x="30" y="40" width="400" height="262" rx="22" className="fill-surface stroke-border-strong" strokeWidth="2" />
      <rect x="48" y="58" width="364" height="190" rx="12" className="fill-background" />
      <rect x="48" y="58" width="364" height="190" rx="12" fill="url(#screen-glow)" />
      <circle cx="230" cy="153" r="32" className="fill-none stroke-primary" strokeWidth="2.5" />
      <path d="M221 137 L248 153 L221 169 Z" className="fill-primary" />
      <rect x="72" y="214" width="150" height="6" rx="3" className="fill-border-strong" />
      <rect x="72" y="214" width="58" height="6" rx="3" className="fill-primary" />
      <rect x="72" y="228" width="70" height="5" rx="2.5" className="fill-border" />
      <rect x="205" y="266" width="50" height="8" rx="4" className="fill-border" />
      <rect x="195" y="302" width="70" height="12" rx="4" className="fill-border-strong" />
      <rect x="160" y="314" width="140" height="8" rx="4" className="fill-border" />
      {/* Phone */}
      <rect x="318" y="198" width="124" height="208" rx="24" className="fill-surface stroke-border-strong" strokeWidth="2" />
      <rect x="332" y="222" width="96" height="140" rx="10" className="fill-background" />
      <circle cx="380" cy="290" r="20" className="fill-none stroke-primary" strokeWidth="2" />
      <path d="M374 280 L392 290 L374 300 Z" className="fill-primary" />
      <rect x="338" y="342" width="60" height="4" rx="2" className="fill-border-strong" />
      <rect x="366" y="380" width="28" height="5" rx="2.5" className="fill-border-strong" />
    </svg>
  );
}
