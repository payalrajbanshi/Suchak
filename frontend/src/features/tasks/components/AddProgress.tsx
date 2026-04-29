import { useState } from "react";
import { addProgress } from "../services/taskService";

export default function AddProgress({ taskId }: { taskId: number }) {
  const [hours, setHours] = useState(1);

  const handleAdd = async () => {
    await addProgress({
      taskId,
      hoursWorked: hours,
      date: new Date(),
    });

    alert("Progress added");
  };

  return (
    <div className="mt-2">
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="border p-1 w-16"
      />

      <button
        onClick={handleAdd}
        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}