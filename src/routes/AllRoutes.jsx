import React from "react";
import Layout from "../Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainPage from "../Pages";
import Projects from "../Pages/Introduction/IntroContent/Projects/Projects";
import ResumeRoute from "../Pages/Introduction/IntroHeader/CTA/ResumeRoute";

const AllRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainPage />} />
          {/* <Route path="/resume" element={<ResumeRoute/>} /> */}

          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/home" replace />}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default AllRoutes;
