import miqr from "../assets/miqr.png";
import ticked from "../assets/ticked.png";
import air from "../assets/air.png";
import linked from "../assets/linked.png";

const done = [
  {
    id: 1,
    project: "MiQR",
    tools: ["Web", "Django", "PostgreSQL", "API"],
    picture: miqr,
    linkto: "http://",
    summary: "Lorem",
    kpi: [
      "Created a SaaS on Heroku using Django and PostgreSQL.",
      "Led a team, improved HTML, JavaScript, and CSS to enhance user experience.",
      "Gathered technical requirements, checked web compatibility, and maintained the site",
    ],
  },
  {
    id: 2,
    project: "Ticked",
    tools: ["Web", "React", "Axios", "Node"],
    picture: ticked,
    linkto: "https://ticked.hng.tech/",
    summary: "Lorem",
    kpi: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: 3,
    project: "Metabnb",
    tools: ["Web 3.0", "React", "Node"],
    picture: air,
    linkto: "https://task3-sigma.vercel.app/",
    summary: "Lorem",
    kpi: ["lorem1", "lorem2", "lorem3"],
  },
  {
    id: 4,
    project: "Get Linked",
    tools: ["Web", "React", "Annimations", "Node"],
    picture: linked,
    linkto: "https://twitter-hackathon.vercel.app/",
    summary: "Lorem",
    kpi: ["lorem1", "lorem2", "lorem3"],
  },
];
export default done;
