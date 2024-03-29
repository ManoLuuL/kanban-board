import { Boards } from "../pages";
import { Layout } from "../layout";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          {
            path: "",
            element: <Boards />,
          },
        ],
      },
    ],
  },
];
