import { useEffect, useState } from "react";
import { getSmartTasks } from "../../../api/taskApi";

const SmartInsights = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getSmartTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="bg-[#1e293b] p-4 rounded-xl">

      <h2 className="text-lg font-bold mb-3">⚡ Smart Insights</h2>

      {tasks.slice(0, 5).map((t) => (
        <div key={t.taskId} className="mb-3 border-b border-gray-700 pb-2">

          <p className="font-semibold">{t.title}</p>

          <p className="text-sm text-gray-300">
            {t.hoursToDoToday} hrs today
          </p>

          {t.warning && (
            <p className="text-red-400 text-sm">
              ⚠ {t.warning}
            </p>
          )}

        </div>
      ))}

    </div>
  );
};

export default SmartInsights;