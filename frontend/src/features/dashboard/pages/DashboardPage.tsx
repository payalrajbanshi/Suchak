import { useEffect, useState } from "react";
import { getSummary, getWeeklyReport } from "../../../api/dashboardApi";
import { getBalancedPlan } from "../../../api/taskApi";

import DashboardHeader from "../components/DashboardHeader";
import TopStats from "../components/TopStats";
import WeeklyChart from "../components/WeeklyChart";
import CalendarWidget from "../components/CalendarWidget";
import UpcomingDeadlines from "../components/UpcomingDeadlines";
import SuchakCoach from "../components/SuchakCoach";
import ScheduleWidget from "../components/ScheduleWidget";

const DashboardPage = () => {
  const [summary, setSummary] = useState<any>(null);
  const [plan, setPlan] = useState<any[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const summaryRes = await getSummary();
        setSummary(summaryRes.data);

        const planRes = await getBalancedPlan();
        setPlan(planRes.data);

        const weeklyRes = await getWeeklyReport();
        setWeeklyData(weeklyRes.data);
      } catch (err) {
        console.error("Dashboard Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (!summary) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <DashboardHeader />

      {/* TOP STATS */}
      <TopStats summary={summary} />

      {/* WEEKLY PROGRESS + CALENDAR */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Weekly Progress */}
        <div className="lg:col-span-2">

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              backdrop-blur-xl
              p-6
              h-full
            "
          >
            <div className="mb-5">
              <h2 className="text-xl font-bold">
                Weekly Progress
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Your productivity over the last 7 days
              </p>
            </div>

            <WeeklyChart
              data={weeklyData}
              loading={loading}
            />
          </div>

        </div>

        {/* Calendar */}
        <CalendarWidget />

      </div>

      {/* ACTION CENTER */}
      <div className="grid lg:grid-cols-12 gap-6">

        {/* TODAY'S FOCUS */}
        <div className="lg:col-span-5">

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              backdrop-blur-xl
              p-6
              h-full
            "
          >
            <div className="mb-5">
              <h2 className="text-xl font-bold">
                Today's Focus
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                AI balanced recommendations
              </p>
            </div>

            <div className="space-y-3">

              {plan.slice(0, 4).map((task) => (
                <div
                  key={task.taskId}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-4
                  "
                >
                  <p className="font-medium">
                    {task.title}
                  </p>

                  <p className="text-cyan-400 text-sm mt-2">
                    {task.hoursToday} hrs today
                  </p>

                  <p className="text-slate-400 text-xs mt-1">
                    {task.remainingHours} hrs remaining
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* UPCOMING DEADLINES */}
        <div className="lg:col-span-4">
          <UpcomingDeadlines plan={plan} />
        </div>

        {/* AI COACH */}
        <div className="lg:col-span-3">
          <SuchakCoach />
        </div>

      </div>

      {/* SCHEDULE */}
      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900/70
          backdrop-blur-xl
          p-6
        "
      >
        <ScheduleWidget />
      </div>

    </div>
  );
};

export default DashboardPage;