import React from 'react';

type TyperwriterProps = { text: string; speed: number; delay: number };

const Typewriter = ({ text, speed = 100, delay }: TyperwriterProps) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [startEffect, setStartEffect] = React.useState(false);

  const initEffect = React.useCallback(() => {
    if (startEffect) return;
    const startTimer = setTimeout(() => {
      setStartEffect(true);
    }, delay);
    return () => {
      clearTimeout(startTimer);
    };
  }, [delay, startEffect]);

  React.useEffect(() => {
    initEffect();
    if (currentTextIndex === text.length || !startEffect) return;
    const timer = setTimeout(() => {
      setDisplayText((prevText) => prevText + text[currentTextIndex]);
      setCurrentTextIndex((prevIndex) => prevIndex + 1);
    }, speed);
    return () => {
      clearTimeout(timer);
    };
  }, [text, currentTextIndex, speed, startEffect, initEffect]);

  return (
    <React.Fragment>
      <span className='text-[2.2rem] lg:text-big'>{displayText}</span>
      {text !== displayText && (
        <span className='ubuntu-light animate-ping duration-75'>|</span>
      )}
    </React.Fragment>
  );
};

export default Typewriter;
