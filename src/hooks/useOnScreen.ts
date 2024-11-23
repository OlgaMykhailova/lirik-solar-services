import { useEffect, useState } from "react";

export const useOnScreen = (
  id: string,
  { once = true }: { once?: boolean } = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasInitialized(true); // Встановити, що хук ініціалізовано
        if (once) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(id);

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [id, once]);

  return { isVisible, hasInitialized };
};
