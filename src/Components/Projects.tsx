import { Lists } from "./Lists";

export const Projects = () => {
  const projects: any[] = [
    {
      id: 1,
      title: "Oceanc compiler",
      href: "https://www.newfireglobal.com/",
      description: "I made a c++ mini compiler with Bison + Flex. ",
      date: "",
      imageProjectUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      techStack: ["Angular", "Golang", "Mongo DB", "Node.js"],
    },
    {
      id: 2,
      title: "Budget App",
      href: "https://www.epam.com/",
      description:
        "Served as a full-stack engineer, creating Web applications for a learning web platform used across the United States, helping teachers grade, provide assignments, and learning programs to their students.",
      date: "",
      datetime: "",
      imageProjectUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

      techStack: ["Angular", "Express", "Mongo DB", "Node.js"],
    },
  ];

  return <Lists items={projects} subtitle="Projects"></Lists>;
};
