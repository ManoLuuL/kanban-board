import { SIDEBAR_HEIGHT_CALC, SIDEBAR_LINKS_NAVEGATION } from "./consts";

import { IoLogOutOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export const Sidebar = () => {
  const Itens = SIDEBAR_LINKS_NAVEGATION.map((link) => {
    const { active, icon, title } = link;

    return (
      <div
        key={title}
        className={twMerge(
          "w-full",
          "flex items-center gap-2 rounded-lg px-2 py-3",
          "hover:bg-cyan-200 cursor-pointer transition-all",
          active ? "bg-cyan-300" : "bg-transparent"
        )}
      >
        {icon}
        <span
          className={twMerge(
            "font-medium text-base md:block hidden",
            "text-gray-800"
          )}
        >
          {title}
        </span>
      </div>
    );
  });

  return (
    <div
      className={twMerge(
        "md:w-56 w-14 h-full",
        "fixed left-0 top-0 overflow-hidden",
        "flex flex-col",
        "border-r border-slate-300"
      )}
    >
      <div
        className={twMerge(
          "w-full h-16",
          "flex items-center md:justify-start justify-center md:pl-5",
          "bg-[#fff]"
        )}
      >
        <span
          className={twMerge(
            "hidden md:block",
            "text-cyan-500 font-semibold text-2xl"
          )}
        >
          Kanban Board
        </span>
        <span
          className={twMerge(
            "md:hidden block",
            "text-cyan-500 font-semibold text-2xl"
          )}
        >
          K.B
        </span>
      </div>
      <div
        className={twMerge(
          "w-full",
          "relative flex flex-col md:items-start items-center gap-2 py-5 md:px-3 px-3",

          "bg-white",
          SIDEBAR_HEIGHT_CALC
        )}
      >
        {Itens}
        <div
          className={twMerge(
            "md:w-11/12 w-[70%]",
            "flex absolute items-center md:justify-start justify-center gap-2 rounded-lg px-2 py-3 bottom-4",
            "bg-gray-200",
            "hover:bg-cyan-300 cursor-pointer"
          )}
        >
          <IoLogOutOutline />
          <span className="font-medium text-[15px] md:block hidden">Sair</span>
        </div>
      </div>
    </div>
  );
};
