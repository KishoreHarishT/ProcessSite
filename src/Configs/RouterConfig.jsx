import React from "react";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import ActivitiesPage from "../pages/ActivitiesPage";
import ImpactAnalysisPage from "../pages/ImpactAnalysisPage";
import ProjectAddEditPage from "../pages/ProjectAddEditPage";
import ReleaseNotesPage from "../pages/ReleaseNotesPage";



const RouterConfig = () => {
  
  return (
    <>      
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/impact-analysis" element={<ImpactAnalysisPage />} />
        <Route path="/project-addedit" element={<ProjectAddEditPage />} />
        <Route path="/releasenotes" element={<ReleaseNotesPage />} />
      </Routes>

      {/* ///navigate("/dashboard") */}
    </>
  );
};

export default RouterConfig;