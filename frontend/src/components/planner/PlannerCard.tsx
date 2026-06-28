import { useNavigate } from "react-router-dom";

interface PlannerCardProps {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  entries: number;
  updatedAt: string;
}

const PlannerCard = ({
  id,
  title,
  description,
  emoji,
  color,
  entries,
  updatedAt,
}: PlannerCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/planner/${id}`)}
      className="
        bg-white
        rounded-3xl
        p-6
        shadow-md
        border
        border-slate-200
        cursor-pointer
        hover:-translate-y-2
        hover:shadow-xl
        transition-all
      "
    >
      <div
        className={`
          w-16 h-16
          rounded-2xl
          flex items-center justify-center
          text-3xl
          text-white
          ${color}
        `}
      >
        {emoji}
      </div>

      <h2 className="text-xl font-bold mt-5">
        {title}
      </h2>

      <p className="text-slate-500 mt-2">
        {description}
      </p>

      <div className="flex justify-between mt-5 text-sm text-slate-400">
        <span>{entries} entries</span>
        <span>{updatedAt}</span>
      </div>
    </div>
  );
};

export default PlannerCard;