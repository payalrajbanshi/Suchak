import { Save } from "lucide-react";

export default function SaveButton() {
  return (
    <div className="sticky bottom-0 bg-white border-t px-10 py-6 flex justify-end">

      <button
        className="
        flex
        items-center
        gap-3
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-8
        py-3
        rounded-2xl
        shadow-lg
        transition
        "
      >
        <Save size={20} />

        Save Changes

      </button>

    </div>
  );
}