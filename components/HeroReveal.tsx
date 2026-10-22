"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const BASE_SRC = "/fotomar.jpeg";
const REVEAL_SRC = "/fotomaria.webp";
const BLOB_RADIUS = 0.17; // relativo al ancho del canvas
const POINTS = 28;

export default function HeroReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const mask = document.createElement("canvas");
    const mctx = mask.getContext("2d")!;
    const img = new window.Image();
    let loaded = false;
    img.onload = () => {
      loaded = true;
    };
    img.src = REVEAL_SRC;

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = mask.width = Math.round(w * dpr);
      canvas.height = mask.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // objetivo (cursor) y posición suavizada
    const target = { x: w / 2, y: h * 0.45, active: false, last: 0 };
    const pos = { x: target.x, y: target.y, r: 0 };

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      target.active = true;
      target.last = performance.now();
    };
    const onLeave = () => {
      target.active = false;
    };
    window.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerdown", onMove); // un toque también revela
    wrap.addEventListener("pointerleave", onLeave);

    const drawBlob = (cx: number, cy: number, radius: number, t: number) => {
      mctx.beginPath();
      for (let i = 0; i <= POINTS; i++) {
        const a = (i / POINTS) * Math.PI * 2;
        const wobble =
          1 +
          0.22 * Math.sin(a * 3 + t * 0.003) +
          0.14 * Math.sin(a * 5 - t * 0.0045) +
          0.08 * Math.sin(a * 9 + t * 0.007);
        const x = cx + Math.cos(a) * radius * wobble;
        const y = cy + Math.sin(a) * radius * wobble;
        if (i === 0) mctx.moveTo(x, y);
        else mctx.lineTo(x, y);
      }
      mctx.closePath();
      mctx.fill();
    };

    let raf = 0;
    let visible = true;
    const frame = (t: number) => {
      if (!visible) return;
      raf = requestAnimationFrame(frame);

      // en táctil, la mancha deambula sola si nadie toca
      if (coarse && !reduceMotion && t - target.last > 1500) {
        target.x = w * (0.5 + 0.28 * Math.sin(t * 0.0007));
        target.y = h * (0.45 + 0.22 * Math.sin(t * 0.0011 + 1));
        target.active = true;
      }

      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      const wantR = target.active ? w * BLOB_RADIUS : 0;
      pos.r += (wantR - pos.r) * 0.1;

      // el rastro se desvanece
      mctx.globalCompositeOperation = "destination-out";
      mctx.fillStyle = "rgba(0,0,0,0.07)";
      mctx.fillRect(0, 0, w, h);
      mctx.globalCompositeOperation = "source-over";
      mctx.fillStyle = "#000";
      if (pos.r > 1) drawBlob(pos.x, pos.y, pos.r, t);

      ctx.clearRect(0, 0, w, h);
      if (!loaded) return;
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(img, 0, 0, w, h);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(mask, 0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };
    raf = requestAnimationFrame(frame);

    // sin retrato en pantalla no hace falta redibujar: se pausa el bucle
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    });
    io.observe(wrap);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-3xl border border-white/10 touch-pan-y"
    >
      <Image
        src={BASE_SRC}
        alt="Retrato de Ignacio Díaz"
        fill
        priority
        sizes="(min-width: 1024px) 512px, (min-width: 640px) 448px, 384px"
        className="object-cover"
      />
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  );
}
