import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data';

const LINKS = [
  { label: 'Email', href: `mailto:${PROFILE.email}`, Icon: Mail },
  { label: 'GitHub', href: PROFILE.github, Icon: Github },
  { label: 'LinkedIn', href: PROFILE.linkedin, Icon: Linkedin },
  { label: 'Instagram', href: PROFILE.instagram, Icon: Instagram },
];

export function Footer({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <footer className="relative z-30 -mt-10 sm:-mt-12 md:-mt-14 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-10 text-[#D7E2EA]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 text-center">
        <button
          type="button"
          onClick={onOpenContact}
          className="hero-heading font-black uppercase leading-none tracking-tight cursor-pointer bg-transparent border-0 hover:opacity-80 transition-opacity"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}
        >
          Let&rsquo;s talk
        </button>

        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/40 px-5 py-2.5 text-sm hover:bg-[#D7E2EA]/10 transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`${import.meta.env.BASE_URL}${PROFILE.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-2 border-[#D7E2EA]/40 px-5 py-2.5 text-sm hover:bg-[#D7E2EA]/10 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <p className="text-xs text-[#D7E2EA]/50">
          &copy; {new Date().getFullYear()} {PROFILE.fullName} &middot; {PROFILE.location}
        </p>
      </div>
    </footer>
  );
}
