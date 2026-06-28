import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "../components/Layout";
import TasksPage from "../features/tasks/pages/TaskPage";
import ProfilePage from "../features/profile/pages/ProfilePage";
import PlannerHub from "../features/planner/pages/PlannerHub";
import DailyPlanner from "../features/planner/pages/DailyPlanner";
import MoodPlanner from "../features/planner/pages/MoodPlanner";
import HabitPlanner from "../features/planner/pages/HabitPlanner";
import SelfCarePlanner from "../features/planner/pages/SelfCarePlanner";
import GratitudePlanner from "../features/planner/pages/GratitudePlanner";
import LifeResetPlanner from "../features/planner/pages/LifeResetPlanner";
import PlannerSettings from "../features/planner/pages/PlannerSettings";
import ChecklistPage from "../features/checklist/pages/ChecklistPage";
import ChecklistDetails from "../features/checklist/pages/ChecklistDetails";
import ReportsPage from "../features/reports/pages/ReportsPage";
import SettingsPage from "../features/settings/pages/SettingsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Layout wraps protected pages */}
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <TasksPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        <Route path="/planner" element={<PlannerHub />} />
        <Route path="/planner/daily" element={<DailyPlanner />} />
<Route path="/planner/mood" element={<MoodPlanner />} />
<Route path="/planner/habit" element={<HabitPlanner />} />
<Route path="/planner/selfcare" element={<SelfCarePlanner />} />
<Route path="/planner/gratitude" element={<GratitudePlanner />} />
<Route path="/planner/lifereset" element={<LifeResetPlanner />} />
<Route path="/planner/settings" element={<PlannerSettings />} />

<Route
  path="/checklists"
  element={
    <ProtectedRoute>
      <ChecklistPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/checklists/:id"
  element={
    <ProtectedRoute>
      <ChecklistDetails />
    </ProtectedRoute>
  }
/>
<Route path="/reports" element={ <ProtectedRoute> <ReportsPage/> </ProtectedRoute>}/>
<Route path="/settings" element={<ProtectedRoute><SettingsPage/></ProtectedRoute>}/>
      </Route>

      
    </Routes>
    
  );
};

export default AppRoutes;