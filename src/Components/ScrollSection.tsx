import { About } from "./About";
import { Companies } from "./Companies";

export const ScrollSection = () => {
  return (
    <section className="lg:float-end lg:w-[50%] lg:ml-0 lg:mr-[3em] ml-[2em] mr-[2.5em] sm:w-[100%] h-[100%] text-white">
      <About />
      <Companies />
    </section>
  );
};
