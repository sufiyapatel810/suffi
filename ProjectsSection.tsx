import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import { PROJECTS, type ProjectItem } from '../../data';

const LINK_BTN =
  'inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]';

// A browser-style frame. Shows /public/projects/<image> if present,
// otherwise a gradient placeholder with the project name.
function Screenshot({ project }: { project: ProjectItem }) {
  const [failed, setFailed] = useState(!project.image);
  const src = project.image
    ? `${import.meta.env.BASE_URL}projects/${project.image}`
    : '';

  return (
    <div className="h-full min-h-[200px] overflow-hidden rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/20 bg-[#141414] flex flex-col">
      <div className="flex items-center gap-1.5 border-b border-[#D7E2EA]/15 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#D7E2EA]/25" />
        <span className="ml-3 truncate text-[11px] tracking-wide text-[#D7E2EA]/50">
          {project.live.replace('https://', '')}
        </span>
      </div>
      {failed ? (
        <div
          className="flex flex-1 items-center justify-center p-6 text-center"
          style={{
            background:
              'linear-gradient(135deg, #18011F 0%, #7621B0 60%, #B600A8 100%)',
          }}
        >
          <span
            className="font-black uppercase leading-tight text-white/90"
            style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2.25rem)' }}
          >
            {project.name}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={`Screenshot of ${project.name}`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-full flex-1 object-cover object-top"
        />
      )}
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, totalCards, progress }: ProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const startRange = index * (1 / totalCards);
  const scale = useTransform(progress, [startRange, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 min-h-[85vh] flex items-start justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <motion.article
          style={{
            scale,
            top: `${index * 28}px`,
            transformOrigin: 'top center',
          }}
          className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-7 md:p-9"
        >
          {/* Top row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-5 sm:pb-7">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="font-black leading-none text-[#D7E2EA] tabular-nums shrink-0"
                style={{ fontSize: 'clamp(3rem, 9vw, 120px)' }}
              >
                {project.number}
              </span>
              <div className="flex flex-col">
                <span className="text-[#D7E2EA]/60 text-xs sm:text-sm font-normal">
                  {project.category}
                </span>
                <h3
                  className="font-medium uppercase text-[#D7E2EA] leading-tight"
                  style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_BTN}
              >
                Live site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_BTN}
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                Code
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col md:flex-row gap-5 sm:gap-6 items-stretch">
            <div className="w-full md:w-[45%] flex flex-col gap-5">
              <p className="text-[#D7E2EA]/85 font-light leading-relaxed text-sm sm:text-base">
                {project.summary}
              </p>

              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[#D7E2EA] text-sm sm:text-base font-light leading-snug"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#B600A8]"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-2 mt-auto" aria-label="Technologies used">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#D7E2EA]/25 px-3.5 py-1.5 text-xs sm:text-sm text-[#D7E2EA]/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-[55%]">
              <Screenshot project={project} />
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={stackRef} className="relative">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
