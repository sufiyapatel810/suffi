import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

interface AnimatedCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: AnimatedCharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCursor = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const wordStart = charCursor;
        charCursor += word.length;
        const hasSpaceAfter = wordIdx < words.length - 1;
        if (hasSpaceAfter) {
          charCursor += 1;
        }

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split('').map((char, charIdx) => {
              const globalIdx = wordStart + charIdx;
              const start = globalIdx / totalChars;
              const end = (globalIdx + 1) / totalChars;
              return (
                <AnimatedChar
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
            {hasSpaceAfter && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
