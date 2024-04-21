// SplitText.jsx
import React from "react";
import SplitType from "split-type";

const SplitText = ({ text, onSplitComplete }) => {
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, {
        type: "words, chars, lines",
      });
      onSplitComplete(); // Notify when split is complete
      return () => split.revert(); // Cleanup to avoid memory leaks
    }
  }, [text, onSplitComplete]); // React to changes in text or the completion callback

  return <div ref={textRef}>{text}</div>;
};

export default SplitText;
