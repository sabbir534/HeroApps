import { createBrowserRouter } from "react-router";
import AppDetails from "../pages/AppDetails/AppDetails";
import AppsPage from "../pages/AppsPage/AppsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";
import Root from "../pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: AppsPage,
      },
      {
        path: "/appDetails/:id",
        loader: () => fetch("/appsData.json"),
        errorElement: <ErrorPage />,
        Component: AppDetails,
      },
      {
        path: "/installation",
        loader: () => fetch("/appsData.json"),
        Component: Installation,
      },

      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
