import { useEffect, useState } from "react";
import { getSummary } from "../../../api/dashboardApi";
import { getWeeklyReport } from "../../../api/dashboardApi";
import { getBalancedPlan } from "../../../api/taskApi";
import WeeklyChart from "../components/WeeklyChart";


const DashboardPage = () => {
  const [summary, setSummary] = useState<any>(null);
  const [plan, setPlan] = useState<any[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getSummary().then((res) => setSummary(res.data));
  //   getBalancedPlan().then((res) => setPlan(res.data));
  // }, []);
useEffect(() => {
  const loadData = async () => {
    try {
      const summaryRes = await getSummary();
      setSummary(summaryRes.data);

      const planRes = await getBalancedPlan();
      setPlan(planRes.data);
      const weeklyRes=await getWeeklyReport();
      setWeeklyData(weeklyRes.data);
    } catch (err) {
      console.error("DASHBOARD ERROR:", err);
    }finally {
      setLoading(false);
    }
  };

  loadData();
}, []);
  if (!summary) return <p>Loading...</p>;

 return (
  <div className="min-h-screen bg-[#0f172a] text-white p-6">


    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-gray-400 text-sm">
          Monitor your productivity and task insights
        </p>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search..."
          className="bg-[#1e293b] px-4 py-2 rounded-lg outline-none text-sm"
        />
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm">
          + Add Task
        </button>
      </div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

      <div className="bg-[#1e293b] p-5 rounded-2xl shadow-lg">
        <p className="text-gray-400 text-sm">Total Tasks</p>
        <h2 className="text-2xl font-bold mt-2">
          {summary.totalTasks}
        </h2>
      </div>

      <div className="bg-[#1e293b] p-5 rounded-2xl shadow-lg">
        <p className="text-gray-400 text-sm">Completed</p>
        <h2 className="text-2xl font-bold mt-2 text-green-400">
          {summary.completedTasks}
        </h2>
      </div>

      <div className="bg-[#1e293b] p-5 rounded-2xl shadow-lg">
        <p className="text-gray-400 text-sm">Pending</p>
        <h2 className="text-2xl font-bold mt-2 text-yellow-400">
          {summary.pendingTasks}
        </h2>
      </div>

      <div className="bg-[#1e293b] p-5 rounded-2xl shadow-lg">
        <p className="text-gray-400 text-sm">Efficiency</p>
        <h2 className="text-2xl font-bold mt-2 text-blue-400">
          {Math.round(
            (summary.completedTasks / summary.totalTasks) * 100
          ) || 0}%
        </h2>
      </div>

    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* CHART SECTION */}
      <div className="lg:col-span-2 bg-[#1e293b] p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="font-semibold text-lg">📊 Weekly Progress</h2> */}
          {/* <span className="text-xs text-gray-400">Last 7 days</span> */}
        </div>

        <WeeklyChart data={weeklyData} loading={loading} />
      </div>

    
      <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg flex flex-col">
        <h2 className="font-semibold text-lg mb-4 text-white">
          🔥 Smart Plan
        </h2>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {plan.map((t) => (
            <div
              key={t.taskId}
              className="bg-[#0f172a] p-3 rounded-lg hover:bg-[#1e293b] transition"
            >
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-gray-400">
                {t.hoursToday} hrs today
              </p>
              <p className="text-xs text-gray-500">
                Deadline: {t.deadline.split("T")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);
};

export default DashboardPage;