// ContentBubble.jsx
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const navItems = [
  { id: "about", label: "About" },
  { id: "companies", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export const ContentBubble = ({ activeSection }: any) => {
  const scrollTo = (id: any) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative w-full pt-24 text-white lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-1/2">
      <div className="lg:relative lg:left-[15%]">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl px-4">
          Rousbel Villar
        </h1>

        <h2 className="mt-3 text-lg font-semibold text-slate-200 px-4">
          Software Engineer
        </h2>

        <p className="mt-4 max-w-xs text-slate-300 px-4">
          I like building stunning and functional software.
        </p>

        <nav className="absolute left-[1em] top-[25vh]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`block text-left transition-all ${
                activeSection === item.id
                  ? "text-cyan-400 font-semibold translate-x-2"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {"-----  " + item.label}
            </button>
          ))}
        </nav>

        <div className="lg:absolute lg:top-[40vh] lg:left-[15vw] flex px-4 gap-2">
          <IconButton
            size="small"
            color="primary"
            href="https://github.com/rousbelVillar"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            size="small"
            color="primary"
            href="https://www.linkedin.com/in/rousbel-villar-2496628b/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </div>

        <img
          src="https://i.postimg.cc/g0gcHN1X/Untitled-Artwork.gif"
          alt="Rousbel surfing animation"
          className="relative lg:top-0 lg:right-[8vw] top-[12vh]"
        />
      </div>
    </section>
  );
};
