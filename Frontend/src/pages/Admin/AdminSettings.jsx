// import React from "react";
// import {
//   FaUserCog,
//   FaBell,
//   FaLock,
// } from "react-icons/fa";

// function AdminSettings() {
//   return (
//     <div className="container-fluid">

//       {/* Header */}

//       <div className="mb-4 text-start">
//         <h4 className="fw-bold mb-1">
//           Settings
//         </h4>

//       </div>

//       <div className="row g-4">

//         {/* LEFT SIDE */}

//         <div className="col-lg-8">

//           <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

//             <div className="mb-4 text-start">
//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <FaUserCog
//                   color="#7c3aed"
//                   size={18}
//                 />

//                 <h5 className="fw-bold mb-0">
//                   Profile Settings
//                 </h5>
//               </div>

//               <small className="text-muted">
//                 Manage your profile information
//               </small>
//             </div>

//             <div className="row">

//               {/* Profile Image */}

//               <div className="col-md-4 text-center">

//                 <img
//                   src="https://i.pravatar.cc/150?img=12"
//                   alt="Profile"
//                   className="rounded-circle mb-3"
//                   width="130"
//                   height="130"
//                 />

//                 <div>
//                   <button
//                     className="btn text-white px-4"
//                     style={{
//                       background: "#7c3aed",
//                       border: "none",
//                     }}
//                   >
//                     Change Picture
//                   </button>
//                 </div>

//                 <small className="text-muted d-block mt-3">
//                   JPG, PNG or GIF,
//                   Max size 2MB
//                 </small>

//               </div>

//               {/* Form */}

//               <div className="col-md-8">

//                 <div className="row">

//                   <div className=" mb-2">
//                     <label className="form-label fw-semibold">
//                       Full Name
//                     </label>

//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="Admin User"
//                     />
//                   </div>

//                   <div className=" mb-2">
//                     <label className="form-label fw-semibold">
//                       Email Address
//                     </label>

//                     <input
//                       type="email"
//                       className="form-control"
//                       defaultValue="admin@example.com"
//                     />
//                   </div>

//                   <div className=" mb-2">
//                     <label className="form-label fw-semibold">
//                       Phone Number
//                     </label>

//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="+92 312 3456789"
//                     />
//                   </div>

//                   <div className=" mb-2">
//                     <label className="form-label fw-semibold">
//                       Job Title
//                     </label>

//                     <input
//                       type="text"
//                       className="form-control"
//                       defaultValue="System Administrator"
//                     />
//                   </div>

//                   <div className="col-12 mb-2">
//                     <label className="form-label fw-semibold">
//                       Bio
//                     </label>

//                     <textarea
//                       rows="5"
//                       className="form-control"
//                       defaultValue="I am responsible for managing the system and all users."
//                     />
//                   </div>

//                 </div>

//                 <button
//                   className="btn text-white px-4"
//                   style={{
//                     background: "#7c3aed",
//                     border: "none",
//                   }}
//                 >
//                   Save Changes
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//         {/* RIGHT SIDE */}

//         <div className="col-lg-4">

//           <div className="d-flex flex-column gap-4">

//             {/* Notifications */}

//             <div className="card border-0 shadow-sm rounded-4 p-4">

//               <div className="d-flex align-items-center gap-2 mb-3">
//                 <FaBell
//                   color="#f59e0b"
//                   size={18}
//                 />

//                 <h5 className="fw-bold mb-0">
//                   Notifications
//                 </h5>
//               </div>

//               <div className="form-check form-switch mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   defaultChecked
//                 />

//                 <label className="form-check-label fw-medium">
//                   Email Notifications
//                 </label>

//                 <div>
//                   <small className="text-muted">
//                     Receive updates via email
//                   </small>
//                 </div>
//               </div>

//               <div className="form-check form-switch mb-2">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   defaultChecked
//                 />

//                 <label className="form-check-label fw-medium">
//                   Task Alerts
//                 </label>

//                 <div>
//                   <small className="text-muted">
//                     Notify when task changes
//                   </small>
//                 </div>
//               </div>

//               <div className="form-check form-switch">
//                 <input
//                   className="form-check-input"
//                   type="checkbox"
//                   defaultChecked
//                 />

//                 <label className="form-check-label fw-medium">
//                   Project Updates
//                 </label>

//                 <div>
//                   <small className="text-muted">
//                     Receive project activity updates
//                   </small>
//                 </div>
//               </div>

//             </div>

//             {/* Security */}

//             <div className="card border-0 shadow-sm rounded-4 p-4">

//               <div className="d-flex align-items-center gap-2 mb-2">
//                 <FaLock
//                   color="#ef4444"
//                   size={18}
//                 />

//                 <h5 className="fw-bold mb-0">
//                   Security
//                 </h5>
//               </div>

//               <div className="mb-2">
//                 <label className="form-label fw-semibold">
//                   Current Password
//                 </label>

//                 <input
//                   type="password"
//                   className="form-control"
//                 />
//               </div>

//               <div className="mb-2">
//                 <label className="form-label fw-semibold">
//                   New Password
//                 </label>

//                 <input
//                   type="password"
//                   className="form-control"
//                 />
//               </div>

//               <div className="mb-3">
//                 <label className="form-label fw-semibold">
//                   Confirm Password
//                 </label>

//                 <input
//                   type="password"
//                   className="form-control"
//                 />
//               </div>

//               <button className="btn btn-danger w-100">
//                 Update Password
//               </button>

//             </div>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default AdminSettings;




import { useState } from "react";

import ProfileSettings from "../../components/settings/ProfileSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";

function AdminSettings() {

  const [activeTab, setActiveTab] =
    useState("profile");

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="mb-4">

        <h3 className="fw-bold">
          Settings
        </h3>

        <p className="text-muted mb-0">
          Manage your account preferences
        </p>

      </div>

      {/* Tabs */}

      <div
        className="bg-white shadow-sm rounded-4 p-2 mb-4"
      >

        <div className="d-flex gap-2">

          <button
            className={`btn ${
              activeTab === "profile"
                ? "btn-primary"
                : "btn-light"
            }`}
            onClick={() =>
              setActiveTab("profile")
            }
          >
            Profile
          </button>

          <button
            className={`btn ${
              activeTab ===
              "notifications"
                ? "btn-primary"
                : "btn-light"
            }`}
            onClick={() =>
              setActiveTab(
                "notifications"
              )
            }
          >
            Notifications
          </button>

          <button
            className={`btn ${
              activeTab === "security"
                ? "btn-primary"
                : "btn-light"
            }`}
            onClick={() =>
              setActiveTab("security")
            }
          >
            Security
          </button>

        </div>

      </div>

      {/* Body */}

      {activeTab === "profile" && (
        <ProfileSettings />
      )}

      {activeTab ===
        "notifications" && (
        <NotificationSettings />
      )}

      {activeTab === "security" && (
        <SecuritySettings />
      )}

    </div>
  );
}

export default AdminSettings;

