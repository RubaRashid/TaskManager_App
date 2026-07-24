import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

const TaskItem = ({ task, onDelete, onToggle }) => {
  const isOverdue =
    !task.completed &&
    task.dueDate &&
    new Date(task.dueDate) < new Date();

  return (
    <Card
      className="border-0 shadow-lg mb-4 rounded-4 overflow-hidden"
      style={{
        transition: "0.3s",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5
              className={`fw-bold ${
                task.completed ? "text-decoration-line-through text-muted" : ""
              }`}
            >
              {task.title}
            </h5>

            <p className="text-secondary mb-2">
              {task.description}
            </p>

            {task.dueDate && (
              <small className="text-muted">
                📅 Due Date:{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </small>
            )}
          </div>

          <div>
            {task.completed ? (
              <Badge bg="success">Completed</Badge>
            ) : isOverdue ? (
              <Badge bg="danger">Overdue</Badge>
            ) : (
              <Badge bg="warning" text="dark">
                Active
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-3 d-flex gap-2">
          <Button
            variant={task.completed ? "secondary" : "success"}
            onClick={() => onToggle(task)}
          >
            {task.completed ? "Undo" : "Complete"}
          </Button>

          <Button
            variant="outline-danger"
            onClick={() => onDelete(task._id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;