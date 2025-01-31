import { createBrowserRouter } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import ForgotPassword from "../components/ForgotPassword";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import SingleCardDetails from "../components/SingleCardDetails";
import UpdateProfile from "../components/UpdateProfile";
import Error from "../error/Error";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import CategoryProvider from "../provider/AllDataContext";
import AuthProvider from "../provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";

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
    errorElement: <Error />,
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
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/update/profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      { path: "/reset/password", element: <ForgotPassword /> },
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
