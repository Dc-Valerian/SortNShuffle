import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
