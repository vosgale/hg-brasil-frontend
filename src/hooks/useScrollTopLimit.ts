import { type RefObject, useEffect, useState } from "react";

function useScrollTopLimit(ref: RefObject<HTMLElement>) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        setIsAtTop(element.scrollTop === 0);
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("scroll", handleScroll);

      handleScroll();
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return isAtTop;
}

export default useScrollTopLimit;
