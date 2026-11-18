import { useEffect, useRef, useState } from 'react';
import { SKILLS_ROW_1, SKILLS_ROW_2 } from '../../data';

const repeat = (items: string[]) => [...items, ...items, ...items];

function Pill({ label }: { label: string }) {
  return (
    <div className="shrink-0 rounded-full border-2 border-[#D7E2EA]/25 bg-[#141414] px-8 py-4 sm:px-10 sm:py-5">
      <span
        className="hero-heading font-black uppercase tracking-tight whitespace-nowrap"
        style={{ fontSize: 'clamp(1.5rem, 3.4vw, 3rem)' }}
      >
        {label}
      </span>
    </div>
  );
}

export function SkillsMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateOffset = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateOffset);
    };

    updateOffset();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Skills and interests"
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-center overflow-hidden">
          <div
            className="flex gap-3 shrink-0"
            style={{ transform: `translateX(${offset - 250}px)`, willChange: 'transform' }}
          >
            {repeat(SKILLS_ROW_1).map((label, i) => (
              <Pill key={`r1-${i}`} label={label} />
            ))}
          </div>
        </div>

        <div className="flex justify-center overflow-hidden">
          <div
            className="flex gap-3 shrink-0"
            style={{ transform: `translateX(${-(offset - 250)}px)`, willChange: 'transform' }}
          >
            {repeat(SKILLS_ROW_2).map((label, i) => (
              <Pill key={`r2-${i}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
