import { Draggable, Droppable } from "react-beautiful-dnd";

import { BoardsColumnsProps } from "./types";
import { Tasks } from "..";

type Columns = {
  id: string;
  title: string;
  tasks: { id: string; content: string }[];
};

export const BoardColumns = (props: Columns) => {
  const { id, tasks, title } = props;

  return (
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="bg-gray-100 p-2 rounded"
          >
            {tasks.map((task, index) => (
              <Tasks
                key={task.id}
                id={task.id}
                content={task.content}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    // <div className="bg-gray-200 rounded p-4 w-64">
    //   <h2 className="text-lg font-semibold mb-4">{title}</h2>
    //   <Droppable droppableId={title}>
    //     {(provided) => (
    //       <>
    //       <Draggable draggableId={title} index={}
    //       {...provided.droppableProps}>

    //       {() => (
    //         <div
    //         className="space-y-4"

    //       >
    //         {tasks.map((task) => (
    //           <Tasks key={task.title} {...task} />
    //         ))}

    //       </div>
    //       )}
    //       </Draggable>
    //       {provided.placeholder}
    //       </>
    //     )}
    //   </Droppable>
    // </div>
  );
};

// <Draggable draggableId={title} index={index}>
//   {(provided) => (
//     // Container das colunas
//     <div
//       className={twMerge(
//         "bg-gray-200 w-[350px] h-[500px] rounded-md flex flex-col"
//       )}
//       ref={provided.innerRef}
//       {...provided.draggableProps}
//     >
//       {/* Column title */}
//       <div
//         {...provided.dragHandleProps}
//         // onClick={() => {
//         //   setEditMode(true);
//         // }}
//         className={twMerge(
//           "bg-gray-200 text-md h-[60px] cursor-grab rounded-md rounded-b-none  p-3 font-bold border-gray-300 border-4 flex items-center justify-between"
//         )}
//       >
//         <div className="flex gap-2">
//           <div
//             className="
//     flex
//     justify-center
//     items-center
//     bg-gray-300
//     px-2
//     py-1
//     text-sm
//     rounded-full
//     "
//           >
//             0
//           </div>
//           {title}
//           {/* {!editMode && column.title}
//             {editMode && (
//               <input
//                 className="bg-black focus:border-rose-500 border rounded outline-none px-2"
//                 value={column.title}
//                 onChange={(e) => updateColumn(column.id, e.target.value)}
//                 autoFocus
//                 onBlur={() => {
//                   setEditMode(false);
//                 }}
//                 onKeyDown={(e) => {
//                   if (e.key !== "Enter") return;
//                   setEditMode(false);
//                 }}
//               />
//             )} */}
//         </div>
//         <button
//           // onClick={() => {
//           //   deleteColumn(column.id);
//           // }}
//           className="
//     stroke-gray-500
//     hover:stroke-white
//     hover:bg-columnBackgroundColor
//     rounded
//     px-1
//     py-2
//     "
//         >
//           <IoTrashOutline />
//         </button>
//       </div>

//     </div>
//   )}
// </Draggable>
