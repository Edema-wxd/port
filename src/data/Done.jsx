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
  },
  {
    id: 2,
    project: "Ticked",
    tools: ["Web", "React", "Axios", "Node"],
    picture: ticked,
    linkto: "https://ticked.hng.tech/",
  },
  {
    id: 3,
    project: "Metabnb",
    tools: ["Web 3.0", "React", "Node"],
    picture: air,
    linkto: "https://task3-sigma.vercel.app/",
  },
  {
    id: 4,
    project: "Get Linked",
    tools: ["Web", "React", "Annimations", "Node"],
    picture: linked,
    linkto: "https://twitter-hackathon.vercel.app/",
  },
];
export default done;
