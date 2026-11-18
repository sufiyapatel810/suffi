import { FadeIn } from '../FadeIn';
import { ContactButton } from '../ContactButton';
import { Portrait } from '../Portrait';
import { PROFILE } from '../../data';

interface HeroSectionProps {
  onOpenContact: () => void;
}

const NAV_LINK =
  'text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0';

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-between bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn as="header" delay={0} y={-20} className="relative z-20 w-full">
        <nav
          aria-label="Primary navigation"
          className="flex items-center justify-between w-full px-6 md:px-10 pt-6 md:pt-8"
        >
          <a href="#about" className={NAV_LINK}>
            About
          </a>
          <a href="#skills" className={NAV_LINK}>
            Skills
          </a>
          <a href="#projects" className={NAV_LINK}>
            Projects
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className={`${NAV_LINK} cursor-pointer bg-transparent border-0`}
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Massive Hero Heading */}
      <div className="relative z-0 overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11.5vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.8vw] select-none">
            Hi, i&rsquo;m {PROFILE.name}
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30}>
        <Portrait />
      </FadeIn>

      {/* Bottom Bar */}
      <div className="relative z-20 mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {PROFILE.tagline}
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
}
