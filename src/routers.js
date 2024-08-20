import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

import Home , { rootLoader } from "./Components/Screens/Home";

//list routes
export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: rootLoader,
      children: [
        {
          path: "*",
          element: <NotFound />,
          loader: teamLoader,
        },
      ],
    },
  ]);