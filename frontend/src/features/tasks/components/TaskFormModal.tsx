import { useState } from "react";
import type { CreateTaskDTO } from "../types/taskTypes";
import { FiPlus } from "react-icons/fi";

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

  const inputStyle =
    "w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      alert("Title is required");
      return;
    }

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
    <>
      {/* Create Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          flex items-center gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-5 py-3
          rounded-xl
          font-medium
          shadow-sm
          transition
        "
      >
        <FiPlus size={18} />
        Create Task
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl border border-slate-200 shadow-2xl p-6">

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Create Task
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Add a new task to your workspace
              </p>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Title
              </label>

              <input
                className={inputStyle}
                placeholder="Enter task title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>

              <textarea
                rows={4}
                className={inputStyle}
                placeholder="Describe the task..."
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            {/* Deadline */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Deadline
              </label>

              <input
                type="date"
                className={inputStyle}
                value={form.deadline}
                onChange={(e) =>
                  setForm({ ...form, deadline: e.target.value })
                }
              />
            </div>

            {/* Estimated Hours */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Estimated Hours
              </label>

              <input
                type="number"
                min={1}
                className={inputStyle}
                value={form.estimatedHours}
                onChange={(e) =>
                  setForm({
                    ...form,
                    estimatedHours: Number(e.target.value),
                  })
                }
              />
            </div>

            {/* Priority */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Priority
              </label>

              <select
                className={inputStyle}
                value={form.priority}
                onChange={(e) =>
                  setForm({
                    ...form,
                    priority: Number(e.target.value),
                  })
                }
              >
                <option value={1}>Low Priority</option>
                <option value={2}>Medium Priority</option>
                <option value={3}>High Priority</option>
              </select>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setOpen(false)}
                className="
                  px-4 py-2
                  rounded-xl
                  border
                  border-slate-300
                  text-slate-700
                  hover:bg-slate-100
                  transition
                "
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="
                  px-5 py-2
                  rounded-xl
                  bg-blue-600
                  text-white
                  font-medium
                  hover:bg-blue-700
                  transition
                "
              >
                Create Task
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}