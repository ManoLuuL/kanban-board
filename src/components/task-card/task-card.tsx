import { IoCalendarOutline, IoTimeOutline, IoTrash } from "react-icons/io5";

import { Button } from "../ui/button";
import { TaskCardProps } from "./types";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export const TaskCard = (props: TaskCardProps) => {
  const { task, provided, onRemove, onEdit } = props;

  const { title, priority, deadline, tags, briefDescription, endTask } = task;

  const priorityText =
    priority === "high" ? "Alta" : priority === "medium" ? "Média" : "Baixa";

  console.log(tags);

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={twMerge(
        "flex flex-col justify-between items-center px-3 py-4 gap-3 text-left rounded-xl relative",
        "cursor-grab task",
        "bg-gray-800 hover:ring-2 hover:ring-inset hover:ring-cyan-500",
        "transition duration-200 hover:scale-105"
      )}
    >
      <div className="w-full flex items-start flex-col gap-2" onClick={onEdit}>
        <div className="text-center flex justify-center items-center">
          <span className="text-lg font-medium text-gray-50">{title}</span>
        </div>
        <span className="text-xs text-gray-50 inline-block max-w-60 whitespace-nowrap overflow-hidden text-ellipsis h-10">
          {briefDescription}
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
            {priorityText}
          </span>
          <div className="flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag.title}
                className={twMerge(
                  "px-3 py-1 text-xs font-medium rounded-md",
                  tag.bg,
                  tag.text
                )}
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border border-dashed"></div>
      <div className="w-full flex items-center justify-between">
        {endTask && (
          <div className="flex items-center gap-1">
            <IoCalendarOutline color={"#ffffff"} className="h-5 w-5" />
            <span className="text-xs text-gray-50">
              {format(endTask, "dd/MM/yyyy")}
            </span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <IoTimeOutline color={"#ffffff"} className="h-5 w-5" />
          <span className="text-xs text-gray-50">{deadline} mins</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={"secondary"}
            size={"sm"}
            className="!text-red-500 hover:!bg-red-500 hover:!text-red-100 !transition-all"
            onClick={onRemove}
          >
            <IoTrash size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
