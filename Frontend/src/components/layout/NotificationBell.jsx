import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import {
  getNotifications,
  markNotificationRead,
} from "../../services/notificationApi";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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

  // const handleRead = async (id) => {
  //   await markNotificationRead(id);
  //   loadNotifications();
  // };


  const handleRead = async (notification) => {
    try {
      await markNotificationRead(notification._id);

      if (notification.type === "Task") {
        navigate("/admin/tasks");
      } else if (notification.type === "Project") {
        navigate("/admin/projects");
      }

      loadNotifications();
    } catch (err) {
      console.log(err);
    }
  };

          console.log("NotificationBell Rendered");

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
          // 
          notifications.map((item) => (
            <li
              key={item._id}
              onClick={() => handleRead(item)}
              className="dropdown-item py-3"
              style={{
                cursor: "pointer",
                whiteSpace: "normal",
                backgroundColor: item.isRead
                  ? "#fff"
                  : "#eef5ff",
                borderBottom: "1px solid #f2f2f2",
              }}
            >
              <div className="d-flex justify-content-between">

                <strong>{item.title}</strong>

                {!item.isRead && (
                  <span className="badge bg-primary">
                    New
                  </span>
                )}

              </div>

              <div
                className="text-muted small mt-1"
              >
                {item.message}
              </div>

              <small className="text-secondary">
                {formatDistanceToNow(
                  new Date(item.createdAt),
                  { addSuffix: true }
                )}
              </small>
            </li>
          ))
        )}

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <button
            className="dropdown-item text-center fw-semibold text-primary"
            onClick={() => navigate("/admin/notifications")}
          >
            View All Notifications
          </button>
        </li>

      </ul>
    </div>
  );
}

export default NotificationBell;