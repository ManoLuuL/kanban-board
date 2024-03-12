import { IoBriefcaseOutline, IoHomeOutline } from "react-icons/io5";

import { LinkNavegationParams } from "./types";

export const SIDEBAR_LINKS_NAVEGATION: LinkNavegationParams[] = [
  {
    title: "Inicio",
    icon: <IoHomeOutline className="text-gray-600 h-5 w-5" />,
    active: false,
  },
  {
    title: "Quadros",
    icon: <IoBriefcaseOutline className="text-gray-600 h-5 w-5" />,
    active: true,
  },
];

export const SIDEBAR_HEIGHT_CALC = "h-[calc(100vh-70px)]";
