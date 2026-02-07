import { useEffect, useState } from "react";

export const useTypewriter = (
  lines: string[],
  typingSpeed = 55,
  pauseBetweenLines = 1600
) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    const current = lines[index] ?? "";

    if (displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayed("");
      setIndex((prev) => (prev + 1) % lines.length);
    }, pauseBetweenLines);

    return () => clearTimeout(timeout);
  }, [displayed, index, lines, typingSpeed, pauseBetweenLines]);

  return displayed;
};


