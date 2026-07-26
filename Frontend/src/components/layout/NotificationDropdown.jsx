function NotificationDropdown() {
  return (
    <div
      className="card border-0 shadow-lg"
      style={{
        width: "320px",
        borderRadius: "16px",
      }}
    >
      <div className="card-body">

        <h6 className="fw-bold mb-3">
          Notifications
        </h6>

        <div className="border-bottom pb-2 mb-2">

          <strong>Task Assigned</strong>

          <div className="text-muted small">
            Home Page Design assigned to you
          </div>

        </div>

        <div className="border-bottom pb-2 mb-2">

          <strong>Project Updated</strong>

          <div className="text-muted small">
            Inventory System updated
          </div>

        </div>

        <div className="text-center mt-3">

          <button className="btn btn-link text-decoration-none">

            View All

          </button>

        </div>

      </div>
    </div>
  );
}

export default NotificationDropdown;