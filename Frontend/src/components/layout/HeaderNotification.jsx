import { useState } from "react";
import { FaBell } from "react-icons/fa";
import NotificationDropdown from "./NotificationDropdown";

function HeaderNotification() {

  const [open, setOpen] = useState(false);

  return (
    <div
      className="position-relative"
    >
      <button
        className="btn bg-light position-relative"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "18px",
        }}
        onClick={() =>
          setOpen(!open)
        }
      >
        <FaBell size={22} />

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          3
        </span>

      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "70px",
            zIndex: 999,
          }}
        >
          <NotificationDropdown />
        </div>
      )}

    </div>
  );
}

export default HeaderNotification;