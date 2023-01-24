import { createBrowserRouter } from "react-router-dom";
import MailBox from "./pages/MailBox";
import MultiStep from "./pages/MultiStep";
import SideMenu from "./pages/SideMenu";

export const Router = createBrowserRouter([
  { path: "/multistep", element: <MultiStep /> },
  { path: "/sidemenu", element: <SideMenu /> },
  { path: "/mailbox", element: <MailBox /> },
]);
