import ActivityPlanner from "containers/activity-planner";
import { ThemeProvider } from "themes";

function App() {
  return (
    <ThemeProvider>
      <ActivityPlanner />
    </ThemeProvider>
  );
}

export default App;
