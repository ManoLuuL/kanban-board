/* eslint-disable @typescript-eslint/no-explicit-any */

import { AddTaskModal, Task } from "../../components";
import { Columns, TaskT, onDragEnd } from "../../globals";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { Board } from "../../data/board";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";

export const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleOpen = (columnId: string) => {
    setSelectedColumn(columnId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdd = (taskData: TaskT) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10 bg-gray-100 h-full rounded-md">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col md:w-[290px] w-[250px] gap-3 items-center py-5"
                  >
                    <div className="flex items-center justify-center py-[10px] w-full bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]">
                      {column.name}
                    </div>
                    {column.items.map((task: any, index: any) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <>
                            <Task provided={provided} task={task} />
                          </>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div
                onClick={() => handleOpen(columnId)}
                className="flex cursor-pointer items-center justify-center gap-1 py-[10px] md:w-[90%] w-full opacity-90 bg-white rounded-lg shadow-sm text-[#555] font-medium text-[15px]"
              >
                <IoAddOutline color={"#555"} />
                Add Task
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      {isOpen && (
        <AddTaskModal
          onClose={handleClose}
          setOpen={setIsOpen}
          handleAddTask={handleAdd}
        />
      )}
    </>
  );
};
