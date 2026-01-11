import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
export const ContentBubble = () => {
  return (
    <section className="relative w-full px-4 pt-24 text-white lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2">
      <div className=" lg:relative lg:left-[15%]">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Rousbel Villar
        </h1>
        <h2 className="mt-3 text-lg font-semibold tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-300">
          I like building stunning and functional software.{" "}
        </p>
        <div className="flex content-center mt-[1em] h-3 w-3">
          <IconButton
            size="small"
            color="primary"
            href="https://github.com/rousbelVillar"
            target="post.href"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className="mt-2"
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
      </div>
    </section>
  );
};
