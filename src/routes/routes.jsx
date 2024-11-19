import { createBrowserRouter } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import SingleCardDetails from "../components/SingleCardDetails";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import CategoryProvider from "../provider/AllDataContext";
import AuthProvider from "../provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <CategoryProvider>
          <MainLayout />
        </CategoryProvider>
      </AuthProvider>
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
        element: (
          <PrivateRoute>
            <SingleCardDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/mountainTreks.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
