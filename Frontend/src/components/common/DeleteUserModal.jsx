import React from "react";
import { Modal, Button } from "react-bootstrap";

function DeleteUserModal({
  show,
  handleClose,
  handleDelete,
  selectedUser,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Delete User
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="mb-0">
          Are you sure you want to
          delete{" "}
          <strong>
            {selectedUser?.profile
              ?.fullName ||
              selectedUser?.email}
          </strong>
          ?
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteUserModal;