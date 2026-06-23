import { Heart } from "lucide-react";

interface Props {
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const PlannerCard = ({ title, description, emoji, color }: Props) => {
  return (
    <div
      className={`${color} rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]`}
    >
      <div className="flex justify-between items-start">
        <div className="text-4xl">{emoji}</div>
        <Heart size={18} className="text-white/80" />
      </div>

      <h2 className="text-xl font-bold mt-4">{title}</h2>

      <p className="text-sm opacity-80 mt-1">{description}</p>

      <button className="mt-5 bg-white/20 px-4 py-2 rounded-xl">
        Open Planner
      </button>
    </div>
  );
};

export default PlannerCard;