export const Companies = () => {
  const posts = [
    {
      id: 1,
      title: "New Fire Global Partners",
      href: "#",
      description:
        "Served as a software developer of a health insurance company platform that was composed of several Angular micro-frontend applications, Golang, and MongoDB on the back-end, serving more than 500,000 users in the US.",
      date: "Sep 2022 - Jan 2025",
      datetime: "",
      category: { title: "Remote", href: "#" },
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
      category: { title: "Remote", href: "#" },
      company: {
        imageUrl:
          "https://www.eisgroup.com/wp-content/uploads/2025/07/EPAM-1.png",
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
      category: { title: "Remote", href: "#" },
      company: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
    },
    {
      id: 3,
      title: "Newtech Srl",
      href: "#",
      description:
        "Served as a front-end Engineer, creating UI interfaces and features for the second-largest telecommunications company in the United States.",
      date: "Aug 2017 - Feb 2020",
      datetime: "",
      category: { title: "On-site", href: "#" },
      company: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
    },
  ];

  return (
    <div
      className=" grid grid-cols-1 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none 
    lg:grid-cols-1 mt-[10em] lg:mr-[10em] lg:ml-[10em] sm:mr-0 sm:ml-0 mb-20"
    >
      <div>
        <h1 className="text-lg/8 text-gray-300 font-bold"> Experience</h1>
      </div>
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex w-full max-w-xl flex-col items-start"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-400">
              {post.date}
            </time>
            <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
            >
              {post.category.title}
            </a>
            <img
              alt=""
              src={post.company?.imageUrl}
              className="size-10 rounded-full bg-gray-8000"
            />
          </div>
          <div className="group relative grow">
            <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
              {post.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
