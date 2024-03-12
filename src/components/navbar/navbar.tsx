import {
  IoChevronDownSharp,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoSearchOutline,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

import { NAVBAR_WIDTH_CALC } from "./consts";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  return (
    <div
      className={twMerge(
        "h-16",
        "fixed flex items-center justify-between",
        "pl-2 pr-6 top-0 md:left-56 left-14 border-b border-slate-300 bg-white",
        NAVBAR_WIDTH_CALC
      )}
    >
      <div className="flex items-center gap-3 cursor-pointer">
        <IoPersonCircleOutline className="text-cyan-500 h-7 w-7" />

        <span className="text-cyan-500 font-semibold md:text-lg text-sm whitespace-nowrap">
          Kanban Board
        </span>
        <IoChevronDownSharp className="text-cyan-500 h-4 w-4" />
      </div>
      <div className="md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px] flex items-center gap-2">
        <IoSearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 outline-none text-[15px]"
        />
      </div>
      <div className="md:flex hidden items-center gap-4">
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <IoShareSocialOutline color={"#444"} />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <IoSettingsOutline color={"#444"} />
        </div>
        <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
          <IoNotificationsOutline color={"#444"} />
        </div>
      </div>
    </div>
  );
};
