import {
  IoNotificationsOutline,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";

import { twMerge } from "tailwind-merge";

export const Options = () => {
  const options = [
    <IoShareSocialOutline color={"#444"} />,
    <IoSettingsOutline color={"#444"} />,
    <IoNotificationsOutline color={"#444"} />,
  ];

  const OptionsRender = options.map((opt, index) => {
    return (
      <div
        key={index}
        className={twMerge(
          "grid p-2",
          "place-items-center bg-gray-100 rounded-full",
          "cursor-pointer"
        )}
      >
        {opt}
      </div>
    );
  });

  return OptionsRender;
};
