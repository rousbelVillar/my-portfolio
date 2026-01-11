export const ContentBubble = () => {
  return (
    <section className="relative w-full px-4 pt-24 text-white lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2">
      <div className=" lg:relative lg:left-[15%] lg:mt-[15px]">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Rousbel Villar
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-300">
          I like building stunning and functional software.{" "}
        </p>
      </div>
    </section>
  );
};
