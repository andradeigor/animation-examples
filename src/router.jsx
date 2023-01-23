import { createBrowserRouter } from "react-router-dom";
import MultiStep from "./pages/MultiStep";
import SideMenu from "./pages/SideMenu";

export const Router = createBrowserRouter([
  { path: "/multistep", element: <MultiStep /> },
  { path: "/sidemenu", element: <SideMenu /> },
]);
