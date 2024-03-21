import { Button, useToast } from "@/components/ui";
import { Columns, TaskProps, onDragEnd } from "../../globals";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { TaskCard, TaskModal } from "../../components";

import { IoAddOutline } from "react-icons/io5";
import { TaskData } from "@/data";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const Boards = () => {
  const [columns, setColumns] = useState<Columns>(TaskData);
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

  const handleOnDragEnd = (result: DropResult) =>
    onDragEnd({ result, columns, setColumns });

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex flex-grow justify-between p-5 md:gap-6 sm:gap-10 rounded-md overflow-scroll">
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col flex-grow w-[21rem] rounded-md"
                >
                  <div className="bg-gray-800 text-lg rounded-xl p-2 font-bold flex items-center justify-center">
                    {column.name}
                  </div>

                  <div className="flex flex-col gap-4 p-2 overflow-x-hidden">
                    {column.items.map((task: TaskProps, index: number) => (
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
                              onRemove={() => handleRemove(task.id.toString())}
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
                  <Button
                    variant={"default"}
                    className={twMerge(
                      "!flex !gap-2 !items-center !rounded-md !p-4",
                      "!text-gray-50 !border-gray-800 !border-2 !border-x-gray-800 hover:!text-cyan-500 active:!bg-black !bg-gray-900"
                    )}
                    onClick={() => handleOpen(columnId)}
                  >
                    <IoAddOutline color={"#ffffff"} />
                    Adicionar Tarefa
                  </Button>
                </div>
              )}
            </Droppable>
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
