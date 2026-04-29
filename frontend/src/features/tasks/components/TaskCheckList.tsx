import type { Task } from "../types/taskTypes";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
}

export default function TaskChecklist({ tasks, onToggle }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-3 text-black">📝 Today Checklist</h2>

      <div className="space-y-2">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-2 border-b py-2"
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => onToggle(task.id)}
              className="w-4 h-4"
            />

            <span
              className={
                task.isCompleted
                  ? "line-through text-gray-400"
                  : "text-black"
              }
            >
              {task.title}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}