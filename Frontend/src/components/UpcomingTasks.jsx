import React from "react";

const UpcomingTasks = () => {
  return (
    <div className="side-card">
      <h5>Upcoming Tasks</h5>

      <div className="upcoming-item">
        <h6>Create REST APIs</h6>
        <p>May 27, 2024</p>
      </div>

      <div className="upcoming-item">
        <h6>React Integration</h6>
        <p>May 30, 2024</p>
      </div>

      <div className="upcoming-item">
        <h6>Add Authentication</h6>
        <p>Jun 02, 2024</p>
      </div>
    </div>
  );
};

export default UpcomingTasks;