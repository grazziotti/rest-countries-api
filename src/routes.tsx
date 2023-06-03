import { useRoutes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Error } from "./components/Error";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail/:country", element: <Detail /> },
    { path: "*", element: <NotFoundPage /> }
  ]);
};
