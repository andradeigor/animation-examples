import { createBrowserRouter } from "react-router-dom";
import MailBox from "./pages/MailBox";
import MultiStep from "./pages/MultiStep";
import SideMenu from "./pages/SideMenu";
import Carrossel from "./pages/Carrossel";
import Home from "./pages/Home";

export const Router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "/multistep", element: <MultiStep /> },
  { path: "/sidemenu", element: <SideMenu /> },
  { path: "/mailbox", element: <MailBox /> },
  { path: "/carrossel", element: <Carrossel /> },
]);
