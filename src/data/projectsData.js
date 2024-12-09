import surveyeasy from "../assets/images/surveyeasy/cover.png";
import taManagement from "../assets/images/ta-management/cover.png";
import cover598 from "../assets/images/598.gif";

export const projectsData = [
  {
    projectName: "Design & Development: TA Management Website",
    projectDesc:
      "I designed and implemented a TA management system for McGill University's School of Computer Science, as the leader of a team of 3.",
    tags: ["Web Design", "Database Design", "Web Development"],
    demo: "/projects/ta-management",
    image: taManagement,
  },
  {
    projectName: "Research, Design, & Development: SurveyEasy Website",
    projectDesc:
      "I researched, designed, and implemented a survey platform that is easy-to-use for both researchers and survey participants.",
    tags: ["UX Research", "Product Design", "Web Development"],
    demo: "/projects/surveyeasy",
    image: surveyeasy,
  },
  {
    projectName: "Data Analysis in Python: COVID on Twitter",
    projectDesc:
      "I performed data collection and data analysis on Twitter posts about COVID-19 and vaccination.",
    tags: ["Data Collection", "Data Analysis", "Data Visualization"],
    demo:
      "https://github.com/serenawenjia/comp598_finalProject/blob/main/comp598_final_report.pdf",
    image: cover598,
  },
  {
    projectName: "Data Analysis and Visualization in R: Movie Score Analysis",
    projectDesc:
      "Our team of 3 conducted data analysis and visualization on factors that contribute to movie score.",
    tags: ["Data Wrangling", "Data Analysis", "Data Visualization"],
    demo:
      "https://drive.google.com/file/d/1M8z_kwF8SL6QrlomBncDfBXHhUe_lPa_/view?usp=sharing",
    image: undefined, // TODO
  },
];
