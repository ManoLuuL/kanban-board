/* eslint-disable @typescript-eslint/no-explicit-any */

import { Columns, TaskProps, onDragEnd } from "../../globals";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { TaskCard, TaskModal } from "../../components";

import { Board } from "../../data/board";
import { IoAddOutline } from "react-icons/io5";
import { useState } from "react";
import { useToast } from "@/components/ui";

export const Boards = () => {
  const [columns, setColumns] = useState<Columns>(Board);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [editedTask, setEditedTask] = useState<TaskProps>();

  const { toast } = useToast();

  const handleOpen = (columnId: string) => {
    setSelectedColumn(columnId);
    setIsOpen(true);
  };

  const handleOpenEdit = (columnId: string, taskId: string) => {
    setSelectedColumn(columnId);
    setIsEdit(true);

    const editedTask = columns[columnId].items.find(
      (task) => task.id === taskId
    );
    if (editedTask) {
      setEditedTask(editedTask);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsEdit(false);
    setEditedTask(undefined);
  };

  const handleAdd = (taskData: TaskProps) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
  };

  const handleRemove = (taskId: string) => {
    const updatedColumns = { ...columns };
    const columnKeys = Object.keys(updatedColumns);
    let taskTitle = "";
    for (const key of columnKeys) {
      const column = updatedColumns[key];
      const index = column.items.findIndex((task) => task.id === taskId);
      taskTitle = column.items.find((task) => task.id === taskId)?.title ?? "";
      if (index !== -1) {
        updatedColumns[key].items.splice(index, 1);
        break;
      }
    }
    setColumns(updatedColumns);
    toast({
      title: `Deletada a Tarefa: ${taskTitle}`,
      description: "Todos os dados removidos com sucesso.",
    });
  };

  const handleEdit = (taskId: string, updatedTaskData: TaskProps) => {
    const updatedColumns = { ...columns };
    const columnKeys = Object.keys(updatedColumns);
    for (const key of columnKeys) {
      const column = updatedColumns[key];
      const index = column.items.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        updatedColumns[key].items[index] = updatedTaskData;
        break;
      }
    }
    setColumns(updatedColumns);
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        <div className="w-full flex items-start justify-between px-5 pb-8 md:gap-0 gap-10 h-full rounded-md">
          {Object.entries(columns).map(([columnId, column]: any) => (
            <div className="w-full flex flex-col gap-0" key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col bg-gray-950 w-[21rem] max-h-[calc(100vh-6rem)] h-screen rounded-md"
                  >
                    <div className="bg-gray-800 text-lg h-14 rounded-xl p-3 font-bold border-gray-950 border-4 flex items-center justify-center">
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
                              <TaskCard
                                provided={provided}
                                task={task}
                                onRemove={() =>
                                  handleRemove(task.id.toString())
                                }
                                onEdit={() =>
                                  handleOpenEdit(columnId, task.id.toString())
                                }
                              />
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

      {(isOpen || isEdit) && (
        <TaskModal
          onClose={handleClose}
          handleAddTask={handleAdd}
          taskEdit={{
            isEdit,
            task: editedTask,
            handleEditTask: handleEdit,
          }}
        />
      )}
    </>
  );
};
