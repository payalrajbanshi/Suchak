import { useState } from "react";
import {
  Bell,
  CalendarClock,
  Clock3,
  CheckCircle2,
} from "lucide-react";

export default function NotificationTab() {
  const [dailyReminder, setDailyReminder] = useState(true);
  const [deadlineReminder, setDeadlineReminder] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);
  const [plannerReminder, setPlannerReminder] = useState(true);

  const SettingRow = ({
    icon,
    title,
    description,
    enabled,
    onToggle,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    enabled: boolean;
    onToggle: () => void;
  }) => (
    <div className="flex items-center justify-between border rounded-2xl p-5 hover:shadow-md transition">

      <div className="flex items-start gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
          {icon}
        </div>

        <div>

          <h3 className="font-semibold text-lg">
            {title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {description}
          </p>

        </div>

      </div>

      {/* Toggle */}

      <button
        onClick={onToggle}
        className={`w-14 h-8 rounded-full transition relative ${
          enabled
            ? "bg-blue-600"
            : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1 w-6 h-6 bg-white rounded-full transition ${
            enabled ? "left-7" : "left-1"
          }`}
        />
      </button>

    </div>
  );

  return (
    <div className="space-y-6">

      <div>

        <h2 className="text-3xl font-bold">
          Notifications
        </h2>

        <p className="text-gray-500 mt-2">
          Choose which reminders Suchak should send.
        </p>

      </div>

      <SettingRow
        icon={<Bell size={22} />}
        title="Daily Reminder"
        description="Receive a reminder every morning to plan your day."
        enabled={dailyReminder}
        onToggle={() =>
          setDailyReminder(!dailyReminder)
        }
      />

      <SettingRow
        icon={<Clock3 size={22} />}
        title="Deadline Reminder"
        description="Notify before a task reaches its deadline."
        enabled={deadlineReminder}
        onToggle={() =>
          setDeadlineReminder(!deadlineReminder)
        }
      />

      <SettingRow
        icon={<CalendarClock size={22} />}
        title="Weekly Summary"
        description="Receive your productivity report every Sunday."
        enabled={weeklySummary}
        onToggle={() =>
          setWeeklySummary(!weeklySummary)
        }
      />

      <SettingRow
        icon={<CheckCircle2 size={22} />}
        title="Planner Reminder"
        description="Reminder to complete your daily planner."
        enabled={plannerReminder}
        onToggle={() =>
          setPlannerReminder(!plannerReminder)
        }
      />

      {/* Preview */}

      <div className="mt-10 bg-blue-50 rounded-3xl p-6 border border-blue-100">

        <h3 className="font-semibold text-blue-700 mb-3">
          Active Notifications
        </h3>

        <ul className="space-y-2 text-gray-700">

          {dailyReminder && (
            <li>✅ Daily Reminder</li>
          )}

          {deadlineReminder && (
            <li>✅ Deadline Reminder</li>
          )}

          {weeklySummary && (
            <li>✅ Weekly Summary</li>
          )}

          {plannerReminder && (
            <li>✅ Planner Reminder</li>
          )}

        </ul>

      </div>

    </div>
  );
}