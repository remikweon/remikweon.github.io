import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0 });
      return;
    }

    const sectionId = location.hash.replace("#", "");

    if (!sectionId) {
      window.scrollTo({ top: 0 });
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToSection;
