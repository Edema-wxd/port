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
    linkto: "https://edema-wxd.github.io/miqr-redo/",
    summary:
      "The central feature of the application revolved around the generation and association of QR codes with individual users. The technology stack primarily consisted of the Django framework for the backend, powered by Python, and PostgreSQL for database management.",
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
    summary:
      "The product built to showcase a sophisticated virtual assistant website crafted with React, combining meticulous planning, user-centric design, front-end features, and a commitment to quality assurance. The result was an efficient and intuitive virtual assistant platform designed to meet user needs effectively.",
    kpi: [
      "Spearheaded the development of a virtual assistant website using the React framework to ensure a seamless and outstanding user experience.",
      "Prioritized collaboration and communication within the team through regular meetings, fostering a cohesive development environment.",
      "Addressed technical challenges and applied innovative solutions, enhancing problem-solving capabilities and contributing to the successful delivery of a high-quality virtual assistant website.",
    ],
  },
  {
    id: 3,
    project: "Metabnb",
    tools: ["Web 3.0", "React", "Node", "Wallet Connect"],
    picture: air,
    linkto: "https://task3-sigma.vercel.app/",
    summary:
      "This innovative project represents a forward-looking exploration at the intersection of real estate and the metaverse. Inspired by the success of Airbnb and aligned with Meta's vision, it seeks to redefine how individuals interact with digital spaces and shape the future of the evolving digital city landscape.",
    kpi: [
      "Built using the React framework to align with the principles of Web 3.0, emphasizing decentralization and improved user control.",
      "Incorporates Wallet Connect technology to ensure a seamless and secure connection between users' digital wallets and the metaverse, enhancing the overall user experience.",
      "Incorporates advanced technologies to create a realistic and immersive metaverse experience.",
    ],
  },
];
export default done;
{/**{  id: 4,  project: "Get Linked",  tools: ["Web", "React", "Annimations", "Node"],
  picture: linked,  linkto: "https://twitter-hackathon.vercel.app/",
  summary: "Lorem",  kpi: ["lorem1", "lorem2", "lorem3"],
},*/
}
