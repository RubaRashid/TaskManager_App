// import React from "react";
// import {
//   FaHome,
//   FaTasks,
//   FaPlusCircle,
//   FaFolder,
//   FaCog,
// } from "react-icons/fa";

// const Sidebar = () => {
//   const menuItems = [
//     { icon: <FaHome />, title: "Dashboard" },
//     { icon: <FaTasks />, title: "Tasks" },
//     { icon: <FaPlusCircle />, title: "Add Task" },
//     { icon: <FaFolder />, title: "Projects" },
//     { icon: <FaCog />, title: "Settings" },
//   ];

//   return (
//     <div className="sidebar">
//       <div>
//         <h2 className="logo">
//           Task<span>Manager</span>
//         </h2>

//         <ul className="menu">
//           {menuItems.map((item, index) => (
//             <li key={index}>
//               {item.icon}
//               <span>{item.title}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="sidebar-footer">
//         <div className="user-box">
//           <img
//             src="https://i.pravatar.cc/100"
//             alt="user"
//           />
//           <div>
//             <h6>Ayesha Khan</h6>
//             <small>Frontend Developer</small>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";


function Sidebar({ role = "user" }) {
  const adminMenu = [
    { name: "Dashboard", icon: "bi-speedometer2", path: "/admin/dashboard" },
    { name: "Users", icon: "bi-people", path: "/admin/users" },
    { name: "Tasks", icon: "bi-list-task", path: "/admin/tasks" },
    { name: "Projects", icon: "bi-folder", path: "/admin/projects" },
    { name: "Reports", icon: "bi-bar-chart", path: "/admin/reports" },
    { name: "Settings", icon: "bi-gear", path: "/admin/settings" },
  ];

  const userMenu = [
    { name: "Dashboard", icon: "bi-speedometer2", path: "/user/dashboard" },
    { name: "My Tasks", icon: "bi-check2-square", path: "/user/tasks" },
    { name: "Projects", icon: "bi-folder", path: "/user/projects" },
    { name: "Calendar", icon: "bi-calendar", path: "/user/calendar" },
    { name: "Messages", icon: "bi-chat-dots", path: "/user/messages" },
    { name: "Settings", icon: "bi-gear", path: "/user/settings" },
  ];

  const menuItems = role === "admin" ? adminMenu : userMenu;

  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <i className="bi bi-check2-square"></i>
        <span>TaskManager</span>
      </div>

      {/* Menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom section */}
      <div className="sidebar-footer">
        <div className="user-box">
          <i className="bi bi-person-circle"></i>
          <div>
            <p className="name">My Account</p>
            <small>{role.toUpperCase()}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;