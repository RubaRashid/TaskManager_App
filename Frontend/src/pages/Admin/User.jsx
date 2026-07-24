// // import { FaPlus, FaSearch } from "react-icons/fa";

// // function UsersPage() {
// //   const users = [
// //     {
// //       id: 1,
// //       name: "Ahmed Ali",
// //       email: "ahmed@gmail.com",
// //       role: "Admin",
// //       status: "Active",
// //     },
// //     {
// //       id: 2,
// //       name: "Ayesha Khan",
// //       email: "ayesha@gmail.com",
// //       role: "User",
// //       status: "Active",
// //     },
// //     {
// //       id: 3,
// //       name: "Ali Raza",
// //       email: "ali@gmail.com",
// //       role: "User",
// //       status: "Inactive",
// //     },
// //   ];

// //   return (
// //     <>
// //       {/* Page Title */}
// //       {/* <div className="mb-4">
// //         <h3 className="fw-bold">Users Management</h3>
// //         <p className="text-muted">
// //           Manage all registered users
// //         </p>
// //       </div> */}

// //       {/* Top Bar */}
// //       <div
// //         className="bg-white rounded-4 p-3 mb-4 d-flex justify-content-between align-items-center"
// //         style={{
// //           boxShadow:
// //             "0 4px 15px rgba(0,0,0,.05)",
// //         }}
// //       >
// //         <div
// //           className="d-flex align-items-center px-3"
// //           style={{
// //             width: "320px",
// //             height: "45px",
// //             background: "#f5f7fb",
// //             borderRadius: "12px",
// //           }}
// //         >
// //           <FaSearch />

// //           <input
// //             type="text"
// //             placeholder="Search users..."
// //             className="border-0 bg-transparent ms-2 w-100"
// //           />
// //         </div>

// //         <button className="btn btn-primary rounded-3">
// //           <FaPlus className="me-2" />
// //           Add User
// //         </button>
// //       </div>

// //       {/* Table */}
// //       <div
// //         className="bg-white rounded-4 p-3"
// //         style={{
// //           boxShadow:
// //             "0 4px 15px rgba(0,0,0,.05)",
// //         }}
// //       >
// //         <table className="table align-middle">
// //           <thead>
// //             <tr>
// //               <th>User</th>
// //               <th>Email</th>
// //               <th>Role</th>
// //               <th>Status</th>
// //               <th>Actions</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {users.map((user) => (
// //               <tr key={user.id}>
// //                 <td>
// //                   <div className="d-flex align-items-center gap-3">
// //                     <img
// //                       src={`https://i.pravatar.cc/40?u=${user.id}`}
// //                       alt=""
// //                       className="rounded-circle"
// //                     />

// //                     <span>{user.name}</span>
// //                   </div>
// //                 </td>

// //                 <td>{user.email}</td>

// //                 <td>{user.role}</td>

// //                 <td>
// //                   <span
// //                     className={`badge ${
// //                       user.status === "Active"
// //                         ? "bg-success"
// //                         : "bg-danger"
// //                     }`}
// //                   >
// //                     {user.status}
// //                   </span>
// //                 </td>

// //                 <td>
// //                   <button className="btn btn-sm btn-outline-primary me-2">
// //                     Edit
// //                   </button>

// //                   <button className="btn btn-sm btn-outline-danger">
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </>
// //   );
// // }

// // export default UsersPage;













// import React, { useState } from "react";
// import {
//   FaPlus,
//   FaSearch,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";

// const styles = {
//   Header: {
//     height: "85px",

//   background: "white",

//   borderRadius: "20px",

//   padding: "0 25px",

//   boxShadow: "0 10px 25px rgba(0,0,0,.04)"
//   }
// }


// const AdminUsers = () => {
//   const [search, setSearch] = useState("");
//   const [roleFilter, setRoleFilter] =
//     useState("All");
//   const [statusFilter, setStatusFilter] =
//     useState("All");

//   const users = [
//     {
//       id: 1,
//       name: "Ahmed Ali",
//       email: "ahmed@gmail.com",
//       role: "Admin",
//       status: "Active",
//     },

//     {
//       id: 2,
//       name: "Ayesha Khan",
//       email: "ayesha@gmail.com",
//       role: "User",
//       status: "Active",
//     },

//     {
//       id: 3,
//       name: "Ali Raza",
//       email: "ali@gmail.com",
//       role: "User",
//       status: "Inactive",
//     },

//     {
//       id: 4,
//       name: "Fatima Noor",
//       email: "fatima@gmail.com",
//       role: "User",
//       status: "Active",
//     },

//     {
//       id: 5,
//       name: "Hassan Ahmed",
//       email: "hassan@gmail.com",
//       role: "Admin",
//       status: "Inactive",
//     },
//   ];

//   const filteredUsers = users.filter(
//     (user) => {
//       const matchSearch =
//         user.name
//           .toLowerCase()
//           .includes(search.toLowerCase()) ||
//         user.email
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchRole =
//         roleFilter === "All" ||
//         user.role === roleFilter;

//       const matchStatus =
//         statusFilter === "All" ||
//         user.status === statusFilter;

//       return (
//         matchSearch &&
//         matchRole &&
//         matchStatus
//       );
//     }
//   );

//   return (
//     <div>
//       {/* Page Header */}

//       <div style={styles.Header}
//         className="d-flex bg-white justify-content-between align-items-center mb-4"
//       >
//         <div>
//           <h3 className="fw-bold mb-1">
//             Users
//           </h3>

//           <p className="text-muted mb-0">
//             Manage all registered users
//           </p>
//         </div>

//         <button className="btn btn-primary px-4 py-2 rounded-3">
//           <FaPlus className="me-2" />
//           Add User
//         </button>
//       </div>

//       {/* Filters */}

//       <div
//         className="bg-white p-4 mb-4"
//         style={{
//           borderRadius: "18px",
//           boxShadow:
//             "0 4px 20px rgba(0,0,0,.05)",
//         }}
//       >
//         <div className="row g-3">
//           <div className="col-lg-6">
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaSearch />
//               </span>

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search user..."
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(e.target.value)
//                 }
//               />
//             </div>
//           </div>

//           <div className="col-lg-3">
//             <select
//               className="form-select"
//               value={roleFilter}
//               onChange={(e) =>
//                 setRoleFilter(
//                   e.target.value
//                 )
//               }
//             >
//               <option value="All">
//                 All Roles
//               </option>

//               <option value="Admin">
//                 Admin
//               </option>

//               <option value="User">
//                 User
//               </option>
//             </select>
//           </div>

//           <div className="col-lg-3">
//             <select
//               className="form-select"
//               value={statusFilter}
//               onChange={(e) =>
//                 setStatusFilter(
//                   e.target.value
//                 )
//               }
//             >
//               <option value="All">
//                 All Status
//               </option>

//               <option value="Active">
//                 Active
//               </option>

//               <option value="Inactive">
//                 Inactive
//               </option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}

//       <div
//         className="bg-white"
//         style={{
//           borderRadius: "18px",
//           overflow: "hidden",
//           boxShadow:
//             "0 4px 20px rgba(0,0,0,.05)",
//         }}
//       >
//         <table className="table table-hover align-middle mb-0">
//           <thead className="table-light">
//             <tr>
//               <th>User</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Status</th>
//               <th width="150">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.map(
//               (user) => (
//                 <tr key={user.id}>
//                   <td>
//                     <div className="d-flex align-items-center gap-3">
//                       <img
//                         src={`https://i.pravatar.cc/40?img=${user.id}`}
//                         alt=""
//                         width="40"
//                         height="40"
//                         className="rounded-circle"
//                       />

//                       <span>
//                         {user.name}
//                       </span>
//                     </div>
//                   </td>

//                   <td>
//                     {user.email}
//                   </td>

//                   <td>
//                     {user.role}
//                   </td>

//                   <td>
//                     <span
//                       className={`badge ${
//                         user.status ===
//                         "Active"
//                           ? "bg-success"
//                           : "bg-danger"
//                       }`}
//                     >
//                       {user.status}
//                     </span>
//                   </td>

//                   <td>
//                     <button className="btn btn-sm btn-outline-primary me-2">
//                       <FaEdit />
//                     </button>

//                     <button className="btn btn-sm btn-outline-danger">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}

//       <div className="d-flex justify-content-end mt-4">
//         <nav>
//           <ul className="pagination">
//             <li className="page-item">
//               <button className="page-link">
//                 Previous
//               </button>
//             </li>

//             <li className="page-item active">
//               <button className="page-link">
//                 1
//               </button>
//             </li>

//             <li className="page-item">
//               <button className="page-link">
//                 2
//               </button>
//             </li>

//             <li className="page-item">
//               <button className="page-link">
//                 3
//               </button>
//             </li>

//             <li className="page-item">
//               <button className="page-link">
//                 Next
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default AdminUsers;











import React, {
  useEffect,
  useState,
} from "react";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { toast } from "react-toastify";

import api from "../../services/api";

import UserFormModal from "../../components/users/UserFormModal";
import DeleteUserModal from "../../components/common/DeleteUserModal";

const styles = {
  Header: {
    height: "85px",
    background: "white",
    borderRadius: "20px",
    padding: "0 25px",
    boxShadow:
      "0 10px 25px rgba(0,0,0,.04)",
  },
};

const USERS_PER_PAGE = 10;

function AdminUsers() {
  const [users, setUsers] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [roleFilter, setRoleFilter] =
    useState("All");

  const [
    statusFilter,
    setStatusFilter,
  ] = useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [
    showFormModal,
    setShowFormModal,
  ] = useState(false);

  const [
    showDeleteModal,
    setShowDeleteModal,
  ] = useState(false);

  const [
    selectedUser,
    setSelectedUser,
  ] = useState(null);

  const token =
    localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // =========================
  // GET USERS
  // =========================

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/users",
        config
      );



      setUsers(res.data.users);

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Failed to fetch users"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, roleFilter, statusFilter]);

        
  // =========================
  // CREATE / UPDATE
  // =========================

  const handleSubmit = async (
    formData
  ) => {
    try {
      if (selectedUser) {

        await api.put(
          `/users/${selectedUser._id}`,
          formData,
          config
        );

        toast.success(
          "User updated successfully"
        );

      } else {

        await api.post(
          "/users",
          formData,
          config
        );

        toast.success(
          "User created successfully"
        );
      }

      setShowFormModal(false);
      setSelectedUser(null);

      fetchUsers();

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  // =========================
  // DELETE
  // =========================

  const handleDelete =
    async () => {
      try {

        await api.delete(
          `/users/${selectedUser._id}`,
          config
        );

        toast.success(
          "User deleted successfully"
        );

        setShowDeleteModal(false);

        setSelectedUser(null);

        fetchUsers();

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Delete failed"
        );
      }
    };

  // =========================
  // FILTERING
  // =========================

  const filteredUsers =
    users.filter((user) => {

      const fullName =
        user?.profile?.fullName || "";

      const designation =
        user?.designation || "";

      const email =
        user?.email || "";

      const searchMatch =
        fullName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        designation
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const roleMatch =
        roleFilter === "All"
          ? true
          : user.role ===
          roleFilter.toLowerCase();

      const statusMatch =
        statusFilter === "All"
          ? true
          : user.status ===
          statusFilter;

      return (
        searchMatch &&
        roleMatch &&
        statusMatch
      );
    });

  // =========================
  // PAGINATION
  // =========================

  const totalPages =
    Math.ceil(
      filteredUsers.length /
      USERS_PER_PAGE
    );

  const indexOfLastUser =
    currentPage *
    USERS_PER_PAGE;

  const indexOfFirstUser =
    indexOfLastUser -
    USERS_PER_PAGE;

  const currentUsers =
    filteredUsers.slice(
      indexOfFirstUser,
      indexOfLastUser
    );

  return (
    <div>
      {/* Header */}

      <div
        style={styles.Header}
        className="d-flex justify-content-between align-items-center mb-4"
      >
        <div>
          <h3 className="fw-bold mb-1">
            Users
          </h3>

          <p className="text-muted mb-0">
            Manage all registered users
          </p>
        </div>

        <button
          className="btn btn-primary px-4 py-2 rounded-3"
          onClick={() => {
            setSelectedUser(null);
            setShowFormModal(true);
          }}
        >
          <FaPlus className="me-2" />
          Add User
        </button>
      </div>

      {/* Filters */}

      <div
        className="bg-white p-4 mb-4"
        style={{
          borderRadius: "18px",
          boxShadow:
            "0 4px 20px rgba(0,0,0,.05)",
        }}
      >
        <div className="row g-3">

          <div className="col-lg-6">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search users..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />
            </div>
          </div>

          <div className="col-lg-3">
            <select
              className="form-select"
              value={roleFilter}
              onChange={(e) =>
                setRoleFilter(
                  e.target.value
                )
              }
            >
              <option value="All">
                All Roles
              </option>

              <option value="Admin">
                Admin
              </option>

              <option value="User">
                User
              </option>
            </select>
          </div>

          <div className="col-lg-3">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
            >
              <option value="All">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>
          </div>

        </div>
      </div>

      {/* Table */}

      <div
        className="bg-white"
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow:
            "0 4px 20px rgba(0,0,0,.05)",
        }}
      >
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Role</th>
              <th>Status</th>
              <th width="150">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>

            {loading ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  Loading...
                </td>
              </tr>
            ) : currentUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-4"
                >
                  No Users Found
                </td>
              </tr>
            ) : (
              currentUsers.map(
                (user, index) => (
                  <tr key={user._id}>

                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt=""
                          width="40"
                          height="40"
                          className="rounded-circle"
                        />

                        <span>
                          {user?.profile
                            ?.fullName ||
                            "N/A"}
                        </span>
                      </div>
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.designation}
                    </td>

                    <td>
                      <span className="badge bg-primary">
                        {user.role}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`badge ${user.status ===
                            "Active"
                            ? "bg-success"
                            : "bg-danger"
                          }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td>

                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => {
                          setSelectedUser(
                            user
                          );

                          setShowFormModal(
                            true
                          );
                        }}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => {
                          setSelectedUser(
                            user
                          );

                          setShowDeleteModal(
                            true
                          );
                        }}
                      >
                        <FaTrash />
                      </button>

                    </td>

                  </tr>
                )
              )
            )}

          </tbody>
        </table>
      </div>

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="d-flex justify-content-end mt-4">
          <nav>
            <ul className="pagination">

              <li
                className={`page-item ${currentPage === 1
                    ? "disabled"
                    : ""
                  }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage(
                      currentPage - 1
                    )
                  }
                >
                  Previous
                </button>
              </li>

              {[...Array(totalPages)].map(
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage ===
                        index + 1
                        ? "active"
                        : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() =>
                        setCurrentPage(
                          index + 1
                        )
                      }
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}

              <li
                className={`page-item ${currentPage ===
                    totalPages
                    ? "disabled"
                    : ""
                  }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage(
                      currentPage + 1
                    )
                  }
                >
                  Next
                </button>
              </li>

            </ul>
          </nav>
        </div>
      )}

      {/* Modals */}

      <UserFormModal
        show={showFormModal}
        handleClose={() => {
          setShowFormModal(false);
          setSelectedUser(null);
        }}
        handleSubmit={handleSubmit}
        selectedUser={selectedUser}
      />

      <DeleteUserModal
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false);
          setSelectedUser(null);
        }}
        handleDelete={handleDelete}
        selectedUser={selectedUser}
      />
    </div>
  );
}

export default AdminUsers;