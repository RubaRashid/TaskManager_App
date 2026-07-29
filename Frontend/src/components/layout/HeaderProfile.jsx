// import { useState } from "react";
// import {
//   FaChevronDown,
// } from "react-icons/fa";

// import ProfileDropdown from "./ProfileDropdown";

// function HeaderProfile() {

//   const [open, setOpen] = useState(false);

//   // Temporary Dummy Data
//   const user = {
//     name: "Ahmed",
//     role: "Administrator",
//     image:
//       "https://i.pravatar.cc/150?img=12",
//   };

//   return (
//     <div
//       className="position-relative"
//     >
//       <button
//         className="btn bg-light d-flex align-items-center px-3"
//         style={{
//           borderRadius: "18px",
//           height: "74px",
//           minWidth: "230px",
//         }}
//         onClick={() =>
//           setOpen(!open)
//         }
//       >
//         <img
//           src={user.image}
//           alt=""
//           width="52"
//           height="52"
//           className="rounded-circle"
//         />

//         <div
//           className="ms-3 text-start"
//         >
//           <div
//             className="fw-bold"
//           >
//             {user.name}
//           </div>

//           <small
//             className="text-muted"
//           >
//             {user.role}
//           </small>
//         </div>

//         <FaChevronDown
//           className="ms-auto"
//         />
//       </button>

//       {open && (
//         <div
//           style={{
//             position: "absolute",
//             top: "82px",
//             right: 0,
//             zIndex: 999,
//           }}
//         >
//           <ProfileDropdown />
//         </div>
//       )}

//     </div>
//   );
// }

// export default HeaderProfile;

import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import ProfileDropdown from "./ProfileDropdown";
import { getMyProfile } from "../../services/profileApi";

function HeaderProfile() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyProfile();
        setUserData(data);
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };

    fetchProfile();
  }, []);

  // Loading state
  if (!userData) {
    return (
      <div
        className="btn bg-light d-flex align-items-center px-3"
        style={{
          borderRadius: "18px",
          height: "74px",
          minWidth: "230px",
        }}
      >
        <div className="spinner-border spinner-border-sm text-primary me-3"></div>
        <span className="text-muted">Loading...</span>
      </div>
    );
  }

  const { user, profile } = userData;

  const fullName =
    profile?.fullName ||
    user.email.split("@")[0];

  const designation =
    user.designation || "User";

  const avatar =
    profile?.profilePicture ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      fullName
    )}&background=6366f1&color=fff`;

  return (
    <div className="position-relative">
      <button
        className="btn bg-light d-flex align-items-center px-3"
        style={{
          borderRadius: "18px",
          height: "74px",
          minWidth: "250px",
        }}
        onClick={() => setOpen(!open)}
      >
        <img
          src={avatar}
          alt="avatar"
          width="52"
          height="52"
          className="rounded-circle object-fit-cover"
        />

        <div className="ms-3 text-start">
          <div className="fw-bold">
            {fullName}
          </div>

          <small className="text-muted d-block">
            {designation}
          </small>

          <small className="text-muted" style={{ fontSize: "11px" }}>
            {user.role}
          </small>
        </div>

        <FaChevronDown className="ms-auto" />
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "82px",
            right: 0,
            zIndex: 999,
          }}
        >
          <ProfileDropdown />
        </div>
      )}
    </div>
  );
}

export default HeaderProfile;