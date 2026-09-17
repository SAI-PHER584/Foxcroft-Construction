import { Reveal } from "./Reveal";

type SectionHeadProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  tone?: "light" | "dark";
  action?: React.ReactNode;
};

export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  tone = "light",
  action,
}: SectionHeadProps) {
  const onDark = tone === "dark";
  const rule = onDark ? "bg-ink-2" : "bg-line";
  const idx = onDark ? "text-mute-dark" : "text-mute";
  const body = onDark ? "text-mute-dark" : "text-mute";
  const accent = onDark ? "text-brand-bright" : "text-brand";

  return (
    <div>
      <Reveal className={`flex items-center gap-4 border-t pt-4 ${onDark ? "border-ink-2" : "border-line"}`}>
        <span className={`label ${idx}`}>{index}</span>
        <span aria-hidden className={`h-px flex-1 ${rule}`} />
        <span className={`label ${accent}`}>{eyebrow}</span>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-7">
          <h2 className="display-wide text-[clamp(2.15rem,5.4vw,4.35rem)]">{title}</h2>
        </Reveal>

        {lede || action ? (
          <Reveal delay={90} className="lg:col-span-5 lg:pb-2">
            {lede ? (
              <p className={`measure text-[1.0625rem] leading-relaxed ${body}`}>{lede}</p>
            ) : null}
            {action ? <div className="mt-6">{action}</div> : null}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
