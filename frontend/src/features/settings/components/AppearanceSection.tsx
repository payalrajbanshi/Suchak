import { Moon } from "lucide-react";

export default function AppearanceSection() {

  return (

    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <Moon size={24} />

        <h2 className="text-2xl font-semibold">
          Appearance
        </h2>

      </div>

      <label className="flex items-center gap-3">

        <input type="checkbox" />

        Enable Dark Mode

      </label>

    </div>

  );
}