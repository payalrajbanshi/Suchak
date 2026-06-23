import PlannerCard from "./PlannerCard";
import { plannerData } from "../mock/plannerData";

const PlannerGrid = () => {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {plannerData.map((planner) => (
        <PlannerCard
          key={planner.id}
          planner={planner}
        />
      ))}
    </div>
  );
};

export default PlannerGrid;