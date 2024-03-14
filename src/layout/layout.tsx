import { Navbar } from "../components/navbar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
