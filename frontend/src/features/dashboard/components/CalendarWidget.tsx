import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const CalendarWidget = () => {
  const [selected, setSelected] = useState<Date>();

  return (
    <div
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-5
      "
    >
      <h2 className="font-semibold mb-4 text-white">
        Calendar
      </h2>

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />

      <p className="mt-4 text-sm text-slate-400">
        {selected
          ? `Selected: ${selected.toLocaleDateString()}`
          : "Pick a day"}
      </p>
    </div>
  );
};

export default CalendarWidget;