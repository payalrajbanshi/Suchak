import { useEffect, useState } from "react";
import TaskFormModal from "../components/TaskFormModal";
import SmartSuggestions from "../components/SmartSuggestions";
import BalancedPlanComp from "../components/BalancedPlan";
import TaskChecklist from "../components/TaskCheckList";
import ProductivityChart from "../components/ProductivityChart";

import {
  getTasks,
  createTask,
  deleteTask,
  toggleTask,
  getSmart,
  getBalanced,
  updateStatus,
} from "../services/taskService";

import type { Task, SmartSuggestion, BalancedPlan } from "../types/taskTypes";

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
  <div className="min-h-screen bg-[#0f172a] text-white p-6">
    
    {/* HEADER */}
    <div className="flex items-center justify-between mb-6 mt-0">
      <h1 className="text-3xl font-bold">Task Dashboard</h1>
      <TaskFormModal onCreate={handleCreate} />
    </div>

    {/* 2x2 GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">

      {/* YOUR TASKS */}
      <div className="bg-[#1e293b] rounded-2xl p-5 shadow-lg flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">📝 Your Tasks</h2>
        <div className="flex-1 overflow-y-auto">
          <TaskChecklist tasks={tasks} onToggle={handleToggle} />
        </div>
      </div>

      {/* PRODUCTIVITY */}
      <div className="bg-[#1e293b] rounded-2xl p-5 shadow-lg flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">📊 Productivity</h2>
        <div className="flex-1">
          <ProductivityChart tasks={tasks} />
        </div>
      </div>

      {/* SMART SUGGESTIONS */}
      <div className="bg-[#1e293b] rounded-2xl p-5 shadow-lg flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">🧠 Smart Suggestions</h2>
        <div className="flex-1 overflow-y-auto">
          <SmartSuggestions data={smart} />
        </div>
      </div>

      {/* BALANCED PLAN */}
      <div className="bg-[#1e293b] rounded-2xl p-5 shadow-lg flex flex-col h-full">
        <h2 className="text-lg font-semibold mb-4">⚖️ Balanced Plan</h2>
        <div className="flex-1 overflow-y-auto">
          <BalancedPlanComp data={balanced} />
        </div>
      </div>

    </div>
  </div>
);
}