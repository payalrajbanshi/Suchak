import { Heart } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  emoji: string;
  color: string;
  entries?: number;
  updatedAt?: string;
}

const PlannerCard = ({
  title,
  description,
  emoji,
  color,
  entries = 0,
  updatedAt = "Today",
}: Props) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div
      className={`
        ${color}
        rounded-3xl
        p-6
        shadow-md
        hover:shadow-2xl
        transition-all
        duration-300
        hover:scale-[1.03]
        text-white
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="text-4xl">{emoji}</div>

        <button onClick={() => setFavorite(!favorite)}>
          <Heart
            size={20}
            fill={favorite ? "white" : "none"}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mt-4">{title}</h2>

      {/* Description */}
      <p className="text-sm opacity-80 mt-1">{description}</p>

      {/* Stats */}
      <div className="mt-4 text-sm opacity-90">
        {entries} entries • Updated {updatedAt}
      </div>

      {/* Button */}
      <button className="mt-5 bg-white/20 px-4 py-2 rounded-xl hover:bg-white/30">
        Open Planner
      </button>
    </div>
  );
};

export default PlannerCard;