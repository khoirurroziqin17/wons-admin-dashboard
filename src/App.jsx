import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./404";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
