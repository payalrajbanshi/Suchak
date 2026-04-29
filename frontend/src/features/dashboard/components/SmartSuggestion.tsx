import { useEffect, useState } from "react";
import { getSmartTasks } from "../../../api/taskApi";

const SmartSuggestion = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getSmartTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Smart Plan for Today</h2>

      {tasks.map((t) => (
        <div key={t.taskId}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          
          <h4>{t.title}</h4>

          <p> Do today: {t.hoursToDoToday} hrs</p>

          <p> Deadline: {t.deadline.split("T")[0]}</p>
          {t.warning && (
            <p style={{color:"red", fontWeight:"bold"}}>
              {t.warning}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SmartSuggestion;