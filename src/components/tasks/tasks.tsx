import { Draggable } from "react-beautiful-dnd";

type TaskProps2 = {
  id: string;
  content: string;
  index: number;
};
export const Tasks = (props: TaskProps2) => {
  const { content, id, index } = props;
  // const { deadline, description, priority, tags, title, alt, image } = props;

  // const Tags = tags.map((tag) => (
  //   <span
  //     key={tag.title}
  //     className={twMerge("px-2 py-[2px] rounded-md", "text-sm font-medium")}
  //     style={{ backgroundColor: tag.bg, color: tag.text }}
  //   >
  //     {tag.title}
  //   </span>
  // ));

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-white p-4 mb-2 rounded shadow"
        >
          {content}
        </div>
      )}
    </Draggable>
    // <div
    //   id={title}
    //   className={twMerge(
    //     "w-full",
    //     "flex flex-col justify-between gap-3 items-start shadow-sm rounded-xl px-3 py-4",
    //     "cursor-grab bg-white"
    //   )}
    // >
    //   {image && alt && (
    //     <img src={image} alt={alt} className="w-full h-40 rounded-lg" />
    //   )}
    //   <div className="flex items-center gap-2">{Tags}</div>
    //   <div className={twMerge("w-full", "flex items-start flex-col gap-0")}>
    //     <span className={twMerge("text-base font-medium text-gray-500")}>
    //       {title}
    //     </span>
    //     <span className="text-sm text-gray-500">{description}</span>
    //   </div>
    //   <div className={twMerge("w-full", "border border-dashed")}></div>
    //   <div className={twMerge("w-full", "flex items-center justify-between")}>
    //     <div className="flex items-center gap-1">
    //       <IoTimeOutline className="h-5 w-5 text-gray-500" />
    //       <span className="text-sm text-gray-700">{deadline} mins</span>
    //     </div>
    //     <div
    //       className={twMerge(
    //         "w-14 h-1",
    //         "rounded-full",
    //         priority === "high"
    //           ? "bg-red-500"
    //           : priority === "medium"
    //           ? "bg-orange-500"
    //           : "bg-blue-500"
    //       )}
    //     ></div>
    //   </div>
    // </div>
  );
};
