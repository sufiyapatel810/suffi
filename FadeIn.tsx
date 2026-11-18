import type { ComponentType, CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import { motion, type MotionProps } from 'motion/react';

type MotionHtmlComponent = ComponentType<MotionProps & HTMLAttributes<HTMLElement>>;

const motionCache = new Map<ElementType, MotionHtmlComponent>();

function getMotionComponent(as: ElementType): MotionHtmlComponent {
  let cached = motionCache.get(as);
  if (!cached) {
    cached = motion.create(as) as MotionHtmlComponent;
    motionCache.set(as, cached);
  }
  return cached;
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  id,
  style,
}: FadeInProps) {
  const Component = getMotionComponent(as);

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}
