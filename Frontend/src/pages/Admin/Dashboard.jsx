// import React from "react";
// import Sidebar from "../../components/Sidebar";
// import Header from "../../components/Header";
// import StatsCards from "../../components/StatsCards";
// import TaskList from "../../components/TaskList";
// import UpcomingTasks from "../../components/UpcomingTasks";
// import Projects from "../../components/Projects";

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <Sidebar />

//       <div className="main-content">
//         <Header />

//         <StatsCards />

//         <div className="content-grid">
//           <div>
//             <TaskList />
//           </div>

//           <div className="right-panel">
//             <UpcomingTasks />
//             <Projects />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// pages/Admin/Dashboard.jsx

// import Sidebar from "../../components/layout/Sidebar";

// function Dashboard() {
//   return (
//     <> 
//     <Sidebar role="admin" />
//     <h1>User Dashboard</h1>
//     </>
//   );
// }


// export default Dashboard;





// import Sidebar from "../../components/layout/Sidebar";
// import Header from "../../components/layout/Header";

// function AdminDashboard() {
//   return (
//     <div className="d-flex">
//       <h2>Dashboard</h2>
//       </div>
//   );
// }

// export default AdminDashboard;





// import {
//   TaskOverviewChart,
//   TaskStatusChart,
// } from "../../components/TaskOverviewChart";
// import Header from "../../components/layout/Header";
// import StatsCards from "../../components/StatsCards";
// import Projects from "../../components/Projects";

// function AdminDashboard() {
//   return (
//     <>
//       <Header
//         title="Dashboard"
//         userName="Ahmed"
//         role="Administrator"
//       />
//       <div className="mb-4">

//       </div>

//       <StatsCards />

//       <div className="row mt-4">
//         {/* <div className="col-lg-8">
//           <div className="card border-0 shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-3">
//               Tasks Overview
//             </h5>

//             <div
//               style={{
//                 height: "300px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               Line Chart
//             </div>
//           </div>
//         </div> */}


//         <div className="col-lg-8">
//           <TaskOverviewChart />
//         </div>
//         <div className="col-lg-4 ps-5">
//           <TaskStatusChart />
//         </div>
//         {/* <div className="col-lg-4">
//           <div className="card border-0 shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-3">
//               Tasks Status
//             </h5>








//             <div
//               style={{
//                 height: "300px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               Donut Chart
//             </div>
//           </div>
//         </div> */}
//       </div>

//       <div className="row mt-4">
//         <div className="col-lg-8">
//           <Projects />
//         </div>

//         <div className="col-lg-4">
//           <div className="card border-0 shadow-sm rounded-4 p-4">
//             <h5 className="fw-bold mb-3">
//               Recent Users
//             </h5>

//             <ul className="list-group list-group-flush">
//               <li className="list-group-item">
//                 Ahmed
//               </li>

//               <li className="list-group-item">
//                 Ayesha
//               </li>

//               <li className="list-group-item">
//                 Ali
//               </li>

//               <li className="list-group-item">
//                 Fatima
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminDashboard;

















import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

import Header from "../../components/layout/Header";
import StatsCards from "../../components/StatsCards";
import Projects from "../../components/Projects";

import {
  TaskOverviewChart,
  TaskStatusChart,
} from "../../components/TaskOverviewChart";

function AdminDashboard() {
  const [dashboardData, setDashboardData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const fetchDashboard =
    async () => {
      try {
        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const res = await api.get(
          "/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDashboardData(res.data);
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
          "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "70vh",
        }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* <Header
        title="Dashboard"
        userName="Ahmed"
        role="Administrator"
      /> */}

      <Header
        title="Dashboard"
        subtitle="Manage your tasks efficiently"
      />

      <div className="mb-4"></div>

      <StatsCards
        cards={
          dashboardData?.cards
        }
      />

      <div className="row mt-4">
        <div className="col-lg-8">
          <TaskOverviewChart
            taskStatus={
              dashboardData?.taskStatus
            }
            projectStatus={
              dashboardData?.projectStatus
            }
          />
        </div>

        <div className="col-lg-4 ps-lg-4 mt-4 mt-lg-0">
          <TaskStatusChart
            taskStatus={
              dashboardData?.taskStatus
            }
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-8">
          <Projects
            projects={
              dashboardData?.recentProjects
            }
          />
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

            <h5 className="fw-bold mb-4">
              Recent Tasks
            </h5>

            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead>

                  <tr>

                    <th>Task</th>

                    <th>Status</th>

                  </tr>

                </thead>

                <tbody>

                  {dashboardData
                    ?.recentTasks
                    ?.length > 0 ? (

                    dashboardData.recentTasks.map(
                      (task) => (

                        <tr
                          key={
                            task._id
                          }
                        >
                          <td>

                            {task.taskName ||
                              task.title}

                          </td>

                          <td>

                            <span
                              className={`badge ${task.status ===
                                "Completed"
                                ? "bg-success"

                                : task.status ===
                                  "In Progress"

                                  ? "bg-warning text-dark"

                                  : "bg-secondary"
                                }`}
                            >
                              {
                                task.status
                              }
                            </span>

                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td
                        colSpan="2"
                        className="text-center text-muted"
                      >
                        No Tasks Found
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>
              <Link
                to="/admin/tasks"
                className="btn fw-semibold rounded-pill px-4 py-2"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  color: "#4f46e5",
                  boxShadow: "0 4px 12px rgba(0,0,0,.06)",
                  transition: "all .3s ease",
                }}
              >
                View All
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;