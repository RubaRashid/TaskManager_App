function RecentReportsTable({
  recentTasks = [],
  recentProjects = [],
}) {
  return (
    <div className="row g-4">

      {/* Recent Tasks */}

      <div className="col-lg-7">

        <div
          className="bg-white p-4 h-100"
          style={{
            borderRadius: "18px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.05)",
          }}
        >

          <div className="d-flex justify-content-between align-items-center mb-3">

            <h5 className="fw-bold mb-0">
              Recent Tasks
            </h5>

          </div>

          <div className="table-responsive">

            <table className="table align-middle table-hover">

              <thead>

                <tr>

                  <th>Task</th>

                  <th>Project</th>

                  <th>Status</th>

                  <th>Priority</th>

                  <th>Due Date</th>

                </tr>

              </thead>

              <tbody>

                {recentTasks.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="text-center py-4 text-muted"
                    >
                      No Tasks Found
                    </td>

                  </tr>

                ) : (

                  recentTasks.slice(0, 5).map((task) => (

                    <tr key={task._id}>

                      <td>{task.taskName}</td>

                      <td>
                        {task.projectId?.projectName}
                      </td>

                      <td>

                        <span
                          className={`badge ${
                            task.status === "Completed"
                              ? "bg-success"

                              : task.status ===
                                "In Progress"

                              ? "bg-primary"

                              : "bg-warning text-dark"
                          }`}
                        >
                          {task.status}
                        </span>

                      </td>

                      <td>{task.priority}</td>

                      <td>

                        {new Date(
                          task.dueDate
                        ).toLocaleDateString()}

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Recent Projects */}

      <div className="col-lg-5">

        <div
          className="bg-white p-4 h-100"
          style={{
            borderRadius: "18px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,.05)",
          }}
        >

          <h5 className="fw-bold mb-3">
            Recent Projects
          </h5>

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead>

                <tr>

                  <th>Project</th>

                  <th>Status</th>

                </tr>

              </thead>

              <tbody>

                {recentProjects.length === 0 ? (

                  <tr>

                    <td
                      colSpan="2"
                      className="text-center py-4 text-muted"
                    >
                      No Projects Found
                    </td>

                  </tr>

                ) : (

                  recentProjects
                    .slice(0, 5)
                    .map((project) => (

                      <tr key={project._id}>

                        <td>

                          {project.projectName}

                        </td>

                        <td>

                          <span
                            className={`badge ${
                              project.status ===
                              "Completed"

                                ? "bg-success"

                                : project.status ===
                                  "In Progress"

                                ? "bg-primary"

                                : "bg-warning text-dark"
                            }`}
                          >
                            {project.status}
                          </span>

                        </td>

                      </tr>

                    ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RecentReportsTable;