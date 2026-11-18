import type { ReactNode } from 'react';
import { Brain, Code2, Mic, Palette } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import { AnimatedText } from '../AnimatedText';
import { ContactButton } from '../ContactButton';
import { ABOUT_COPY } from '../../data';

interface AboutSectionProps {
  onOpenContact: () => void;
}

function Tile({
  children,
  className,
  delay,
  x,
}: {
  children: ReactNode;
  className: string;
  delay: number;
  x: number;
}) {
  return (
    <FadeIn
      delay={delay}
      x={x}
      y={0}
      duration={0.9}
      className={`pointer-events-none absolute z-0 ${className}`}
    >
      <div
        aria-hidden="true"
        className="flex h-[96px] w-[96px] sm:h-[130px] sm:w-[130px] md:h-[170px] md:w-[170px] items-center justify-center rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[#D7E2EA]/20 text-[#D7E2EA]"
        style={{
          background:
            'linear-gradient(135deg, rgba(118,33,176,0.45) 0%, rgba(24,1,31,0.9) 100%)',
        }}
      >
        {children}
      </div>
    </FadeIn>
  );
}

export function AboutSection({ onOpenContact }: AboutSectionProps) {
  const icon = 'h-10 w-10 sm:h-14 sm:w-14 md:h-20 md:w-20';

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C]"
    >
      <Tile delay={0.1} x={-80} className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <Code2 className={icon} strokeWidth={1.5} />
      </Tile>
      <Tile delay={0.25} x={-80} className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <Palette className={icon} strokeWidth={1.5} />
      </Tile>
      <Tile delay={0.15} x={80} className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <Brain className={icon} strokeWidth={1.5} />
      </Tile>
      <Tile delay={0.3} x={80} className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <Mic className={icon} strokeWidth={1.5} />
      </Tile>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_COPY}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton onClick={onOpenContact} />
      </div>
    </section>
  );
}
