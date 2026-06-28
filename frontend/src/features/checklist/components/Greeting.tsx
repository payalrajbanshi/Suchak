import { getGreeting } from "../utils";

const Greeting = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-gray-900">
        {getGreeting()}
      </h1>
    </div>
  );
};

export default Greeting;