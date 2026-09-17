/**
 * Foxcroft's existing mark, redrawn as vector.
 *
 * The original is a 252x180 PNG that falls apart above about 120px wide. The
 * concept is unchanged: driving rain, a sheltering arc, a house underneath.
 * Colours are taken from the original artwork.
 */

type MarkProps = {
  className?: string;
  title?: string;
};

export function FoxcroftMark({ className = "", title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 76 58"
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Driving rain, off the top left */}
      <g stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" opacity="0.55">
        <path d="M6 13 L12 5" />
        <path d="M17 10 L23 2" />
        <path d="M28 8 L34 0" />
        <path d="M2 24 L8 16" />
        <path d="M13 21 L19 13" />
      </g>

      {/* The sheltering arc, sweeping right over the house */}
      <path
        d="M4 44C8 24 24 12 44 14c14 1.5 24 8 28 16"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
      />

      {/* House beneath it */}
      <path d="M28 56V38l14-11 14 11v18H28Z" fill="currentColor" />
      <rect x="38" y="44" width="8" height="12" fill="#f6f4ef" fillOpacity="0.9" />
    </svg>
  );
}

type LogoProps = {
  tone?: "ink" | "paper";
  className?: string;
};

export function Logo({ tone = "ink", className = "" }: LogoProps) {
  const word = tone === "paper" ? "text-paper" : "text-ink";
  const sub = tone === "paper" ? "text-mute-dark" : "text-mute";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <FoxcroftMark className="h-9 w-auto shrink-0 text-brand" title="Foxcroft Construction" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] leading-none font-extrabold tracking-[-0.01em] uppercase ${word}`}
          style={{ fontStretch: "112%" }}
        >
          Foxcroft
        </span>
        <span className={`mt-1 font-mono text-[0.58rem] leading-none tracking-[0.3em] uppercase ${sub}`}>
          Construction
        </span>
      </span>
    </span>
  );
}
