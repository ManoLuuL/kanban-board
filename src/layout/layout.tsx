import { Navbar } from "../components/navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="h-dvh grid overflow-hidden grid-rows-[4rem 1fr] grid-cols-[100dvw] sm:gap-6 dark">
      <Navbar />
      <Outlet />
    </div>
  );
};
