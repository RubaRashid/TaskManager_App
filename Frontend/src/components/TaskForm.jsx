import { useState } from "react";
import { createTask } from "../Services/api";

export default function TaskForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(form);
    refresh();
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Task Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea className="form-control mb-2"
          placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input type="date" className="form-control mb-2"
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />

        <button className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
}