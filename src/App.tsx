import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProjectList } from "./components/ProjectList";
import { ProjectPage } from "./components/ProjectPage";
//import ScrollToTop from "./components/ScrollToTop"; // export default
import listdata from "./data/listdata";

import "./styles.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList listdata={listdata} />} />
        <Route
          path="/:projecturl"
          element={<ProjectPage listdata={listdata} />}
        />
        <Route
          path="/:projecturl/:cardurl"
          element={<ProjectPage listdata={listdata} />}
        />
      </Routes>
    </Router>
  );
};

/*
<Route
exact
path={`/:projecturl(${projectUrls})/:cardurl(${cardUrls})`}
render={(props) => <ProjectPage {...props} listdata={listdata} />}
/>
<Route render={(props) => <ProjectList listdata={listdata} />} /> */
