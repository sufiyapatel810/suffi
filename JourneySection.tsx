import { FadeIn } from '../FadeIn';
import { EDUCATION, LEADERSHIP, LANGUAGES } from '../../data';

export function JourneySection() {
  return (
    <section
      id="journey"
      className="relative z-20 -mt-10 sm:-mt-12 md:-mt-14 bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-32 sm:pb-40 md:pb-48"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Beyond code
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <FadeIn y={30}>
          <h3
            className="font-medium uppercase mb-8"
            style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2.1rem)' }}
          >
            Education
          </h3>
          <ol className="border-l-2 border-[#0C0C0C]/15 pl-6 sm:pl-8 flex flex-col gap-9">
            {EDUCATION.map((e) => (
              <li key={e.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[33px] sm:-left-[41px] top-2 h-3 w-3 rounded-full bg-[#7621B0]"
                />
                <p className="text-sm text-[#0C0C0C]/55 tabular-nums">{e.period}</p>
                <p className="text-lg sm:text-xl font-medium leading-snug mt-0.5">
                  {e.title}
                </p>
                <p className="text-sm sm:text-base font-light text-[#0C0C0C]/70 mt-1">
                  {e.place}
                </p>
                {e.note && (
                  <p className="text-sm sm:text-base font-medium text-[#7621B0] mt-1">
                    {e.note}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn y={30} delay={0.1}>
          <h3
            className="font-medium uppercase mb-8"
            style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2.1rem)' }}
          >
            Leadership & achievements
          </h3>
          <ul className="flex flex-col">
            {LEADERSHIP.map((l, i) => (
              <li
                key={l.title}
                className="py-5"
                style={{
                  borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none',
                  borderBottom: '1px solid rgba(12,12,12,0.15)',
                }}
              >
                <p className="text-lg sm:text-xl font-medium leading-snug">{l.title}</p>
                <p className="text-sm sm:text-base font-light text-[#0C0C0C]/70 mt-1">
                  {l.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm sm:text-base font-light text-[#0C0C0C]/70">
            Languages: {LANGUAGES.join(', ')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
