import type { ChecklistItem } from "../types";

interface Props {
  item: ChecklistItem;
  onToggle: () => void;
  onChange: (value: string) => void;
  onEnter: () => void;
}

const PlannerItem = ({
  item,
  onToggle,
  onChange,
  onEnter,
}: Props) => {
  return (
    <div className="
flex
items-center
gap-4
py-3
border-b
border-gray-300
hover:border-pink-400
transition
">

      <input
        type="checkbox"
        checked={item.completed}
        onChange={onToggle}
        className="w-5 h-5 accent-black"
      />

      <input
        value={item.text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onEnter();
          }
        }}
        placeholder="Type here..."
        className={`flex-1 bg-transparent outline-none text-lg ${
          item.completed
            ? "line-through text-gray-400"
            : ""
        }`}
      />

    </div>
  );
};

export default PlannerItem;