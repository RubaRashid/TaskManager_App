// import { Routes, Route } from "react-router-dom";

// import Login from "../pages/Auth/Login";

// import AdminDashboard from "../pages/Admin/Dashboard";

// import UserDashboard from "../pages/User/Dashboard";

// function AppRoutes() {
//   return (
//     <Routes>

//       <Route
//         path="/"
//         element={<Login />}
//       />

//       <Route
//         path="/admin/dashboard"
//         element={<AdminDashboard />}
//       />

//       <Route
//         path="/user/dashboard"
//         element={<UserDashboard />}
//       />

//     </Routes>
//   );
// }

// export default AppRoutes;







import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Auth/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminTasks from "../pages/Admin/AdminTasks";
import AdminProjects from "../pages/Admin/AdminProjects";
import AdminUsers from "../pages/Admin/User";
import AdminReports from "../pages/Admin/AdminReports";
import AdminSettings from "../pages/Admin/AdminSettings";

import UserDashboard from "../pages/User/Dashboard";
// import MyTasks from "../pages/user/MyTasks";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />
      {/* Admin */}

      <Route
        path="/admin"
        element={<MainLayout role="admin" />}
      >

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/admin/users"
          element={<AdminUsers />}
        />
        <Route
          path="/admin/tasks"
          element={<AdminTasks />}
        />

        <Route
          path="/admin/projects"
          element={<AdminProjects />}
        />

        <Route
          path="/admin/reports"
          element={<AdminReports />}
        />

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />


        {/* <Route
          path="users"
          element={<Users />}
        /> */}

        {/* <Route
          path="tasks"
          element={<Tasks />}
        />

        <Route
          path="projects"
          element={<Projects />}
        /> */}
      </Route>

      {/* User */}

      <Route
        path="/user"
        element={<MainLayout role="user" />}
      >
        <Route
          path="dashboard"
          element={<UserDashboard />}
        />

        {/* <Route
          path="tasks"
          element={<MyTasks />}
        /> */}
      </Route>

    </Routes>
  );
}

export default AppRoutes;