import { useEffect, useState } from "react";
import { getTasks } from "../../../api/taskApi";

const StatsCards = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const completed = tasks.filter(t => t.isCompleted);
  const pending = tasks.filter(t => !t.isCompleted);

  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <p>Total Tasks</p>
        <h2 className="text-2xl font-bold">{tasks.length}</h2>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <p>Completed</p>
        <h2 className="text-2xl font-bold">{completed.length}</h2>
      </div>

      <div className="bg-[#1e293b] p-4 rounded-xl">
        <p>Pending</p>
        <h2 className="text-2xl font-bold">{pending.length}</h2>
      </div>

    </div>
  );
};

export default StatsCards;