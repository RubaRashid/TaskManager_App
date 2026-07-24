// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       name: "Task Manager App",
//       count: 12,
//     },

//     {
//       name: "E-Commerce API",
//       count: 8,
//     },

//     {
//       name: "Portfolio Website",
//       count: 4,
//     },

//     {
//       name: "Learning Platform",
//       count: 6,
//     },
//   ];

//   return (
//     <div className="side-card">
//       <h5>Projects</h5>

//       {projects.map((project, index) => (
//         <div
//           className="project-item"
//           key={index}
//         >
//           <span>{project.name}</span>
//           <span>{project.count}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Projects;












// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       name: "Website Redesign",
//       tasks: 24,
//       status: "In Progress",
//     },
//     {
//       name: "Mobile App",
//       tasks: 18,
//       status: "Pending",
//     },
//     {
//       name: "Marketing Campaign",
//       tasks: 12,
//       status: "Completed",
//     },
//     {
//       name: "Internal Dashboard",
//       tasks: 32,
//       status: "Completed",
//     },
//   ];

//   const styles = {
//     card: {
//       background: "#fff",
//       borderRadius: "20px",
//       padding: "20px",
//       boxShadow: "0 4px 15px rgba(0,0,0,.05)",
//     },

//     title: {
//       fontSize: "20px",
//       fontWeight: "600",
//       marginBottom: "20px",
//     },

//     table: {
//       width: "100%",
//       borderCollapse: "collapse",
//     },

//     th: {
//       textAlign: "left",
//       padding: "12px",
//       color: "#8a8f99",
//       borderBottom: "1px solid #eee",
//       fontSize: "14px",
//     },

//     td: {
//       padding: "15px 12px",
//       borderBottom: "1px solid #f1f1f1",
//       fontSize: "14px",
//     },

//     badge: (status) => ({
//       padding: "6px 12px",
//       borderRadius: "20px",
//       fontSize: "12px",
//       fontWeight: "600",

//       background:
//         status === "Completed"
//           ? "#dcfce7"
//           : status === "Pending"
//           ? "#fef3c7"
//           : "#dbeafe",

//       color:
//         status === "Completed"
//           ? "#15803d"
//           : status === "Pending"
//           ? "#ca8a04"
//           : "#2563eb",
//     }),
//   };

//   return (
//     <div style={styles.card}>
//       <h4 style={styles.title}>Recent Projects</h4>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th style={styles.th}>Project</th>
//             <th style={styles.th}>Tasks</th>
//             <th style={styles.th}>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {projects.map((project, index) => (
//             <tr key={index}>
//               <td style={styles.td}>
//                 {project.name}
//               </td>

//               <td style={styles.td}>
//                 {project.tasks}
//               </td>

//               <td style={styles.td}>
//                 <span
//                   style={styles.badge(
//                     project.status
//                   )}
//                 >
//                   {project.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Projects;




import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Projects({ projects = [] }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "success";

      case "In Progress":
        return "warning";

      case "Pending":
        return "secondary";

      default:
        return "primary";
    }
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h5 className="fw-bold mb-0">
            Recent Projects
          </h5>

          <span className="text-muted">
            {projects.length} Projects
          </span>

        </div>
        

        <div className="table-responsive">

          <table className="table align-middle table-hover">

            <thead>

              <tr>

                <th>Project</th>

                <th>Status</th>

                <th>Start Date</th>

                <th>End Date</th>

              </tr>

            </thead>

            <tbody>

              {projects.length > 0 ? (

                projects.map((project) => (

                  <tr key={project._id}>

                    <td>

                      <div>

                        <div className="fw-semibold">

                          {project.projectName}

                        </div>

                        <small className="text-muted">

                          {project.description}

                        </small>

                      </div>

                    </td>

                    <td>

                      <Badge
                        bg={getStatusBadge(
                          project.status
                        )}
                      >
                        {project.status}
                      </Badge>

                    </td>

                    <td>

                      {formatDate(
                        project.startDate
                      )}

                    </td>

                    <td>

                      {formatDate(
                        project.endDate
                      )}

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="text-center text-muted py-5"
                  >

                    No Projects Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <Link
  to="/admin/projects"
  className="btn fw-semibold rounded-pill px-4 py-2 view-all-btn"
  style={{
    background: "#fff",
    border: "1px solid #e5e7eb",
    color: "#4f46e5",
  }}
>
  View All
  <i className="bi bi-arrow-right ms-2"></i>
</Link>
        <div className="text-center mt-3">
              
          
        </div>

      </div>

    </div>
  );
}

export default Projects;