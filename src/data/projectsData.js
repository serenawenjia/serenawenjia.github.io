import surveyeasy from "../assets/images/surveyeasy/cover.png";
import taManagement from "../assets/images/ta-management/cover.png";

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
    projectName:
      "Data Analysis: COVID and Vaccination Hesitancy as Viewed by Social Media",
    projectDesc:
      "I performed data collection and data analysis on Twitter posts about COVID-19 and vaccination.",
    tags: ["Data Collection", "Data Analysis", "Data Visualization"],
    demo: "https://github.com/serenawenjia/comp598_finalProject/blob/main/comp598_final_report.pdf",
    image: undefined, // TODO
  },
];
