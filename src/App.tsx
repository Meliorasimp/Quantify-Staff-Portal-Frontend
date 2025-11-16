import { useRoutes } from "react-router-dom";
import Router from "./routes";
import { Toaster } from "sonner";

function App() {
  const router = useRoutes(Router);
  return (
    <>
      {router}
      <Toaster />
    </>
  );
}

export default App;
