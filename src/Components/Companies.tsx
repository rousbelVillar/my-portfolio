export const Companies = () => {
  const posts = [
    {
      id: 1,
      title: "New Fire Global Partners",
      href: "#",
      description:
        "Newfire Global Partners is an American company and a leader in software development & IT services with worldwide operations that span four continents.",
      date: "Founded 2016",
      datetime: "",
      category: { title: "Outsourcing", href: "#" },
      author: {
        name: "",
        role: "",
        href: "#",
        imageUrl:
          "https://cookie-cdn.cookiepro.com/logos/790eb134-7059-40c3-914a-dc668ec03813/018dc6e2-dc19-7025-871d-07a76ab2693d/f9a5901d-f60d-40ab-aec9-d7e1f5e8de46/Newfire_logo.png",
      },
    },
    {
      id: 2,
      title: "Epam Systems",
      href: "#",
      description:
        "EPAM Systems, Inc. is an American company that specializes in software engineering services, digital platform engineering, and digital product design.",
      date: "Founded 1993",
      datetime: "",
      category: { title: "Outsourcing", href: "#" },
      author: {
        name: "",
        role: "",
        href: "#",
        imageUrl:
          "https://www.eisgroup.com/wp-content/uploads/2025/07/EPAM-1.png",
      },
    },
    {
      id: 3,
      title: "Newtech Global",
      href: "#",
      description:
        "Newtech Global in the Dominican Republic is a leading Business Process Outsourcing (BPO) and technology firm, offering customer service, IT support, software development.",
      date: "Founded 2005",
      datetime: "",
      category: { title: "Outsourcing", href: "#" },
      author: {
        name: "",
        role: "",
        href: "#",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      },
    },
  ];

  return (
    <div
      className="mx-auto mt-10 grid max-w-2xl grid-cols-1 
        gap-x-8 gap-y-16 border-t border-gray-700 pt-10 
        sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 
        justify-items-end"
    >
      <div className="absolute top-[23em]">
        <h1 className="text-lg/8 text-gray-300 font-bold absolute left-[-63vw]">
          {" "}
          Experience
        </h1>
      </div>
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex w-full max-w-xl flex-col items-start justify-between mt-6"
        >
          <div className="flex items-center gap-x-4 text-xs">
            <img
              alt=""
              src={post.author.imageUrl}
              className="size-10 rounded-full bg-gray-800 float-end"
            />
            <time dateTime={post.datetime} className="text-gray-400">
              {post.date}
            </time>
            <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
            >
              {post.category.title}
            </a>
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
          <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
            <div className="text-sm/6">
              <p className="font-semibold text-white">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-400">{post.author.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
