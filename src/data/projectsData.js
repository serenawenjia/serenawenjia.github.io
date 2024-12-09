import surveyeasy from "../assets/images/surveyeasy/cover.png";
import taManagement from "../assets/images/ta-management/cover.png";

export const projectsData = [
  {
    projectName: "Design & Development: TA Management Website",
    projectDesc:
      "This project is about designing and implementing a TA management system for McGill University's School of Computer Science",
    tags: ["Web Design", "Database Design", "Web Development"],
    demo: "/projects/ta-management",
    image: taManagement,
  },
  {
    projectName: "Research, Design, & Development: SurveyEasy Website",
    projectDesc:
      "This project is about designing and implementing a website that is easy-to-use for both researchers and survey participants.",
    tags: ["UX Research", "Product Design", "Web Development"], // 写role 还是用到的工具？
    demo: "/projects/surveyeasy",
    image: surveyeasy,
  },
];
