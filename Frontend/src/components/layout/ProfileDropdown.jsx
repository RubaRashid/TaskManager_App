import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function ProfileDropdown() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div
      className="card border-0 shadow-lg"
      style={{
        width: "230px",
        borderRadius: "16px",
      }}
    >
      <div className="card-body p-2">

        <Link
          to="/profile"
          className="dropdown-item py-2"
        >
          <FaUser className="me-2" />
          My Profile
        </Link>

        <Link
          to="/admin/settings"
          className="dropdown-item py-2"
        >
          <FaCog className="me-2" />
          Settings
        </Link>

        <hr className="my-2" />

        <button
          className="dropdown-item text-danger py-2"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>

      </div>
    </div>
  );
}

export default ProfileDropdown;