import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../Services/api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task._id, { completed: !task.completed });
    loadTasks();
  };

  return (
    <div className="container mt-4">
      {tasks.map((task) => (
        <div key={task._id} className="card p-3 mb-2">
          <h5 style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}
          </h5>

          <p>{task.description}</p>

          <small>Due: {task.dueDate?.slice(0, 10)}</small>

          <div className="mt-2">
            <button className="btn btn-success btn-sm me-2"
              onClick={() => toggleComplete(task)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button className="btn btn-danger btn-sm"
              onClick={() => handleDelete(task._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}