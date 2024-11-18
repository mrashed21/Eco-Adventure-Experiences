import { createBrowserRouter } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import SingleCardDetails from "../components/SingleCardDetails";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CategoryProvider from "../provider/AllDataContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <CategoryProvider>
        <MainLayout />
      </CategoryProvider>
    ),
    children: [
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
      {
        path: "category/:id",
        element: <SingleCardDetails />,
        loader: () => fetch("/mountainTreks.json"),
      },
    ],
  },
]);

export default routes;
