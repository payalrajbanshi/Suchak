import { Shield } from "lucide-react";

export default function SecuritySection() {

  return (

    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <Shield size={24} />

        <h2 className="text-2xl font-semibold">
          Security
        </h2>

      </div>

      <button
        className="
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        hover:bg-blue-700
        "
      >
        Change Password
      </button>

    </div>

  );
}