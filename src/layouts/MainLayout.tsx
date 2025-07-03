import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="main-layout bg-gray-50">
      <Outlet />
    </div>
  );
};

export default MainLayout;
