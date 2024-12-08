import React from 'react';
import scrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  distance?: string; // in px, em and %
  origin?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
  ref?: React.LegacyRef<HTMLDivElement>;
}

const ScrollReveal = ({
  children,
  className,
  origin,
  distance = '5%',
  delay = 500,
}: ScrollRevealProps) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        delay: delay,
        distance,
        origin,
      });
  }, [origin, distance,delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
