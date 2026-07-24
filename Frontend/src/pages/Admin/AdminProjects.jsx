// import React, { useState } from "react";
// import {
//   FaPlus,
//   FaSearch,
//   FaEdit,
//   FaTrash,
// } from "react-icons/fa";


// function AdminProjects() {
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] =
//     useState("All");

//   const [currentPage, setCurrentPage] =
//     useState(1);

//   const itemsPerPage = 10;

//   const projects = [
//     {
//       id: 1,
//       name: "Task Manager",
//       lead: "Ahmed",
//       members: 8,
//       status: "Active",
//       tasks: 24,
//       deadline: "30 Aug 2025",
//     },
//     {
//       id: 2,
//       name: "CRM System",
//       lead: "Ali",
//       members: 5,
//       status: "Completed",
//       tasks: 18,
//       deadline: "15 Aug 2025",
//     },
//     {
//       id: 3,
//       name: "Mobile App",
//       lead: "Ayesha",
//       members: 7,
//       status: "Active",
//       tasks: 31,
//       deadline: "10 Sep 2025",
//     },
//     {
//       id: 4,
//       name: "E-Commerce",
//       lead: "Fatima",
//       members: 10,
//       status: "Pending",
//       tasks: 42,
//       deadline: "25 Sep 2025",
//     },
//     {
//       id: 5,
//       name: "School ERP",
//       lead: "Hassan",
//       members: 6,
//       status: "Active",
//       tasks: 16,
//       deadline: "05 Oct 2025",
//     },
//     {
//       id: 6,
//       name: "Inventory System",
//       lead: "Sara",
//       members: 9,
//       status: "Completed",
//       tasks: 28,
//       deadline: "18 Sep 2025",
//     },
//     {
//       id: 7,
//       name: "Hospital Management",
//       lead: "Bilal",
//       members: 12,
//       status: "Active",
//       tasks: 55,
//       deadline: "12 Oct 2025",
//     },
//     {
//       id: 8,
//       name: "HR Portal",
//       lead: "Usman",
//       members: 4,
//       status: "Pending",
//       tasks: 11,
//       deadline: "01 Nov 2025",
//     },
//     {
//       id: 9,
//       name: "POS System",
//       lead: "Areeba",
//       members: 5,
//       status: "Active",
//       tasks: 20,
//       deadline: "28 Aug 2025",
//     },
//     {
//       id: 10,
//       name: "Banking App",
//       lead: "Zain",
//       members: 14,
//       status: "Active",
//       tasks: 63,
//       deadline: "20 Dec 2025",
//     },
//     {
//       id: 11,
//       name: "Travel Portal",
//       lead: "Hamza",
//       members: 7,
//       status: "Pending",
//       tasks: 15,
//       deadline: "15 Nov 2025",
//     },
//   ];

//   const filteredProjects =
//     projects.filter((project) => {
//       const matchesSearch =
//         project.name
//           .toLowerCase()
//           .includes(search.toLowerCase());

//       const matchesStatus =
//         statusFilter === "All" ||
//         project.status === statusFilter;

//       return (
//         matchesSearch &&
//         matchesStatus
//       );
//     });

//   const totalPages = Math.ceil(
//     filteredProjects.length /
//       itemsPerPage
//   );

//   const currentProjects =
//     filteredProjects.slice(
//       (currentPage - 1) *
//         itemsPerPage,
//       currentPage * itemsPerPage
//     );

//   const getStatusClass = (
//     status
//   ) => {
//     switch (status) {
//       case "Active":
//         return "bg-success";

//       case "Completed":
//         return "bg-primary";

//       case "Pending":
//         return "bg-warning text-dark";

//       default:
//         return "bg-secondary";
//     }
//   };

//   return (
//     <div
//       className="d-flex flex-column h-100"
//     >
//       {/* Header */}

//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4 className="fw-bold mb-1">
//             Projects
//           </h4>

//           <p className="text-muted mb-0">
//             Manage all projects
//           </p>
//         </div>

//         <button className="btn btn-primary">
//           <FaPlus className="me-2" />
//           Add Project
//         </button>
//       </div>

//       {/* Filters */}

//       <div className="mb-4">
//         <div className="row g-3">

//           <div className="col-lg-8">
//             <div className="input-group">
//               <span className="input-group-text">
//                 <FaSearch />
//               </span>

//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search Project..."
//                 value={search}
//                 onChange={(e) =>
//                   setSearch(
//                     e.target.value
//                   )
//                 }
//               />
//             </div>
//           </div>

//           <div className="col-lg-4">
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

//               <option value="Completed">
//                 Completed
//               </option>

//               <option value="Pending">
//                 Pending
//               </option>
//             </select>
//           </div>

//         </div>
//       </div>

//       {/* Table */}

//       <div className="flex-grow-1">
//         <div
//           style={{
//             border:
//               "1px solid #e9ecef",
//             borderRadius: "14px",
//             overflow: "hidden",
//           }}
//         >
//           <table className="table table-hover align-middle mb-0">
//             <thead className="table-light">
//               <tr>
//                 <th className="text-start">
//                   Project Name
//                 </th>

//                 <th>
//                   Team Lead
//                 </th>

//                 <th>
//                   Members
//                 </th>

//                 <th>
//                   Status
//                 </th>

//                 <th>
//                   Tasks
//                 </th>

//                 <th>
//                   Deadline
//                 </th>

//                 <th>
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {currentProjects.map(
//                 (project) => (
//                   <tr
//                     key={project.id}
//                   >
//                     <td className="fw-semibold text-start">
//                       {project.name}
//                     </td>

//                     <td>
//                       {project.lead}
//                     </td>

//                     <td>
//                       {
//                         project.members
//                       }
//                     </td>

//                     <td>
//                       <span
//                         className={`badge ${getStatusClass(
//                           project.status
//                         )}`}
//                       >
//                         {
//                           project.status
//                         }
//                       </span>
//                     </td>

//                     <td>
//                       {project.tasks}
//                     </td>

//                     <td>
//                       {
//                         project.deadline
//                       }
//                     </td>

//                     <td>
//                       <button className="btn btn-sm btn-outline-primary me-2">
//                         <FaEdit />
//                       </button>

//                       <button className="btn btn-sm btn-outline-danger">
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 )
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}

//       {totalPages > 1 && (
//         <div className="mt-auto pt-4">
//           <div className="d-flex justify-content-end">
//             <nav>
//               <ul className="pagination pagination-sm mb-0">

//                 <li
//                   className={`page-item ${
//                     currentPage === 1
//                       ? "disabled"
//                       : ""
//                   }`}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() =>
//                       setCurrentPage(
//                         currentPage - 1
//                       )
//                     }
//                   >
//                     Previous
//                   </button>
//                 </li>

//                 {[...Array(totalPages)].map(
//                   (_, index) => (
//                     <li
//                       key={index}
//                       className={`page-item ${
//                         currentPage ===
//                         index + 1
//                           ? "active"
//                           : ""
//                       }`}
//                     >
//                       <button
//                         className="page-link"
//                         onClick={() =>
//                           setCurrentPage(
//                             index + 1
//                           )
//                         }
//                       >
//                         {index + 1}
//                       </button>
//                     </li>
//                   )
//                 )}

//                 <li
//                   className={`page-item ${
//                     currentPage ===
//                     totalPages
//                       ? "disabled"
//                       : ""
//                   }`}
//                 >
//                   <button
//                     className="page-link"
//                     onClick={() =>
//                       setCurrentPage(
//                         currentPage + 1
//                       )
//                     }
//                   >
//                     Next
//                   </button>
//                 </li>

//               </ul>
//             </nav>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminProjects;
























import { useEffect, useMemo, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { toast } from "react-toastify";

import api from "../../services/api";

import ProjectFormModal from "../../components/projects/ProjectFormModal";

import DeleteModal from "../../components/common/DeleteUserModal";



const styles = {
  Header: {
    height: "85px",
    background: "#fff",
    borderRadius: "20px",
    padding: "0 25px",
    boxShadow: "0 10px 25px rgba(0,0,0,.04)",
  },
};


function AdminProjects() {

  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const recordsPerPage = 10;

  const [showModal, setShowModal] =
    useState(false);

  const [editProject, setEditProject] =
    useState(null);

  const [showDelete, setShowDelete] =
    useState(false);

  const [selectedProject, setSelectedProject] =
    useState(null);

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Newest");

  const config = {
    headers: {
      Authorization:
        "Bearer " +
        localStorage.getItem("token"),
    },
  };

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/projects",
        config
      );

      setProjects(res.data.projects);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to fetch projects"
      );

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // const filteredProjects =
  //   useMemo(() => {

  //     return projects.filter(
  //       (project) =>
  //         project.projectName
  //           .toLowerCase()
  //           .includes(
  //             search.toLowerCase()
  //           ) ||

  //         project.description
  //           ?.toLowerCase()
  //           .includes(
  //             search.toLowerCase()
  //           )
  //     );

  //   }, [projects, search]);

  const filteredProjects = useMemo(() => {

    let data = [...projects];

    data = data.filter((project) => {

      const matchSearch =
        project.projectName
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        project.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ||
        project.status === statusFilter;

      return matchSearch && matchStatus;

    });

    switch (sortBy) {

      case "Oldest":
        data.sort(
          (a, b) =>
            new Date(a.createdAt) -
            new Date(b.createdAt)
        );
        break;

      case "A-Z":
        data.sort((a, b) =>
          a.projectName.localeCompare(
            b.projectName
          )
        );
        break;

      case "Z-A":
        data.sort((a, b) =>
          b.projectName.localeCompare(
            a.projectName
          )
        );
        break;

      default:
        data.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

    }

    return data;

  }, [
    projects,
    search,
    statusFilter,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredProjects.length /
    recordsPerPage
  );

  const indexOfLast =
    currentPage * recordsPerPage;

  const indexOfFirst =
    indexOfLast - recordsPerPage;

  const currentProjects =
    filteredProjects.slice(
      indexOfFirst,
      indexOfLast
    );

  useEffect(() => {

    setCurrentPage(1);

  }, [search]);


  const openAddModal = () => {

    setEditProject(null);

    setShowModal(true);

  };

  const openEditModal = (
    project
  ) => {

    setEditProject(project);

    setShowModal(true);

  };

  const openDeleteModal = (
    project
  ) => {

    setSelectedProject(project);

    setShowDelete(true);

  };

  const handleAddProject = async (
    formData
  ) => {
    try {

      await api.post(
        "/projects",
        formData,
        config
      );

      toast.success(
        "Project created successfully"
      );

      fetchProjects();

      setShowModal(false);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to create project"
      );

    }
  };

  const handleUpdateProject =
    async (formData) => {

      try {

        await api.put(
          `/projects/${editProject._id}`,
          formData,
          config
        );

        toast.success(
          "Project updated successfully"
        );

        fetchProjects();

        setShowModal(false);

        setEditProject(null);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to update project"
        );

      }

    };

  const handleSubmit = (
    formData
  ) => {

    if (editProject) {

      handleUpdateProject(
        formData
      );

    } else {

      handleAddProject(
        formData
      );

    }

  };

  const handleDeleteProject =
    async () => {

      try {

        await api.delete(
          `/projects/${selectedProject._id}`,
          config
        );

        toast.success(
          "Project deleted successfully"
        );

        fetchProjects();

        setShowDelete(false);

        setSelectedProject(null);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to delete project"
        );

      }

    };

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
        ></div>

      </div>

    );

  }

  return (

    <>{/* ================= Header ================= */}

      <div
        style={styles.Header}
        className="d-flex justify-content-between align-items-center mb-4"
      >
        <div>
          <h3 className="fw-bold mb-1">
            Projects
          </h3>

          <p className="text-muted mb-0">
            Manage all projects
          </p>
        </div>

        <button
          className="btn btn-primary px-4"
          onClick={openAddModal}
        >
          <FaPlus className="me-2" />
          Add Project
        </button>
      </div>

      {/* ================= Search ================= */}

      {/* <div
        className="bg-white p-4 mb-4 row"
        style={{
          borderRadius: "18px",
          boxShadow:
            "0 4px 20px rgba(0,0,0,.05)",
        }}
      >



        <div className="input-group ">

          <span className="input-group-text">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search project..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>
        <select
          className="form-select "
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >
          <option value="All">
            All Status
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <select
          className="form-select "
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="Newest">
            Newest
          </option>

          <option value="Oldest">
            Oldest
          </option>

          <option value="A-Z">
            A - Z
          </option>

          <option value="Z-A">
            Z - A
          </option>
        </select>




      </div> */}

      <div
        className="bg-white p-4 mb-4"
        style={{
          borderRadius: "18px",
          boxShadow: "0 4px 20px rgba(0,0,0,.05)",
        }}
      >
        <div className="row g-3 align-items-center">

          {/* Search */}
          <div className="col-lg-6 col-md-12">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search project..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                style={{ height: "48px" }}
              />
            </div>
          </div>

          {/* Status */}
          <div className="col-lg-3 col-md-6">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              style={{ height: "48px" }}
            >
              <option value="All">
                All Status
              </option>

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          {/* Sort */}
          <div className="col-lg-3 col-md-6">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              style={{ height: "48px" }}
            >
              <option value="Newest">
                Newest
              </option>

              <option value="Oldest">
                Oldest
              </option>

              <option value="A-Z">
                A - Z
              </option>

              <option value="Z-A">
                Z - A
              </option>
            </select>
          </div>

        </div>
      </div>
      {/* ================= Table ================= */}

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

              <th>Project Name</th>

              <th>Description</th>

              <th>Status</th>

              <th>Start Date</th>

              <th>End Date</th>

              <th width="150">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {
              currentProjects.length === 0 ?

                (

                  <tr>

                    <td
                      colSpan="6"
                      className="text-center py-5"
                    >

                      No Projects Found

                    </td>

                  </tr>

                )

                :

                currentProjects.map(
                  (project) => (

                    <tr
                      key={project._id}
                    >

                      <td className="fw-semibold">
                        {project.projectName}
                      </td>

                      <td>

                        {
                          project.description
                        }

                      </td>

                      <td>

                        <span
                          className={`badge ${project.status ===
                            "Completed"

                            ? "bg-success"

                            : project.status ===
                              "In Progress"

                              ? "bg-primary"

                              : "bg-warning text-dark"
                            }`}
                        >

                          {
                            project.status
                          }

                        </span>

                      </td>

                      <td>

                        {
                          project.startDate
                            ?.substring(
                              0,
                              10
                            )
                        }

                      </td>

                      <td>

                        {
                          project.endDate
                            ?.substring(
                              0,
                              10
                            )
                        }

                      </td>

                      <td>

                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() =>
                            openEditModal(
                              project
                            )
                          }
                        >

                          <FaEdit />

                        </button>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            openDeleteModal(
                              project
                            )
                          }
                        >

                          <FaTrash />

                        </button>

                      </td>

                    </tr>

                  )
                )

            }

          </tbody>

        </table>

      </div>

      {/* ================= Pagination ================= */}

      {
        totalPages > 1 && (

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

                {
                  [...Array(totalPages)].map(
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
                  )
                }

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

        )
      }

      {/* ================= Add / Edit Modal ================= */}

      <ProjectFormModal

        show={showModal}

        handleClose={() => {

          setShowModal(false);

          setEditProject(null);

        }}

        handleSubmit={
          handleSubmit
        }

        editProject={
          editProject
        }

      />

      {/* ================= Delete Modal ================= */}

      <DeleteModal

        show={showDelete}

        handleClose={() =>
          setShowDelete(false)
        }

        handleDelete={
          handleDeleteProject
        }

        title="Delete Project"

        message="Are you sure you want to delete this project?"

      />

    </>

  );

}

export default AdminProjects;