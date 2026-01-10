import { About } from "./About";
import { Companies } from "./Companies";

export const ScrollSection = () => {
  return (
    <section className="lg:ml-0 lg:mr-[3em] sm:mx[3em] lg:float-end lg:w-[50%] sm:w-[100%] h-[100%] text-white">
      <About />
      <Companies />
    </section>
  );
};
