import { createBrowserRouter } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("/categoyCard.json"),
    children: [
      {
        path: "/",
        element: <CardContainer />,
        loader: () => fetch("/mountainTreks.json"),
      },
    ],
  },
]);

export default routes;
