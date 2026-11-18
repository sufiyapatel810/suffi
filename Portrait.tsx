import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

// Put a transparent-background PNG of yourself at /public/portrait.png.
// Until it exists, a monogram placeholder is shown.
const PORTRAIT_SRC = `${import.meta.env.BASE_URL}portrait.png`;

export function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  // Pointer position, -0.5 .. 0.5 across the viewport
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 18 });
  const sy = useSpring(py, { stiffness: 90, damping: 18 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const moveX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const moveY = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    const onLeave = () => {
      px.set(0);
      py.set(0);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, [px, py]);

  return (
    <div className="hero-portrait-wrap" ref={ref}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
          transformPerspective: 900,
        }}
      >
        {failed ? (
          <div
            role="img"
            aria-label="Portrait placeholder"
            className="mx-auto flex aspect-square w-[70%] items-center justify-center rounded-full border-2 border-[#D7E2EA]/30"
            style={{
              background:
                'radial-gradient(circle at 30% 25%, #7621B0 0%, #18011F 70%)',
            }}
          >
            <span className="hero-heading text-[6rem] font-black leading-none sm:text-[8rem]">
              SP
            </span>
          </div>
        ) : (
          <img
            src={PORTRAIT_SRC}
            alt="Portrait of Sufiya Patel"
            onError={() => setFailed(true)}
            draggable={false}
            className="mx-auto block h-auto w-full select-none object-contain"
          />
        )}
      </motion.div>
    </div>
  );
}
