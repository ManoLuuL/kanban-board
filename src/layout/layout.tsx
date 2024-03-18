import { Navbar } from "../components/navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <div className="px-5 pt-20 w-full h-full overflow-y-auto bg-gray-900">
        <Outlet />
      </div>
    </div>
  );
};
