// import { useNavigate } from "react-router-dom";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Header.css";

// function Header({
//   title = "Dashboard",
//   userName = "Ahmed",
//   role = "User",
// }) {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     // <div className="dashboard-header">
//     //   <div>
//     //     <h3 className="fw-bold mb-1">
//     //       Welcome Back, {userName} 👋
//     //     </h3>
//     //     <p className="text-muted mb-0">
//     //       Here's what's happening with your tasks today.
//     //     </p>
//     //   </div>

//     //   <div className="header-right">
//     //     {/* Search */}
//     //     <div className="search-box">
//     //       <i className="bi bi-search"></i>
//     //       <input
//     //         type="text"
//     //         placeholder="Search tasks..."
//     //       />
//     //     </div>

//     //     {/* Notification */}
//     //     <div className="icon-btn position-relative">
//     //       <i className="bi bi-bell"></i>
//     //       <span className="notification-badge">
//     //         3
//     //       </span>
//     //     </div>

//     //     {/* Profile Dropdown */}
//     //     <div className="dropdown">
//     //       <button
//     //         className="btn profile-btn dropdown-toggle"
//     //         data-bs-toggle="dropdown"
//     //       >
//     //         <i className="bi bi-person-circle me-2"></i>
//     //         {userName}
//     //       </button>

//     //       <ul className="dropdown-menu dropdown-menu-end">
//     //         <li>
//     //           <span className="dropdown-item-text">
//     //             {role}
//     //           </span>
//     //         </li>

//     //         <li>
//     //           <hr className="dropdown-divider" />
//     //         </li>

//     //         <li>
//     //           <button
//     //             className="dropdown-item"
//     //             onClick={() => navigate("/profile")}
//     //           >
//     //             <i className="bi bi-person me-2"></i>
//     //             Profile
//     //           </button>
//     //         </li>

//     //         <li>
//     //           <button
//     //             className="dropdown-item"
//     //             onClick={() => navigate("/settings")}
//     //           >
//     //             <i className="bi bi-gear me-2"></i>
//     //             Settings
//     //           </button>
//     //         </li>

//     //         <li>
//     //           <button
//     //             className="dropdown-item text-danger"
//     //             onClick={handleLogout}
//     //           >
//     //             <i className="bi bi-box-arrow-right me-2"></i>
//     //             Logout
//     //           </button>
//     //         </li>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </div>
    

// <div className="dashboard-header">

//   <div className="page-info">
//     <h4>{title}</h4>
//     <span>Manage your tasks efficiently</span>
//   </div>

//   <div className="header-actions">

//     <div className="search-box">
//       <i className="bi bi-search"></i>
//       <input
//         type="text"
//         placeholder="Search..."
//       />
//     </div>

//     <button className="header-icon">
//       <i className="bi bi-bell"></i>
//     </button>

//     <button className="header-icon">
//       <i className="bi bi-gear"></i>
//     </button>

//     <div className="profile-section">
//       <img
//         src="https://i.pravatar.cc/40"
//         alt="profile"
//       />

//       <div>
//         <h6>Ahmed</h6>
//         <span>Administrator</span>
//       </div>

//       <i className="bi bi-chevron-down"></i>
//     </div>

//   </div>

// </div>
//   );
// }

// export default Header;





import { useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { useEffect, useState } from "react";


import { getMyProfile } from "../../services/profileApi";
import NotificationBell from "./NotificationBell";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderProfile from "./HeaderProfile";

function Header({
  title = "Dashboard",
  subtitle = "Manage your tasks efficiently",
}) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
  loadProfile();
}, []);

const loadProfile = async () => {
  try {
    const res = await getMyProfile();

    setUser({
      email: res.user.email,
      designation: res.user.designation,
      fullName: res.profile?.fullName,
      profilePicture:
        res.profile?.profilePicture ||
        null,
    });
  } catch (err) {
    console.log(err);
  }
};



  return (
    <div
      className="bg-white mb-4 px-4 py-3"
      style={{
        borderRadius: "24px",
        boxShadow: "0 6px 20px rgba(0,0,0,.05)",
      }}
    >
      <div className="row align-items-center">

        {/* Left */}

        <div className="col-lg-4">

          <h2
            className="fw-bold mb-1"
            style={{
              fontSize: "38px",
            }}
          >
            {title}
          </h2>

          <p
            className="text-muted mb-0"
            style={{
              fontSize: "18px",
            }}
          >
            {subtitle}
          </p>

        </div>

        {/* Right */}

        <div className="col-lg-8">

          <div className="d-flex justify-content-end align-items-center gap-3">

            <HeaderSearch />

            <NotificationBell />

            <button
              className="btn bg-light"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "18px",
              }}
              onClick={() =>
                navigate("/admin/settings")
              }
            >
              <FaCog size={22} />
            </button>

            <HeaderProfile />

          </div>

        </div>

      </div>
    </div>
  );
}

export default Header;