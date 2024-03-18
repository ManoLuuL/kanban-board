import {
  IoPencilOutline,
  IoTimeOutline,
  IoTrashOutline,
} from "react-icons/io5";

import { Button } from "../ui/button";
import { TaskProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Task = (props: TaskProps) => {
  const { task, provided } = props;

  const { title, description, priority, deadline, image, alt, tags } = task;

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="bg-gray-500 px-3 py-4 gap-3 items-center flex flex-col justify-between text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-cyan-500 cursor-grab relative task"
    >
      {image && alt && (
        <img src={image} alt={alt} className="w-full h-[170px] rounded-lg" />
      )}

      <div className="w-full flex items-start flex-col gap-2">
        <div className="text-center flex justify-center items-center">
          <span className="pl-1 text-lg font-medium text-gray-50">{title}</span>
        </div>
        <span className="text-xs text-gray-50 inline-block max-w-60 whitespace-nowrap overflow-hidden text-ellipsis h-10">
          {description}
        </span>
        <div className="flex gap-2">
          <span
            className={twMerge(
              "px-3 py-1 text-xs font-medium rounded-md text-white",
              priority === "high"
                ? "bg-red-500"
                : priority === "medium"
                ? "bg-orange-500"
                : "bg-blue-500"
            )}
          >
            {priority === "high"
              ? "Alta"
              : priority === "medium"
              ? "Média"
              : "Baixa"}
          </span>
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag.title}
                className={twMerge("px-3 py-1 text-xs font-medium rounded-md")}
                style={{ backgroundColor: tag.bg, color: tag.text }}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IoTimeOutline color={"#ffffff"} className="h-5 w-5" />
          <span className="text-xs text-gray-50">{deadline} mins</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={"default"}
            size={"sm"}
            className="bg-gray-700 hover:bg-gray-800"
          >
            <IoPencilOutline size={18} color="#ffff" />
          </Button>
          <Button
            variant={"default"}
            size={"sm"}
            className="bg-red-500 hover:bg-red-600"
          >
            <IoTrashOutline size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
