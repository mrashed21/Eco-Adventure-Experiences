import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("/categoyCard.json"),
  },
]);

export default routes;
