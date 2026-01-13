import IconButton from "@mui/material/IconButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { chips } from "../utils/globals";

type ListItem = {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  imageUrl: string;
  imageProjectUrl?: string;
  techStack: string[];
  iconLink: "arrow" | "github";
};

type ListsProps = {
  items: ListItem[];
  subtitle: string;
};

export const Lists = ({ items, subtitle }: ListsProps) => {
  return (
    <div className=" grid gap-y-2 pt-10 sm:pt-16  ">
      <h1 className="text-lg/8 font-bold text-gray-300">{subtitle}</h1>
      {items.map((post) => (
        <article
          key={post.id}
          className="
          group    
           transition hover:scale-105 ease-in-out
          relative flex flex-col gap-3 
          rounded-md border border-black 
          p-4 hover:bg-gray-800 cursor-pointer
          lg:grid lg:grid-cols-[140px_1fr] lg:gap-x-4 lg:p-[2em]"
        >
          <a
            href={post.href}
            target="post.href"
            rel="noopener noreferrer"
            className="absolute top-0 bottom-0 left-0 right-0 z-1 w-100 h-100"
            aria-label={`Visit ${post.title}`}
          />

          {post.date ? (
            <time
              dateTime={post.date}
              className="text-xs text-gray-400  lg:mt-2"
            >
              {post.date}
            </time>
          ) : post.imageProjectUrl ? (
            <img
              src={post.imageProjectUrl}
              alt=""
              className="border-white rounded-sm"
            />
          ) : null}

          <div className=" sm:col-start-2">
            <h3 className=" flex items-center gap-x-3 text-base font-semibold text-white lg:col-start-2 lg:text-lg group-hover:text-[#1976d2]">
              {post.imageUrl && (
                <img
                  alt=""
                  src={post.imageUrl}
                  className="h-8 w-8 rounded-full shrink-0"
                />
              )}
              <span className="hover:text-gray-300">{post.title}</span>
              <span className="group-hover:animate-bounce">
                {post.iconLink === "arrow" ? (
                  <IconButton color="primary">
                    <ArrowOutwardIcon fontSize="small"></ArrowOutwardIcon>
                  </IconButton>
                ) : post.iconLink === "github" ? (
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
                ) : null}
              </span>
            </h3>

            <p className=" text-sm text-gray-400 lg:col-start-2 lg:mt-5">
              {post.description}
            </p>

            <div className="   mt-3 flex flex-wrap gap-2 lg:col-start-2 lg:mt-5">
              {chips(post.techStack)}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
