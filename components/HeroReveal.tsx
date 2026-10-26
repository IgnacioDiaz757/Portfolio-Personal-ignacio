"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/projects/hero-video.mp4";
const BLOB_RADIUS = 0.17; // relativo al ancho del canvas
const POINTS = 28;
const MAX_TILT = 7; // grados
const BASE_SPLIT = 1.5; // px de aberración en reposo
const MAX_SPLIT = 9; // px de aberración a máxima velocidad

export default function HeroReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const tilt = tiltRef.current;
    const glare = glareRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!wrap || !tilt || !glare || !canvas || !video) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    // mask: la mancha; tmp: un canal de color; layer: suma de los tres canales
    const mask = document.createElement("canvas");
    const tmp = document.createElement("canvas");
    const layer = document.createElement("canvas");
    const mctx = mask.getContext("2d")!;
    const tctx = tmp.getContext("2d")!;
    const lctx = layer.getContext("2d")!;

    if (reduceMotion) video.pause();
    else video.play().catch(() => {});

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // offsetWidth ignora la inclinación 3D, getBoundingClientRect no
      w = wrap.offsetWidth;
      h = wrap.offsetHeight;
      for (const c of [canvas, mask, tmp, layer]) {
        c.width = Math.round(w * dpr);
        c.height = Math.round(h * dpr);
      }
      for (const c of [ctx, mctx, tctx, lctx]) c.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // objetivo (cursor) y posición suavizada
    const target = { x: w / 2, y: h * 0.45, active: false, last: 0 };
    const pos = { x: target.x, y: target.y, r: 0 };
    const tiltPos = { x: 0, y: 0 };
    let speed = 0; // velocidad suavizada de la mancha, 0..1

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

    // un canal del video (rojo, verde o azul) desplazado (dx, dy) y sumado al layer
    const addChannel = (color: string, dx: number, dy: number) => {
      // cover con un 3% extra para que el desplazamiento no deje bordes vacíos
      const scale = Math.max(w / video.videoWidth, h / video.videoHeight) * 1.03;
      const dw = video.videoWidth * scale;
      const dh = video.videoHeight * scale;
      tctx.globalCompositeOperation = "source-over";
      tctx.clearRect(0, 0, w, h);
      tctx.drawImage(video, (w - dw) / 2 + dx, (h - dh) / 2 + dy, dw, dh);
      tctx.globalCompositeOperation = "multiply";
      tctx.fillStyle = color;
      tctx.fillRect(0, 0, w, h);
      lctx.globalCompositeOperation = "lighter";
      lctx.drawImage(tmp, 0, 0, w, h);
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

      const px = pos.x;
      const py = pos.y;
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      const wantR = target.active ? w * BLOB_RADIUS : 0;
      pos.r += (wantR - pos.r) * 0.1;

      // la aberración crece con la velocidad del movimiento
      const v = Math.min(Math.hypot(pos.x - px, pos.y - py) / 14, 1);
      speed += (v - speed) * 0.15;
      const split = reduceMotion ? 0 : BASE_SPLIT + (MAX_SPLIT - BASE_SPLIT) * speed;
      // dirección del desplazamiento: del centro del retrato hacia la mancha
      const ang = Math.atan2(pos.y - h / 2, pos.x - w / 2);
      const sx = Math.cos(ang) * split;
      const sy = Math.sin(ang) * split;

      // inclinación 3D y brillo siguen al cursor (solo con puntero fino)
      if (!coarse && !reduceMotion) {
        const nx = target.active ? Math.max(-1, Math.min(1, (target.x / w - 0.5) * 2)) : 0;
        const ny = target.active ? Math.max(-1, Math.min(1, (target.y / h - 0.5) * 2)) : 0;
        tiltPos.x += (nx - tiltPos.x) * 0.08;
        tiltPos.y += (ny - tiltPos.y) * 0.08;
        tilt.style.transform = `rotateX(${(-tiltPos.y * MAX_TILT).toFixed(2)}deg) rotateY(${(tiltPos.x * MAX_TILT).toFixed(2)}deg)`;
        glare.style.background = `radial-gradient(circle at ${((tiltPos.x + 1) * 50).toFixed(1)}% ${((tiltPos.y + 1) * 50).toFixed(1)}%, rgba(255,255,255,0.22), transparent 55%)`;
        glare.style.opacity = target.active ? "1" : "0";
      }

      // el rastro se desvanece
      mctx.globalCompositeOperation = "destination-out";
      mctx.fillStyle = "rgba(0,0,0,0.07)";
      mctx.fillRect(0, 0, w, h);
      mctx.globalCompositeOperation = "source-over";
      mctx.fillStyle = "#000";
      if (pos.r > 1) drawBlob(pos.x, pos.y, pos.r, t);

      ctx.clearRect(0, 0, w, h);
      if (video.readyState < 2 || !video.videoWidth) return;

      // video a color con los canales separados: rojo y azul en sentidos opuestos
      lctx.globalCompositeOperation = "source-over";
      lctx.clearRect(0, 0, w, h);
      addChannel("#ff0000", sx, sy);
      addChannel("#00ff00", 0, 0);
      addChannel("#0000ff", -sx, -sy);

      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(layer, 0, 0, w, h);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(mask, 0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };
    raf = requestAnimationFrame(frame);

    // sin retrato en pantalla no hace falta redibujar: se pausa el bucle y el video
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) {
        raf = requestAnimationFrame(frame);
        if (!reduceMotion) video.play().catch(() => {});
      } else {
        video.pause();
      }
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
      className="relative mx-auto aspect-[3/4] w-full max-w-sm sm:max-w-md lg:max-w-lg touch-pan-y [perspective:1000px]"
    >
      <div
        ref={tiltRef}
        className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 will-change-transform [transform-style:preserve-3d]"
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Video de Ignacio Díaz"
          className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
        />
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
        {/* viñeta: enfoca la mirada en el centro */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.18) 100%)",
          }}
          aria-hidden="true"
        />
        {/* reflejo de luz que sigue al cursor */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-300"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
