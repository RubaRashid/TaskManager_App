import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  role: "user",
  status: "Active",
  designation: "",
  phoneNumber: "",
  cnicNumber: "",
  dateOfBirth: "",
};

function UserFormModal({
  show,
  handleClose,
  handleSubmit,
  selectedUser,
}) {
  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        fullName:
          selectedUser?.profile
            ?.fullName || "",

        email:
          selectedUser?.email || "",

        password: "",

        role:
          selectedUser?.role || "user",

        status:
          selectedUser?.status ||
          "Active",

        designation:
          selectedUser?.designation ||
          "",

        phoneNumber:
          selectedUser?.profile
            ?.phoneNumber || "",

        cnicNumber:
          selectedUser?.profile
            ?.cnicNumber || "",

        dateOfBirth:
          selectedUser?.profile
            ?.dateOfBirth
            ? selectedUser.profile.dateOfBirth.substring(
                0,
                10
              )
            : "",
      });
    } else {
      setFormData(initialState);
    }
  }, [selectedUser, show]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
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
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedUser
            ? "Edit User"
            : "Add New User"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={submitForm}>
        <Modal.Body>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Full Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="fullName"
                  value={
                    formData.fullName
                  }
                  onChange={onChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Email
                </Form.Label>

                <Form.Control
                  type="email"
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={onChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {!selectedUser && (
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Password
                  </Form.Label>

                  <Form.Control
                    type="password"
                    name="password"
                    value={
                      formData.password
                    }
                    onChange={onChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Designation
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="designation"
                    value={
                      formData.designation
                    }
                    onChange={onChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          )}

          {selectedUser && (
            <Form.Group className="mb-3">
              <Form.Label>
                Designation
              </Form.Label>

              <Form.Control
                type="text"
                name="designation"
                value={
                  formData.designation
                }
                onChange={onChange}
                required
              />
            </Form.Group>
          )}

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Role
                </Form.Label>

                <Form.Select
                  name="role"
                  value={
                    formData.role
                  }
                  onChange={onChange}
                >
                  <option value="admin">
                    Admin
                  </option>

                  <option value="user">
                    User
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Status
                </Form.Label>

                <Form.Select
                  name="status"
                  value={
                    formData.status
                  }
                  onChange={onChange}
                >
                  <option value="Active">
                    Active
                  </option>

                  <option value="Inactive">
                    Inactive
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Phone Number
                </Form.Label>

                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={
                    formData.phoneNumber
                  }
                  onChange={onChange}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  CNIC Number
                </Form.Label>

                <Form.Control
                  type="text"
                  name="cnicNumber"
                  value={
                    formData.cnicNumber
                  }
                  onChange={onChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>
              Date Of Birth
            </Form.Label>

            <Form.Control
              type="date"
              name="dateOfBirth"
              value={
                formData.dateOfBirth
              }
              onChange={onChange}
            />
          </Form.Group>

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
            type="submit"
          >
            {selectedUser
              ? "Update User"
              : "Save User"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default UserFormModal;