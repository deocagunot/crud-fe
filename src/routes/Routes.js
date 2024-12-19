import React from "react";
import { useRoutes } from "react-router-dom";

const Posts = React.lazy(() => import("../pages/Posts"));
const PostDetail = React.lazy(() => import("../pages/PostDetails"));
const About = React.lazy(() => import("../pages/About"));
const Home = React.lazy(() => import("../pages/Home"));

export const Routes = () =>
  useRoutes([
    { path: "/crud-fe/", element: <Home /> },
    { path: "/about", element: <About /> },
    {
      path: "/posts",
      element: <Posts />,
      children: [{ path: ":id", element: <PostDetail /> }],
    },
  ]);
