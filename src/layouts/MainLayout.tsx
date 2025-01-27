import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
};

export default MainLayout;
