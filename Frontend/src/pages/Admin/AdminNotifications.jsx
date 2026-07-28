import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import {
  getNotifications,
  markNotificationRead,
} from "../../services/notificationApi";

function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = async () => {
    try {
      const res = await getNotifications();
      setNotifications(res.notifications || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleRead = async (id) => {
    await markNotificationRead(id);
    loadNotifications();
  };

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">
            Notifications
          </h3>

          <p className="text-muted mb-0">
            View all your recent notifications
          </p>
        </div>

        <span className="badge bg-primary fs-6">
          {notifications.length} Notifications
        </span>
      </div>

      <div
        className="card border-0 shadow-sm"
        style={{
          borderRadius: "18px",
        }}
      >
        {notifications.length === 0 ? (
          <div className="text-center py-5">

            <FaBell
              size={45}
              className="text-secondary mb-3"
            />

            <h5>No Notifications</h5>

            <p className="text-muted">
              You're all caught up 🎉
            </p>

          </div>
        ) : (
          <div className="list-group list-group-flush">

            {notifications.map((item) => (
              <div
                key={item._id}
                className="list-group-item p-4"
                style={{
                  cursor: "pointer",
                  backgroundColor: item.isRead
                    ? "#fff"
                    : "#eef5ff",
                }}
                onClick={() =>
                  handleRead(item._id)
                }
              >
                <div className="d-flex justify-content-between">

                  <div>

                    <h6 className="fw-bold mb-1">
                      {item.title}
                    </h6>

                    <p className="text-muted mb-2">
                      {item.message}
                    </p>

                    <small className="text-secondary">
                      {formatDistanceToNow(
                        new Date(item.createdAt),
                        {
                          addSuffix: true,
                        }
                      )}
                    </small>

                  </div>

                  {!item.isRead && (
                    <span className="badge bg-primary h-25">
                      New
                    </span>
                  )}

                </div>
              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}

export default AdminNotifications;