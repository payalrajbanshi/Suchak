import { useEffect, useState } from "react";
import { getSmartTasks } from "../../../api/taskApi";
import { CheckCircle, Clock3, Smile, Timer,} from "lucide-react";
const TodayFocus = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getSmartTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-4 mb-6">

  <div className="
    bg-slate-900
    border
    border-slate-800
    rounded-3xl
    p-5
  ">
    <CheckCircle
      className="text-cyan-400 mb-3"
      size={28}
    />

    <p className="text-slate-400">
      Tasks Today
    </p>

    <h2 className="text-3xl font-bold">
      {tasks.length}
    </h2>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
    <Timer className="text-violet-400 mb-3" size={28}/>
    <p>Productivity</p>
    <h2 className="text-3xl font-bold">87%</h2>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
    <Smile className="text-yellow-400 mb-3" size={28}/>
    <p>Mood Today</p>
    <h2 className="text-3xl font-bold">
      Happy
    </h2>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
    <Clock3 className="text-green-400 mb-3" size={28}/>
    <p>Focus Time</p>
    <h2 className="text-3xl font-bold">
      4.5h
    </h2>
  </div>

</div>
  );
};

export default TodayFocus;