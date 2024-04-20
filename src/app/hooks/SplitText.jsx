import React from "react";
import SplitType from "split-type";

const SplitText = ({ text }) => {
  // Referenz auf das Element, das den Text enthält
  const textRef = React.useRef(null);

  // Konstante für die SplitType-Optionen
  const options = { type: "words, chars, lines" };

  // Effekt, der SplitType ausführt, wenn sich der Text ändert
  React.useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, options);
      return () => split.revert(); // Bereinigen, um Lecks zu vermeiden
    }
  }, [text]);

  return <div ref={textRef}>{text}</div>;
};

export default SplitText;
