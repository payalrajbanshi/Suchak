import { Info } from "lucide-react";

export default function AboutSection() {

  return (

    <div className="bg-white rounded-3xl shadow-md p-8">

      <div className="flex items-center gap-3 mb-6">

        <Info size={24} />

        <h2 className="text-2xl font-semibold">
          About
        </h2>

      </div>

      <p className="text-gray-700">
        Suchak v1.0
      </p>

      <p className="text-gray-500 mt-2">
        Smart Productivity, Planning & Wellness Platform.
      </p>

    </div>

  );
}