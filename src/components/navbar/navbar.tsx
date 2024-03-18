import { IoSearchOutline } from "react-icons/io5";
import { UserAccountMenu } from "./components";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  return (
    <div
      className={twMerge(
        "h-16 w-full",
        "fixed flex items-center justify-between",
        "px-6 top-0",
        "border-b border-gray-300 bg-gray-800"
      )}
    >
      <div className={twMerge("flex items-center gap-3", "cursor-pointer")}>
        <span className="text-cyan-500 font-semibold md:text-lg text-base whitespace-nowrap">
          Kanban Board
        </span>
      </div>
      <div
        className={twMerge(
          "md:w-[50rem] w-32",
          "bg-gray-100 rounded-lg",
          "px-3 py-3 flex items-center gap-2"
        )}
      >
        <IoSearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className={twMerge("w-full", "bg-gray-100 outline-none", "text-base")}
        />
      </div>
      <div className="md:flex hidden items-center gap-4">
        <UserAccountMenu />
      </div>
    </div>
  );
};
