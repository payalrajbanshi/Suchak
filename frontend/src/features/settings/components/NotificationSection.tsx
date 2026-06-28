import { Bell } from "lucide-react";

export default function NotificationSection() {

  return (

    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <Bell size={24} />

        <h2 className="text-2xl font-semibold">
          Notifications
        </h2>

      </div>

      <div className="space-y-4">

        <label className="flex gap-3">

          <input type="checkbox" defaultChecked />

          Daily Reminder

        </label>

        <label className="flex gap-3">

          <input type="checkbox" defaultChecked />

          Weekly Summary

        </label>

      </div>

    </div>

  );
}