"use client";
import React, { useEffect, useState } from "react";
import SplitType from "split-type";

function Split() {
  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  return null;
}

export default Split;
