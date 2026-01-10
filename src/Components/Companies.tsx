import { Chip } from "@mui/material";

const chips = (chips: string[]) => {
  return chips.map((chip: string) => (
    <Chip
      color="primary"
      variant="outlined"
      className="w-[max-content]"
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
    <div className="mt-[2em] lg:ml-[2.5em] mb-20 grid gap-y-2 pt-10 sm:pt-16  ">
      <h1 className="text-lg/8 font-bold text-gray-300">Experience</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          className="relative grid grid-cols-[140px_1fr] gap-x-4 rounded-md border border-black p-[2em] hover:bg-gray-800 cursor-pointer"
        >
          <a
            href={post.href}
            target="post.href"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`Visit ${post.title}`}
          />

          <time
            dateTime={post.datetime}
            className="mt-2 text-xs text-gray-400 z-20"
          >
            {post.date}
          </time>

          <h3 className="col-start-2 z-20 flex items-center gap-x-3 text-lg font-semibold text-white">
            {post.company.imageUrl && (
              <img
                alt=""
                src={post.company.imageUrl}
                className="size-8 rounded-full"
              />
            )}
            <span className="hover:text-gray-300">{post.title}</span>
          </h3>

          <p className="col-start-2 z-20 mt-5 text-sm text-gray-400">
            {post.description}
          </p>

          <div className="col-start-2 z-20 mt-5 flex gap-2">
            {chips(post.techStack)}
          </div>
        </article>
      ))}
    </div>
  );
};
