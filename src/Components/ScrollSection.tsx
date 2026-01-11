import { About } from "./About";
import { Companies } from "./Companies";

export const ScrollSection = () => {
  return (
    <section className="relative w-full px-4 pb-20 pt-12 text-white lg:ml-auto lg:w-1/2 lg:px-8">
      <About />
      <Companies />
    </section>
  );
};
