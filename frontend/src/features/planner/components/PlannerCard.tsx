import type { Planner } from "../types/planner";
import { Heart } from "lucide-react";

interface Props {
  planner: Planner;
}

const PlannerCard = ({ planner }: Props) => {
  return (
    <div
      className={`
        bg-gradient-to-br
        ${planner.gradient}
        text-white
        rounded-3xl
        p-6
        shadow-lg
        hover:scale-105
        transition-all
        duration-300
      `}
    >
      <div className="text-5xl mb-4">{planner.icon}</div>

      <h2 className="text-xl font-bold">
        {planner.title}
      </h2>

      <p className="text-sm opacity-90 mt-2">
        {planner.description}
      </p>

      <div className="mt-4 text-sm">
        {planner.entries} entries
      </div>

      <div className="text-xs opacity-80">
        Updated {planner.updatedAt}
      </div>

      <div className="flex justify-between mt-5">
        <button
          className="
            bg-white/20
            px-4
            py-2
            rounded-xl
            hover:bg-white/30
          "
        >
          Open Planner
        </button>

        <button>
          <Heart
            fill={planner.favorite ? "white" : "none"}
          />
        </button>
      </div>
    </div>
  );
};

export default PlannerCard;