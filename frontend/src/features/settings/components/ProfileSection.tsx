import { User } from "lucide-react";

export default function ProfileSection() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <User size={26} />

        <h2 className="text-2xl font-semibold">
          Profile
        </h2>

      </div>

      <p className="text-gray-700">
        Name
      </p>

      <input
        className="w-full mt-2 border rounded-xl p-3"
        value="Ram Sharma"
        readOnly
      />

      <p className="text-gray-700 mt-5">
        Email
      </p>

      <input
        className="w-full mt-2 border rounded-xl p-3"
        value="ram@gmail.com"
        readOnly
      />

    </div>
  );
}