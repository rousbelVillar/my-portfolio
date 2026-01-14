import { Lists } from "./Lists";

export const Projects = () => {
  const projects: any[] = [
    {
      id: 1,
      title: "Oceanc Compiler",
      iconLink: "github",
      href: "https://github.com/rousbelVillar/oceanc",
      description:
        "I made a mini compiler that supports some functional programming features.",
      date: "",
      imageProjectUrl: "https://iili.io/fvpxHnS.md.png",
      techStack: ["C++", "Flex", "Bison"],
    },
    {
      id: 2,
      title: "Budget App",
      iconLink: "github",
      href: "https://github.com/rousbelVillar/budget-tracker-frontend",
      description:
        "Budgeting dashboard built with Vue 3 and TypeScript that helps users track expenses, visualize spending, and manage personal finances.",
      date: "",
      datetime: "",
      imageProjectUrl:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",

      techStack: ["Vue", "Typescript", "Python", "Flask", "SQLite"],
    },
  ];

  return (
    <section className="scroll-mt-24">
      <Lists items={projects} subtitle="Projects"></Lists>
    </section>
  );
};
