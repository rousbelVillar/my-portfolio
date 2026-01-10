export const ContentBubble = () => {
  return (
    <section className="lg:fixed lg:w-[50%] h-[100%] text-white">
      <div className="lg:w-[60%] h-[100%] lg:relative lg:left-[15%] mt-[6em] ml-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Rousbel Villar
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I like building stunning and functional software.{" "}
        </p>
      </div>
    </section>
  );
};
