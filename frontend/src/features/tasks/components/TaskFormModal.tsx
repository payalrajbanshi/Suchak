import { useState } from "react";
import type { CreateTaskDTO } from "../types/taskTypes";

interface Props {
  onCreate: (data: CreateTaskDTO) => Promise<void> | void;
}

export default function TaskFormModal({ onCreate }: Props) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<CreateTaskDTO>({
    title: "",
    description: "",
    deadline: "",
    estimatedHours: 1,
    priority: 1,
  });

  const handleSubmit = async () => {
    if (!form.title.trim()) return alert("Title is required");

    await onCreate(form);

    setForm({
      title: "",
      description: "",
      deadline: "",
      estimatedHours: 1,
      priority: 1,
    });

    setOpen(false);
  };

  return (
    <div>
      {/* 🔘 CREATE BUTTON FIELD */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        ➕ Create Task
      </button>

      {/* 🧊 MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-5 rounded-xl shadow-xl">
            
            <h2 className="text-xl font-bold text-black mb-4">
              Create New Task
            </h2>

            {/* Title */}
            <input
              className="w-full border p-2 rounded mb-2"
              placeholder="Title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />

            {/* Description */}
            <textarea
              className="w-full border p-2 rounded mb-2"
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            {/* Deadline */}
            <input
              type="date"
              className="w-full border p-2 rounded mb-2"
              value={form.deadline}
              onChange={(e) =>
                setForm({ ...form, deadline: e.target.value })
              }
            />

            {/* Hours */}
            <input
              type="number"
              className="w-full border p-2 rounded mb-2"
              value={form.estimatedHours}
              onChange={(e) =>
                setForm({
                  ...form,
                  estimatedHours: Number(e.target.value),
                })
              }
            />

            {/* Priority */}
            <select
              className="w-full border p-2 rounded mb-4"
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: Number(e.target.value) })
              }
            >
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
            </select>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
              >
                Create
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}