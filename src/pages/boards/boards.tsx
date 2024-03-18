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
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10  h-full rounded-md">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col bg-gray-950 w-[21.8rem] max-h-screen h-[850px] rounded-md"
                  >
                    <div className="bg-gray-800 text-lg h-14 rounded-md rounded-b-none p-3 font-bold border-gray-950 border-4 flex items-center justify-center">
                      <div className="flex gap-2 justify-center items-center text-gray-50">
                        {column.name}
                      </div>
                    </div>
                    <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
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
                    <button
                      className="text-gray-50 flex gap-2 items-center border-gray-800 border-2 rounded-md p-4 border-x-gray-800 hover:text-cyan-500 active:bg-black"
                      onClick={() => handleOpen(columnId)}
                    >
                      <IoAddOutline color={"#ffffff"} />
                      Adicionar Tarefa
                    </button>
                  </div>
                )}
              </Droppable>
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
