import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
export const ContentBubble = () => {
  return (
    <section className="relative w-full pt-24 text-white lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2">
      <div className=" lg:relative lg:left-[15%]">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl px-4">
          Rousbel Villar
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl px-4">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-300 px-4">
          I like building stunning and functional software.{" "}
        </p>
        <div className="flex content-center mt-[1em] h-3 w-3 px-4">
          <IconButton
            size="small"
            color="primary"
            href="https://github.com/rousbelVillar"
            target="post.href"
            rel="noopener noreferrer"
            aria-label="Github"
            className="animate-bounce"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className="mt-2 animate-bounce"
            href="https://www.linkedin.com/in/rousbel-villar-2496628b/"
            size="small"
            color="primary"
            target="post.href"
            rel="noopener noreferrer"
            aria-label="Linked in"
          >
            <LinkedInIcon />
          </IconButton>
        </div>
        <img
          src="https://i.postimg.cc/g0gcHN1X/Untitled-Artwork.gif"
          alt="Rousbel surfing animation"
          className="relative lg:top-[2vh] lg:right-[8vw] md:top-[8vh] top-[15vh]"
        ></img>
      </div>
    </section>
  );
};
