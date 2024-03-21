import { Navbar } from "../components/navbar";
import { Outlet } from "react-router";
import { SearchProvider } from "@/globals";

export const Layout = () => {
  return (
    <SearchProvider>
      <div
        className="h-dvh grid overflow-hidden grid-cols-[100dvw] sm:gap-6 dark"
        style={{
          gridTemplateRows: "4rem 1fr",
        }}
      >
        <Navbar />
        <Outlet />
      </div>
    </SearchProvider>
  );
};
