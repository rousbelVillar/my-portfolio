export const Companies = () => {
  const posts = [
    {
      id: 1,
      title: "New Fire Global Partners",
      href: "https://www.newfireglobal.com/",
      description:
        "Served as a software developer of a health insurance company platform that was composed of several Angular micro-frontend applications, Golang, and MongoDB on the back-end, serving more than 500,000 users in the US.",
      date: "Sep 2022 - Jan 2025",
      datetime: "",
      company: {
        imageUrl:
          "https://cookie-cdn.cookiepro.com/logos/790eb134-7059-40c3-914a-dc668ec03813/018dc6e2-dc19-7025-871d-07a76ab2693d/f9a5901d-f60d-40ab-aec9-d7e1f5e8de46/Newfire_logo.png",
      },
    },
    {
      id: 2,
      title: "Epam Systems",
      href: "#",
      description:
        "Served as a full-stack engineer, creating Web applications for a learning web platform used across the United States, helping teachers grade, provide assignments, and learning programs to their students.",
      date: "Sep 2021 - Sep 2022",
      datetime: "",
      company: {
        imageUrl: "https://s3-symbol-logo.tradingview.com/epam-sys--600.png",
      },
    },
    {
      id: 3,
      title: "Newtech Srl",
      href: "#",
      description:
        "Served as a front-end Engineer, creating UI interfaces and features for the second-largest telecommunications company in the United States.",
      date: "Feb 2020 - Feb 2021",
      datetime: "",
      company: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
    },
    {
      id: 4,
      title: "Newtech Srl",
      href: "#",
      description:
        "Served as a front-end Engineer, creating UI interfaces and features for the second-largest telecommunications company in the United States.",
      date: "Aug 2017 - Feb 2020",
      datetime: "",
      company: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
    },
  ];

  return (
    <div className="mt-[2em] mb-20 grid gap-y-2 pt-10 sm:pt-16 ">
      <h1 className="text-lg/8 font-bold text-gray-300">Experience</h1>

      {posts.map((post) => (
        <article
          key={post.id}
          className="grid w-full max-w-xl grid-cols-[140px_1fr] gap-x-4 border border-black hover:bg-gray-800 rounded-md p-[2em]"
        >
          <time dateTime={post.datetime} className="mt-2 text-xs text-gray-400">
            {post.date}
          </time>

          <h3 className="col-start-2 flex items-center gap-x-3 text-lg/6 font-semibold text-white">
            <img
              alt=""
              src={post.company?.imageUrl}
              className="size-8 rounded-full"
            />
            <a href={post.href} className="hover:text-gray-300">
              {post.title}
            </a>
            <svg className="size-6 animate-bounce ..."></svg>
          </h3>

          <p className="col-start-2 mt-5 line-clamp-3 text-sm/6 text-gray-400">
            {post.description}
          </p>
        </article>
      ))}
    </div>
  );
};
