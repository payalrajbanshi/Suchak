import {
  Settings,
  Bell,
  UserCircle,
} from "lucide-react";

export default function SettingsHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-8">

      <div className="flex justify-between items-center">

        {/* Left */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">

            <Settings size={30} />

          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Account Settings
            </h1>

            <p className="text-blue-100 mt-1">
              Manage your account, preferences and security.
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <button className="relative">

            <Bell size={22} />

            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500"></span>

          </button>

          <div className="flex items-center gap-3">

            <UserCircle size={38} />

            <div>

              <p className="font-semibold">
                Ram Sharma
              </p>

              <p className="text-sm text-blue-100">
                ram@gmail.com
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}