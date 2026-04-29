import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-[#020617] p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Suchak</h2>

      <ul className="space-y-4">
        <li onClick={() => navigate("/dashboard")} className="hover:text-teal-400 cursor-pointer">
          Dashboard
        </li>
        <li onClick={() => navigate("/tasks")} className="hover:text-teal-400 cursor-pointer">
          Tasks
        </li>
        <li onClick={() => navigate("/profile")} className="hover:text-teal-400 cursor-pointer">
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;