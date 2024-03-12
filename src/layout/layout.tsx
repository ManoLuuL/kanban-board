import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <div
        className={twMerge(
          "w-full h-full",
          "md:pl-60 pl-14 pr-5 pt-16",
          "overflow-y-auto"
        )}
      >
        <Outlet />
      </div>
    </div>
  );
};
