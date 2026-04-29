import type { Task } from "../types/taskTypes";
import TaskProgressChart from "./TaskProgressChart";
import AddProgress from "./AddProgress";
interface Props {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function TaskCard({ task, onDelete, onToggle }: Props) {
  return (
    <div className="border p-4 rounded shadow mb-3 bg-white w-full ">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>

      <p>📅 {new Date(task.deadline).toLocaleDateString()}</p>
      <p>⏱ {task.estimatedHours} hrs</p>

      <div className="mt-3 flex flex-col gap-3">
        <AddProgress taskId={task.id}/>
      </div>
      <div className="w-full h-40">
        <TaskProgressChart taskId={task.id}/>

      </div>
      <div className="flex gap-2 mt-2">
        <button onClick={() => onToggle(task.id)}>✔</button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </div>
    </div>
  );
}