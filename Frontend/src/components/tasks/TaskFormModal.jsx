import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import api from "../../services/api";
import { toast } from "react-toastify";

function TaskFormModal({
  show,
  handleClose,
  handleSubmit,
  editTask,
}) {

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    projectId: "",
    assignedTo: "",
    status: "Pending",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    if (show) {
      fetchProjects();
      fetchUsers();
    }
  }, [show]);

  useEffect(() => {

    if (editTask) {

      setFormData({
        taskName: editTask.taskName || "",
        description: editTask.description || "",
        projectId: editTask.projectId?._id || "",
        assignedTo: editTask.assignedTo?._id || "",
        status: editTask.status || "Pending",
        priority: editTask.priority || "Medium",
        dueDate: editTask.dueDate
          ? editTask.dueDate.substring(0, 10)
          : "",
      });

    } else {

      setFormData({
        taskName: "",
        description: "",
        projectId: "",
        assignedTo: "",
        status: "Pending",
        priority: "Medium",
        dueDate: "",
      });

    }

  }, [editTask]);

  const fetchProjects = async () => {

    try {

      const res = await api.get("/projects");

      setProjects(res.data.projects);

    } catch {

      toast.error("Failed to load projects");

    }

  };

  const fetchUsers = async () => {

    try {

      const res = await api.get("/users");

      setUsers(res.data.users);

    } catch {

      toast.error("Failed to load users");

    }

  };

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const submitForm = (e) => {

    e.preventDefault();

    handleSubmit(formData);

  };

  return (

    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >

      <Form onSubmit={submitForm}>

        <Modal.Header closeButton>

          <Modal.Title>

            {editTask
              ? "Update Task"
              : "Add Task"}

          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Row>

            <Col md={6}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Task Name
                </Form.Label>

                <Form.Control
                  name="taskName"
                  value={formData.taskName}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

            </Col>

            <Col md={6}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Project
                </Form.Label>

                <Form.Select
                  name="projectId"
                  value={formData.projectId}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select Project
                  </option>

                  {projects.map((project) => (

                    <option
                      key={project._id}
                      value={project._id}
                    >

                      {project.projectName}

                    </option>

                  ))}

                </Form.Select>

              </Form.Group>

            </Col>

          </Row>

          <Form.Group className="mb-3">

            <Form.Label>
              Description
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

          </Form.Group>

          <Row>

            <Col md={6}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Assign User
                </Form.Label>

                <Form.Select
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select User
                  </option>

                  {users.map((user) => (

                    <option
                      key={user._id}
                      value={user._id}
                    >

                      {user.profile?.fullName ||
                        user.email}

                    </option>

                  ))}

                </Form.Select>

              </Form.Group>

            </Col>

            <Col md={3}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Status
                </Form.Label>

                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >

                  <option>
                    Pending
                  </option>

                  <option>
                    In Progress
                  </option>

                  <option>
                    Completed
                  </option>

                </Form.Select>

              </Form.Group>

            </Col>

            <Col md={3}>

              <Form.Group className="mb-3">

                <Form.Label>
                  Priority
                </Form.Label>

                <Form.Select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >

                  <option>
                    Low
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    High
                  </option>

                </Form.Select>

              </Form.Group>

            </Col>

          </Row>

          <Row>

            <Col md={6}>

              <Form.Group>

                <Form.Label>
                  Due Date
                </Form.Label>

                <Form.Control
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                />

              </Form.Group>

            </Col>

          </Row>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={handleClose}
          >

            Cancel

          </Button>

          <Button
            type="submit"
            variant="primary"
          >

            {editTask
              ? "Update Task"
              : "Save Task"}

          </Button>

        </Modal.Footer>

      </Form>

    </Modal>

  );

}

export default TaskFormModal;