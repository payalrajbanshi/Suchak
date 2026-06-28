

import AppRoutes from "./routes/AppRoutes";
import { PlannerSettingsProvider } from "./features/planner/context/PlannerSettingsContext";
function App() {
  return(
    <PlannerSettingsProvider>
      <AppRoutes/>
    </PlannerSettingsProvider>
  );
  
}

export default App;