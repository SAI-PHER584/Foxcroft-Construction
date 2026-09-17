"use client";

import { useEffect, useRef, useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";
import { company, nav } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        lifted ? "border-b border-line bg-paper/92 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between gap-6 px-5 md:h-[86px] md:px-8">
        <a href="#main" aria-label={`${company.name} home`} className="shrink-0">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label group relative py-2 text-mute transition-colors duration-[--duration-fast] hover:text-ink"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-[--duration-base] ease-[--ease-out-soft] group-hover:scale-x-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={company.mobileHref}
            className="hidden items-center gap-2.5 bg-brand px-5 py-3 text-paper transition-transform duration-[--duration-fast] ease-[--ease-out-soft] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] sm:flex"
          >
            <Phone size={16} weight="fill" />
            <span className="font-mono text-[0.8125rem] font-600 tracking-tight">
              {company.mobile}
            </span>
          </a>

          <a
            href={company.mobileHref}
            aria-label={`Call Foxcroft Construction on ${company.mobile}`}
            className="flex size-11 items-center justify-center bg-brand text-paper active:scale-[0.96] sm:hidden"
          >
            <Phone size={18} weight="fill" />
          </a>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex size-11 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-stone lg:hidden"
          >
            <List size={20} weight="bold" />
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-5 py-5 text-paper lg:hidden"
        >
          <div className="flex items-center justify-between">
            <h2 id="mobile-menu-title" className="sr-only">
              Menu
            </h2>
            <Logo tone="paper" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="flex size-11 items-center justify-center border border-ink-2 text-paper"
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-12 flex-1">
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-ink-2">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 py-5"
                  >
                    <span className="label text-brand-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display-wide text-3xl font-extrabold tracking-tight uppercase">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-2.5 pb-2">
            <a
              href={company.mobileHref}
              className="flex items-center justify-center gap-2.5 bg-brand px-5 py-4 font-mono text-sm font-semibold text-paper"
            >
              <Phone size={18} weight="fill" />
              {company.mobile}
            </a>
            <a
              href={company.officeHref}
              className="flex items-center justify-center gap-2.5 border border-ink-2 px-5 py-4 font-mono text-sm text-mute-dark"
            >
              Office {company.office}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
