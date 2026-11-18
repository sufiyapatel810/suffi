import { useEffect, useRef, useState, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  disabled?: boolean;
  className?: string;
}

export function Magnet({
  children,
  padding = 80,
  strength = 3,
  disabled = false,
  className = '',
}: MagnetProps) {
  const magnetRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      setIsActive(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const el = magnetRef.current;
      if (!el) return;

      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, disabled]);

  const transitionStyle = isActive
    ? 'transform 0.3s ease-out'
    : 'transform 0.6s ease-in-out';

  return (
    <div
      ref={magnetRef}
      className={`inline-block ${className}`}
      style={{ position: 'relative' }}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
