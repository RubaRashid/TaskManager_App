import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import {
  getNotifications,
  markNotificationRead,
} from "../../services/notificationApi";

function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);

  const loadNotifications = async () => {
    try {
      const res = await getNotifications();

      setNotifications(res.notifications || []);
      setCount(res.unreadCount || 0);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNotifications();

    const interval = setInterval(() => {
      loadNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleRead = async (id) => {
    await markNotificationRead(id);
    loadNotifications();
  };

  return (
    <div className="dropdown">

      <button
        className="btn btn-light position-relative"
        data-bs-toggle="dropdown"
      >
        <FaBell size={18} />

        {count > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {count}
          </span>
        )}
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end shadow"
        style={{
          width: "340px",
          borderRadius: "15px",
        }}
      >
        <li className="dropdown-header fw-bold">
          Notifications
        </li>

        {notifications.length === 0 ? (
          <li className="px-3 py-2 text-muted">
            No notifications
          </li>
        ) : (
          notifications.map((item) => (
            <li
              key={item._id}
              onClick={() => handleRead(item._id)}
              className="dropdown-item"
              style={{
                cursor: "pointer",
                whiteSpace: "normal",
              }}
            >
              <div className="fw-semibold">
                {item.title}
              </div>

              <small className="text-muted">
                {item.message}
              </small>

              {!item.isRead && (
                <span
                  className="badge bg-primary ms-2"
                >
                  New
                </span>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default NotificationBell;