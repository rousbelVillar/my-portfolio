import { About } from "./About";
import { Companies } from "./Companies";

export const ScrollSection = () => {
  return (
    <section className="float-end w-[50%] h-[100%] text-white">
      <About />
      <Companies />
    </section>
  );
};
