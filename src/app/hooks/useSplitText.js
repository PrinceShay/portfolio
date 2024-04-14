import { useState, useEffect } from 'react';
import SplitType from 'split-type';

const useSplitText = (text, { types = 'words' } = {}) => {
  const [splitResult, setSplitResult] = useState({
    words: [],
    lines: [],
    chars: [],
  });

  useEffect(() => {
    if (text) {
      const split = new SplitType(text, { types });
      setSplitResult(split);
    }
  }, [text, types]);

  return splitResult;
};

export default useSplitText;
