import { Chip, IconButton } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const chips = (chips: string[]) => {
  return chips.map((chip: string) => (
    <Chip
      color="primary"
      variant="outlined"
      className="max-w-full truncate"
      size="small"
      label={chip}
    ></Chip>
  ));
};

export const Companies = () => {
  const posts = [
    {
      id: 1,
      title: "Senior frontend engineer - New Fire",
      href: "https://www.newfireglobal.com/",
      description:
        "Served as a software developer of a health insurance company platform that was composed of several Angular micro-frontend applications, Golang, and MongoDB on the back-end, serving more than 500,000 users in the US.",
      date: "Sep 2022 - Jan 2025",
      datetime: "",
      company: {
        imageUrl:
          "https://cookie-cdn.cookiepro.com/logos/790eb134-7059-40c3-914a-dc668ec03813/018dc6e2-dc19-7025-871d-07a76ab2693d/f9a5901d-f60d-40ab-aec9-d7e1f5e8de46/Newfire_logo.png",
      },
      techStack: ["Angular", "Golang", "Mongo DB", "Node.js"],
    },
    {
      id: 2,
      title: "Senior frontend engineer - Epam",
      href: "https://www.epam.com/",
      description:
        "Served as a full-stack engineer, creating Web applications for a learning web platform used across the United States, helping teachers grade, provide assignments, and learning programs to their students.",
      date: "Sep 2021 - Sep 2022",
      datetime: "",
      company: {
        imageUrl: "https://s3-symbol-logo.tradingview.com/epam-sys--600.png",
      },
      techStack: ["Angular", "Express", "Mongo DB", "Node.js"],
    },
    {
      id: 3,
      title: "Junior frontend engineer - Newtech",
      href: "https://www.newtechsa.com/",
      description:
        "Served as a front-end Engineer, creating UI interfaces and features for the second-largest telecommunications company in the United States.",
      date: "Feb 2020 - Feb 2021",
      datetime: "",
      company: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
      techStack: ["Angular", "React", "Golang", "Mongo DB", "Node.js"],
    },
    {
      id: 4,
      title: "Qa automation engineer - Newtech",
      href: "https://www.newtechsa.com/",
      description:
        "Served as an automation developer for the second-largest telecommunications company in the United States.",
      date: "Aug 2017 - Feb 2020",
      datetime: "",
      company: {
        imageUrl: "",
      },
      techStack: ["Java", "Selenium", "Postman", "Maven", "JMeter"],
    },
  ];

  return (
    <div className="mt-[2em]  mb-20 grid gap-y-2 pt-10 sm:pt-16  ">
      <h1 className="text-lg/8 font-bold text-gray-300">Experience</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          className="
          group    
           transition hover:scale-105 duration-300 ease-in-out
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

          <time
            dateTime={post.datetime}
            className="text-xs text-gray-400  lg:mt-2"
          >
            {post.date}
          </time>

          <div className=" sm:col-start-2">
            <h3 className=" flex items-center gap-x-3 text-base font-semibold text-white lg:col-start-2 lg:text-lg">
              {post.company.imageUrl && (
                <img
                  alt=""
                  src={post.company.imageUrl}
                  className="h-8 w-8 rounded-full shrink-0"
                />
              )}
              <span className="hover:text-gray-300">{post.title}</span>
              <span className="group-hover:animate-bounce">
                <IconButton color="primary">
                  <ArrowOutwardIcon fontSize="small"></ArrowOutwardIcon>
                </IconButton>
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
