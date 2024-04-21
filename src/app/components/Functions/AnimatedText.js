"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from '../../hooks/SplitText';

const AnimatedText = ({ text, className, triggerStart, animationType, as = 'div' }) => {
    const textRef = useRef(null);
    const [splitComplete, setSplitComplete] = React.useState(false);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      if (splitComplete) {
        const chars = textRef.current.querySelectorAll('.char');
        const lines = textRef.current.querySelectorAll('.line');
        const animationConfig = getAnimationConfig(animationType, chars, lines);
        gsap.fromTo(animationConfig.target, animationConfig.from, {
          ...animationConfig.to,
          scrollTrigger: {
            trigger: textRef.current,
            start: triggerStart,
            end: "bottom top",
            toggleActions: "play pause resume reset",
          }
        });
      }
    }, [splitComplete, triggerStart, animationType]);
  
    const Element = as; // use 'as' directly without defaulting in return statement
    return (
      <Element ref={textRef} className={className}>
        <SplitText text={text} onSplitComplete={() => setSplitComplete(true)} />
      </Element>
    );
  };

function getAnimationConfig(type, chars, lines) {
  switch (type) {
    case 'fadeUp':
      return {
        target: chars,
        from: { yPercent: 100, opacity: 0 },
        to: { yPercent: 0, opacity: 1, stagger: 0.05 }
      };
    case 'fade':
      return {
        target: chars,
        from: { opacity: 0 },
        to: { opacity: 1, stagger: 0.1, duration: 0.5 }
      };
    case 'staggeredFadeUp':
      return {
        target: chars,
        from: { yPercent: 100, opacity: 0 },
        to: { yPercent: 0, opacity: 1, stagger: 0.02, duration: 1 }
      };
    case 'lineStagger':
      return {
        target: lines,  // Targeting lines instead of characters
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }
      };
    default:
      return {  // Default animation
        target: chars,
        from: { opacity: 0 },
        to: { opacity: 1 }
      };
  }
}

export default AnimatedText;
