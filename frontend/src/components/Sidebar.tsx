import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  Lightbulb,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
    ${
      isActive
        ? "bg-indigo-500 text-white shadow-lg "
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    }`;
    

  return (
    <aside className="w-72 h-screen sticky top-0 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-puprle-500 bg-clip-text text-transparent">
          Suchak
        </h1>

        <p className="text-slate-500 text-sm mt-2">
          Smart Task Planner
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        {/* <p className="text-xs uppercase text-slate-500 px-4 mb-3">
          Main Menu
        </p> */}

        <NavLink to="/dashboard" className={navClass}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/tasks" className={navClass}>
          <CheckSquare size={20} />
          <span>Tasks</span>
        </NavLink>

        <NavLink to="/planner" className={navClass}>
          <CalendarDays size={20} />
          <span>Planner</span>
        </NavLink>
        <NavLink to="/checklists" className={navClass}>
        <CheckSquare size={20}/>
        <span>Checklists</span>

        </NavLink>
        {/* <NavLink to="/suggestions" className={navClass}>
          <Lightbulb size={20} />
          <span>Smart Suggestions</span>
        </NavLink> */}

        <NavLink to="/reports" className={navClass}>
          <BarChart3 size={20} />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

     
      <div className="p-4 border-t border-slate-200">
        <div className="bg-indigo-500 rounded-2xl p-4 text-white">
          <p className="text-sm text-indigo-100">
            Productivity Score
          </p>

          <h3 className="text-2xl font-bold text-white mt-2">
            87%
          </h3>

          <div className="w-full h-2 bg-indigo-300 rounded-full mt-3">
            <div className="h-2 w-[87%] bg-white rounded-full"></div>
          </div>

          <p className="text-xs text-indigo-100 mt-3">
            Keep completing tasks to improve your score.
          </p>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;