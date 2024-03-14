import { routes } from "./routes";
import { useRoutes } from "react-router";

function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}

export default App;
