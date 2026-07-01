import { useState } from "react";
import {
  Globe,
  Home,
  Calendar,
  Clock3,
  Target,
  CalendarDays,
} from "lucide-react";

export default function PreferenceTab() {
  const [language, setLanguage] = useState("English");
  const [homePage, setHomePage] = useState("Dashboard");
  const [planner, setPlanner] = useState("Daily Planner");
  const [timeFormat, setTimeFormat] = useState("12 Hour");
  const [weekStart, setWeekStart] = useState("Monday");
  const [goal, setGoal] = useState("8 Tasks");

  const Row = ({
    icon,
    title,
    value,
    onChange,
    options,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
  }) => (
    <div className="flex justify-between items-center border rounded-2xl p-5 hover:shadow-sm transition">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          {icon}
        </div>

        <h3 className="font-semibold text-lg">
          {title}
        </h3>

      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          border
          rounded-xl
          px-4
          py-2
          focus:ring-2
          focus:ring-blue-500
          outline-none
        "
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>

    </div>
  );

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Preferences
        </h2>

        <p className="text-gray-500 mt-2">
          Personalize your Suchak experience.
        </p>

      </div>

      <Row
        icon={<Globe size={22} />}
        title="Language"
        value={language}
        onChange={setLanguage}
        options={[
          "English",
          "Nepali",
          "Hindi",
        ]}
      />

      <Row
        icon={<Home size={22} />}
        title="Default Home Page"
        value={homePage}
        onChange={setHomePage}
        options={[
          "Dashboard",
          "Tasks",
          "Planner",
          "Reports",
        ]}
      />

      <Row
        icon={<Calendar size={22} />}
        title="Default Planner"
        value={planner}
        onChange={setPlanner}
        options={[
          "Daily Planner",
          "Habit Planner",
          "Mood Planner",
          "Gratitude Planner",
          "Life Reset Planner",
        ]}
      />

      <Row
        icon={<Clock3 size={22} />}
        title="Time Format"
        value={timeFormat}
        onChange={setTimeFormat}
        options={[
          "12 Hour",
          "24 Hour",
        ]}
      />

      <Row
        icon={<CalendarDays size={22} />}
        title="Week Starts On"
        value={weekStart}
        onChange={setWeekStart}
        options={[
          "Sunday",
          "Monday",
        ]}
      />

      <Row
        icon={<Target size={22} />}
        title="Daily Productivity Goal"
        value={goal}
        onChange={setGoal}
        options={[
          "5 Tasks",
          "8 Tasks",
          "10 Tasks",
          "15 Tasks",
        ]}
      />

    </div>
  );
}