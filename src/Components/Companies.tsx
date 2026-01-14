import { Lists } from "./Lists";

export const Companies = () => {
  const companies: any = [
    {
      id: 1,
      title: "Senior Frontend Engineer - New Fire",
      href: "https://www.newfireglobal.com/",
      description:
        "Served as a software developer of a health insurance company platform that was composed of several Angular micro-frontend applications, Golang, and MongoDB on the back-end, serving more than 500,000 users in the US.",
      date: "Sep 2022 - Jan 2025",
      imageUrl:
        "https://cookie-cdn.cookiepro.com/logos/790eb134-7059-40c3-914a-dc668ec03813/018dc6e2-dc19-7025-871d-07a76ab2693d/f9a5901d-f60d-40ab-aec9-d7e1f5e8de46/Newfire_logo.png",
      techStack: ["Angular", "Golang", "Mongo DB", "Node.js"],
      iconLink: "arrow",
    },
    {
      id: 2,
      title: "Senior Frontend Engineer - Epam",
      href: "https://www.epam.com/",
      description:
        "Served as a full-stack engineer, creating Web applications for a learning web platform used across the United States, helping teachers grade, provide assignments, and learning programs to their students.",
      date: "Sep 2021 - Sep 2022",
      imageUrl: "https://s3-symbol-logo.tradingview.com/epam-sys--600.png",
      techStack: ["Angular", "Express", "Mongo DB", "Node.js"],
      iconLink: "arrow",
    },
    {
      id: 3,
      title: "Junior Frontend Engineer - Newtech",
      href: "https://www.newtechsa.com/",
      description:
        "Served as a front-end Engineer, creating UI interfaces and features for the second-largest telecommunications company in the United States.",
      date: "Feb 2020 - Feb 2021",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      techStack: ["Angular", "React", "Golang", "Mongo DB", "Node.js"],
      iconLink: "arrow",
    },
    {
      id: 4,
      title: "QA Automation Engineer - Newtech",
      href: "https://www.newtechsa.com/",
      description:
        "Served as an automation developer for the second-largest telecommunications company in the United States.",
      date: "Aug 2017 - Feb 2020",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIZBlTA4h5VTQSsDzAxAHhYLVee74rEyT1w&s",
      techStack: ["Java", "Selenium", "Postman", "Maven", "JMeter"],
      iconLink: "arrow",
    },
  ];

  return (
    <section id="companies" className="scroll-mt-24">
      <Lists items={companies} subtitle="Experience" />
    </section>
  );
};
