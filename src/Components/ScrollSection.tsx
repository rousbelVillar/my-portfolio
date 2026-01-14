// ScrollSection.jsx
import { useEffect, useRef } from "react";
import { About } from "./About";
import { Companies } from "./Companies";
import { Projects } from "./Projects";

export const ScrollSection = ({ onSectionChange }: any) => {
  const containerRef = useRef(null) as any;

  useEffect(() => {
    const sections = containerRef?.current.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sections.forEach((section: any) => observer.observe(section));

    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <section
      ref={containerRef}
      className="relative w-full px-4 pb-20 pt-12 text-white lg:ml-auto lg:w-1/2 lg:px-8"
    >
      <About />
      <Companies />
      <Projects />
    </section>
  );
};
