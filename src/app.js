import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./app.css";
import BackToTop from "./components/helper/back-to-top/back-to-top";
import ScrollToTop from "./components/helper/scroll-to-top";
import { ThemeContext } from "./contexts/theme-context";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import SurveyEasyPage from "./pages/project/surveyeasy";
import TAManagementPage from "./pages/project/taManagement";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} exact />
          <Route path="/projects" element={<ProjectPage />} exact />
          <Route
            path="/projects/surveyeasy"
            element={<SurveyEasyPage />}
            exact
          />
          <Route
            path="/projects/ta-management"
            element={<TAManagementPage />}
            exact
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
