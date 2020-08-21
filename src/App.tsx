import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProjectList } from "./components/ProjectList";
import { ProjectPage } from "./components/ProjectPage";
//import ScrollToTop from "./components/ScrollToTop"; // export default
import projectList from "./data/ProjectList";

import "./styles.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList projectList={projectList} />} />
        <Route
          path="/:projecturl"
          element={<ProjectPage projectList={projectList} />}
        />
        <Route
          path="/:projecturl/:cardurl"
          element={<ProjectPage projectList={projectList} />}
        />
      </Routes>
    </Router>
  );
};
