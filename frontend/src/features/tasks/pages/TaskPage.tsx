import { useEffect, useState } from "react";
import TaskFormModal from "../components/TaskFormModal";
import SmartSuggestions from "../components/SmartSuggestions";
import BalancedPlanComp from "../components/BalancedPlan";
import TaskChecklist from "../components/TaskCheckList";
import ProductivityChart from "../components/ProductivityChart";

import {
  getTasks,
  createTask,
  toggleTask,
  getSmart,
  getBalanced,
} from "../services/taskService";

import type {
  Task,
  SmartSuggestion,
  BalancedPlan,
} from "../types/taskTypes";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [smart, setSmart] = useState<SmartSuggestion[]>([]);
  const [balanced, setBalanced] = useState<BalancedPlan[]>([]);

  const loadData = async () => {
    const [t, s, b] = await Promise.all([
      getTasks(),
      getSmart(),
      getBalanced(),
    ]);

    setTasks(t.data);
    setSmart(s.data);
    setBalanced(b.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggle = async (id: number) => {
    await toggleTask(id);
    loadData();
  };

  const handleCreate = async (data: any) => {
    await createTask(data);
    loadData();
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Task Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Manage tasks, track progress, and stay productive.
          </p>
        </div>

        <TaskFormModal onCreate={handleCreate} />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Total Tasks</p>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {tasks.length}
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Completed</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {tasks.filter((t) => t.isCompleted).length}
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Pending</p>
          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            {tasks.filter((t) => !t.isCompleted).length}
          </h2>
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* TASK LIST */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Your Tasks
          </h2>

          <TaskChecklist
            tasks={tasks}
            onToggle={handleToggle}
          />
        </div>

        {/* PRODUCTIVITY */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Productivity
          </h2>

          <ProductivityChart tasks={tasks} />
        </div>

        {/* SMART SUGGESTIONS */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Smart Suggestions
          </h2>

          <SmartSuggestions data={smart} />
        </div>

        {/* BALANCED PLAN */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Balanced Plan
          </h2>

          <BalancedPlanComp data={balanced} />
        </div>

      </div>
    </div>
  );
}