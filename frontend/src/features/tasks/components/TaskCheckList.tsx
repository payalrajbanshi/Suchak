import type { Task } from "../types/taskTypes";

interface Props {
  tasks: Task[];
  onToggle: (id: number) => void;
}

export default function TaskChecklist({ tasks, onToggle }: any) {
  return (
    <div className="space-y-3">
      {tasks.map((task: any) => (
        <label
          key={task.id}
          className="
            flex items-center gap-3
            p-3
            rounded-xl
            border border-slate-200
            hover:bg-slate-50
            transition
          "
        >
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => onToggle(task.id)}
            className="w-4 h-4 accent-blue-600"
          />

          <span
            className={
              task.isCompleted
                ? "line-through text-slate-400"
                : "text-slate-800 font-medium"
            }
          >
            {task.title}
          </span>
        </label>
      ))}
    </div>
  );
}