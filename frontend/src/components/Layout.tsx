import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;