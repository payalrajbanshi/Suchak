import { useState } from "react";
import { createTask } from "../services/taskService";

export default function TaskForm() {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    estimatedHours: 1,
    deadline: "",
    priority: 1,
    status: "Pending",
    order: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createTask(form);
      alert("Task created");
      setShowForm(false);
    } catch (err) {
      console.error(err);
      alert("Error creating task");
    }
  };

  return (
    
    <div className="w-full">
      {/* 🔹 Create Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        + Create Task
      </button>

      {/* 🔹 Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-white p-4 rounded-xl shadow flex flex-col gap-3"
        >
          <input
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Title"
            required
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Description"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            className="border p-2 rounded"
            type="number"
            placeholder="Estimated Hours"
            onChange={(e) =>
              setForm({
                ...form,
                estimatedHours: Number(e.target.value),
              })
            }
          />

          <input
            className="border p-2 rounded"
            type="date"
            onChange={(e) =>
              setForm({ ...form, deadline: e.target.value })
            }
          />

          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Submit Task
          </button>
        </form>
      )}
    </div>
  );
}