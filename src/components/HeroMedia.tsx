"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * The hero background.
 *
 * The still is what renders on the server, so it is what the crawler and the
 * first paint get, and it stays the LCP element. The video is only mounted
 * once we know we are on a wide viewport and the visitor has not asked for
 * reduced motion, which means a phone on cellular never requests the 1.2MB
 * file at all.
 *
 * Autoplay needs muted + playsInline; Safari refuses it otherwise, and iOS in
 * low power mode refuses it regardless. The poster covers that case.
 */
export function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => setShowVideo(wide.matches && !still.matches);
    sync();

    wide.addEventListener("change", sync);
    still.addEventListener("change", sync);
    return () => {
      wide.removeEventListener("change", sync);
      still.removeEventListener("change", sync);
    };
  }, []);

  return (
    <>
      {/* Phones never get the video, so they get the best still we hold
          rather than a frame grabbed off it: sunlit timber frame, open sky. */}
      <Image
        src="/work/hero-frame.jpg"
        alt="Timber frame walls standing on a completed floor deck at Mossgate Park, under open sky"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />

      {/* From md up this is the video's poster, so it has to be a frame of
          the video itself or the swap flickers. */}
      <Image
        src="/hero/roof-build-poster.jpg"
        alt="Two Foxcroft roofers building a rooflight kerb into a new flat roof deck"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero/roof-build-poster.jpg"
          aria-hidden
          className="absolute inset-0 size-full object-cover object-center"
        >
          <source src="/hero/roof-build.mp4" type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
