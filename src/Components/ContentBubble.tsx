export const ContentBubble = () => {
  return (
    <section className="fixed w-[50%] h-[100%] bg-black  text-white">
      <div className="w-[50%] h-[100%]  relative left-[25%] mt-[10em]">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Rousbel Villar
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I like building stunning and functional software.{" "}
        </p>
      </div>
    </section>
  );
};
