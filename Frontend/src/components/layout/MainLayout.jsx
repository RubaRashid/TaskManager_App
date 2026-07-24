import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout({ role }) {
  return (
    <div className="d-flex">
      <Sidebar role={role} />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "280px",
          background: "#f7f8fc",
          minHeight: "100vh",
          padding: "0 5px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            
            minHeight: "calc(100vh - 0px)",
            padding: "20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;