

import { useEffect, useMemo, useState } from "react";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { toast } from "react-toastify";

import api from "../../services/api";

import TaskFormModal from "../../components/tasks/TaskFormModal";

import DeleteModal from "../../components/common/DeleteUserModal";


const styles = {
  Header: {
    height: "85px",

    background: "#fff",

    borderRadius: "20px",

    padding: "0 25px",

    boxShadow:
      "0 10px 25px rgba(0,0,0,.04)",
  },
};

function AdminTasks() {

  const [tasks, setTasks] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [projectFilter, setProjectFilter] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("Newest");

  const [projects, setProjects] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(1);

  const recordsPerPage = 10;

  const [showModal, setShowModal] =
    useState(false);

  const [editTask, setEditTask] =
    useState(null);

  const [showDelete, setShowDelete] =
    useState(false);

  const [selectedTask, setSelectedTask] =
    useState(null);



  const fetchTasks = async () => {

    try {

      setLoading(true);

      const res =
        await api.get("/tasks");

      setTasks(res.data.tasks);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to fetch tasks"
      );

    } finally {

      setLoading(false);

    }

  };

  const fetchProjects =
    async () => {

      try {

        const res =
          await api.get("/projects");

        setProjects(
          res.data.projects
        );

      } catch (error) {

        console.log(error);

      }

    };



  useEffect(() => {

    fetchTasks();

    fetchProjects();

  }, []);


  const filteredTasks =
    useMemo(() => {

      let data = [...tasks];

      data = data.filter(
        (task) => {

          // const matchSearch =

          //   task.taskName
          //     .toLowerCase()
          //     .includes(
          //       search.toLowerCase()
          //     ) ||

          //   task.description
          //     ?.toLowerCase()
          //     .includes(
          //       search.toLowerCase()
          //     );


          const matchSearch =
            (task.taskName || "")
              .toLowerCase()
              .includes(search.toLowerCase()) ||

            (task.description || "")
              .toLowerCase()
              .includes(search.toLowerCase());



          const matchStatus =

            statusFilter ===
            "All" ||

            task.status ===
            statusFilter;

          const matchProject =

            projectFilter ===
            "All" ||

            task.projectId?._id ===
            projectFilter;

          return (

            matchSearch &&

            matchStatus &&

            matchProject

          );

        }
      );

      switch (sortBy) {

        case "Oldest":

          data.sort(
            (a, b) =>
              new Date(
                a.createdAt
              ) -
              new Date(
                b.createdAt
              )
          );

          break;

        case "A-Z":

          data.sort((a, b) =>
            a.taskName.localeCompare(
              b.taskName
            )
          );

          break;

        case "Z-A":

          data.sort((a, b) =>
            b.taskName.localeCompare(
              a.taskName
            )
          );

          break;

        default:

          data.sort(
            (a, b) =>
              new Date(
                b.createdAt
              ) -
              new Date(
                a.createdAt
              )
          );

      }

      return data;

    }, [

      tasks,

      search,

      statusFilter,

      projectFilter,

      sortBy,

    ]);


  const totalPages =
    Math.ceil(
      filteredTasks.length /
      recordsPerPage
    );

  const indexOfLast =
    currentPage *
    recordsPerPage;

  const indexOfFirst =
    indexOfLast -
    recordsPerPage;

  const currentTasks =
    filteredTasks.slice(
      indexOfFirst,
      indexOfLast
    );


  useEffect(() => {

    setCurrentPage(1);

  }, [

    search,

    statusFilter,

    projectFilter,

    sortBy,

  ]);



  const openAddModal = () => {

    setEditTask(null);

    setShowModal(true);

  };

  const openEditModal = (
    task
  ) => {

    setEditTask(task);

    setShowModal(true);

  };

  const openDeleteModal = (
    task
  ) => {

    setSelectedTask(task);

    setShowDelete(true);

  };

  const handleAddTask = async (
    formData
  ) => {
    try {

      await api.post(
        "/tasks",
        formData
      );

      toast.success(
        "Task created successfully"
      );

      fetchTasks();

      setShowModal(false);

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed to create task"
      );

    }
  };

  const handleUpdateTask =
    async (formData) => {

      try {

        await api.put(
          `/tasks/${editTask._id}`,
          formData
        );

        toast.success(
          "Task updated successfully"
        );

        fetchTasks();

        setShowModal(false);

        setEditTask(null);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to update task"
        );

      }

    };

  const handleSubmit = (
    formData
  ) => {

    if (editTask) {

      handleUpdateTask(
        formData
      );

    } else {

      handleAddTask(
        formData
      );

    }

  };

  const handleDeleteTask =
    async () => {

      try {

        await api.delete(
          `/tasks/${selectedTask._id}`
        );

        toast.success(
          "Task deleted successfully"
        );

        fetchTasks();

        setShowDelete(false);

        setSelectedTask(null);

      } catch (error) {

        toast.error(
          error.response?.data?.message ||
          "Failed to delete task"
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
            Tasks
          </h3>

          <p className="text-muted mb-0">
            Manage all tasks
          </p>
        </div>

        <button
          className="btn btn-primary px-4"
          onClick={openAddModal}
        >
          <FaPlus className="me-2" />
          Add Task
        </button>
      </div>

      {/* ================= Filters ================= */}

      <div
        className="bg-white p-4 mb-4"
        style={{
          borderRadius: "18px",
          boxShadow:
            "0 4px 20px rgba(0,0,0,.05)",
        }}
      >

        <div className="row g-3">

          {/* Search */}

          <div className="col-lg-5">

            <div className="input-group">

              <span className="input-group-text bg-white">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search task..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                style={{ height: "48px" }}
              />

            </div>

          </div>

          {/* Status */}

          <div className="col-lg-2">

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

          {/* Project */}

          <div className="col-lg-3">

            <select
              className="form-select"
              value={projectFilter}
              onChange={(e) =>
                setProjectFilter(e.target.value)
              }
              style={{ height: "48px" }}
            >

              <option value="All">
                All Projects
              </option>

              {

                projects.map((project) => (

                  <option
                    key={project._id}
                    value={project._id}
                  >

                    {project.projectName}

                  </option>

                ))

              }

            </select>

          </div>

          {/* Sort */}

          <div className="col-lg-2">

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
                A-Z
              </option>

              <option value="Z-A">
                Z-A
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
          boxShadow: "0 4px 20px rgba(0,0,0,.05)"
        }}
      >

        <table className="table table-hover align-middle mb-0">

          <thead className="table-light">

            <tr>

              <th>Task</th>

              <th>Project</th>

              <th>Assign To</th>

              <th>Status</th>

              <th>Priority</th>

              <th>Due Date</th>

              <th width="150">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {

              currentTasks.length === 0 ?

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-5"
                  >

                    No Tasks Found

                  </td>

                </tr>

                :

                currentTasks.map((task) => (

                  <tr key={task._id}>

                    <td className="fw-semibold">

                      {task.taskName}

                    </td>

                    <td>

                      {task.projectId?.projectName}

                    </td>

                    <td>

                      {task.assignedTo?.profile?.fullName ||

                        task.assignedTo?.email}

                    </td>

                    <td>

                      <span
                        className={`badge ${task.status === "Completed"

                            ?

                            "bg-success"

                            :

                            task.status === "In Progress"

                              ?

                              "bg-primary"

                              :

                              "bg-warning text-dark"

                          }`}
                      >

                        {task.status}

                      </span>

                    </td>

                    <td>

                      <span
                        className={`badge ${task.priority === "High"

                            ?

                            "bg-danger"

                            :

                            task.priority === "Medium"

                              ?

                              "bg-warning text-dark"

                              :

                              "bg-info"

                          }`}
                      >

                        {task.priority}

                      </span>

                    </td>

                    <td>

                      {

                        task.dueDate?.substring(
                          0,
                          10
                        )

                      }

                    </td>

                    <td>

                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() =>
                          openEditModal(task)
                        }
                      >

                        <FaEdit />

                      </button>

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() =>
                          openDeleteModal(task)
                        }
                      >

                        <FaTrash />

                      </button>

                    </td>

                  </tr>

                ))

            }

          </tbody>

        </table>

      </div>

      {/* ================= Pagination ================= */}

      {

        totalPages > 1 &&

        <div className="d-flex justify-content-end mt-4">

          <nav>

            <ul className="pagination">

              <li
                className={`page-item ${currentPage === 1
                    ?
                    "disabled"
                    :
                    ""
                  }`}
              >

                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage(currentPage - 1)
                  }
                >

                  Previous

                </button>

              </li>

              {

                [...Array(totalPages)].map((_, index) => (

                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1
                        ?
                        "active"
                        :
                        ""
                      }`}
                  >

                    <button
                      className="page-link"
                      onClick={() =>
                        setCurrentPage(index + 1)
                      }
                    >

                      {index + 1}

                    </button>

                  </li>

                ))

              }

              <li
                className={`page-item ${currentPage === totalPages
                    ?
                    "disabled"
                    :
                    ""
                  }`}
              >

                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage(currentPage + 1)
                  }
                >

                  Next

                </button>

              </li>

            </ul>

          </nav>

        </div>

      }

      {/* ================= Task Modal ================= */}

      <TaskFormModal

        show={showModal}

        handleClose={() => {

          setShowModal(false);

          setEditTask(null);

        }}

        handleSubmit={handleSubmit}

        editTask={editTask}

      />

      {/* ================= Delete Modal ================= */}

      <DeleteModal

        show={showDelete}

        handleClose={() =>
          setShowDelete(false)
        }

        handleDelete={handleDeleteTask}

        title="Delete Task"

        message="Are you sure you want to delete this task?"

      />

    </>

  );

}

export default AdminTasks;