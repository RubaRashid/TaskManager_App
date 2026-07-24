import { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

function ProjectFormModal({
  show,
  handleClose,
  handleSubmit,
  editProject,
}) {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    status: "Pending",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (editProject) {
      setFormData({
        projectName: editProject.projectName || "",
        description: editProject.description || "",
        status: editProject.status || "Pending",

        startDate: editProject.startDate
          ? editProject.startDate.substring(0, 10)
          : "",

        endDate: editProject.endDate
          ? editProject.endDate.substring(0, 10)
          : "",
      });
    } else {
      setFormData({
        projectName: "",
        description: "",
        status: "Pending",
        startDate: "",
        endDate: "",
      });
    }
  }, [editProject, show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (!formData.projectName.trim()) {
      return toast.error("Project Name is required");
    }

    if (!formData.startDate) {
      return toast.error("Start Date is required");
    }

    if (!formData.endDate) {
      return toast.error("End Date is required");
    }

    if (
      new Date(formData.endDate) <
      new Date(formData.startDate)
    ) {
      return toast.error(
        "End Date cannot be before Start Date"
      );
    }

    handleSubmit(formData);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {editProject
            ? "Edit Project"
            : "Add New Project"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                Project Name
              </Form.Label>

              <Form.Control
                type="text"
                name="projectName"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={12}>
            <Form.Group className="mb-3">
              <Form.Label>
                Description
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                placeholder="Enter project description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>

              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Pending">
                  Pending
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                Start Date
              </Form.Label>

              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>
                End Date
              </Form.Label>

              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
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
          variant="primary"
          onClick={onSubmit}
        >
          {editProject
            ? "Update Project"
            : "Save Project"}
        </Button>

      </Modal.Footer>
    </Modal>
  );
}

export default ProjectFormModal;