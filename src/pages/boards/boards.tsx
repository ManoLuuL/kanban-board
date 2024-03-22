import {
  Button,
  ConfirmDeleteModal,
  TaskCard,
  TaskModal,
  useToast,
} from "../../components";
import {
  Columns,
  TOAST_TIME_DURATION,
  TaskProps,
  onDragEnd,
  useSearch,
} from "../../globals";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useEffect, useState } from "react";

import { IoAddOutline } from "react-icons/io5";
import { TaskData } from "@/data";
import { twMerge } from "tailwind-merge";

export const Boards = () => {
  const { searchTerm, filteredColumns, setFilteredColumns } = useSearch();
  const { toast } = useToast();

  const [columns, setColumns] = useState<Columns>(TaskData);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState<string | undefined>();
  const [selectedColumn, setSelectedColumn] = useState("");
  const [task, setTask] = useState<TaskProps>();

  const handleOnDragEnd = (result: DropResult) =>
    onDragEnd({ result, columns: filteredColumns, setColumns });

  const handleOpen = (columnId: string) => {
    setSelectedColumn(columnId);
    setIsOpen(true);
  };

  const handleAdd = (taskData: TaskProps) => {
    const newBoard = { ...filteredColumns };
    newBoard[selectedColumn].items.push(taskData);
  };

  const handleOpenEdit = (columnId: string, taskId: string) => {
    setSelectedColumn(columnId);
    setIsEdit(true);

    const editedTask = filteredColumns[columnId].items.find(
      (task) => task.id === taskId
    );

    if (editedTask) {
      setTask(editedTask);
    }
  };

  const handleEditTask = (taskId: string, updatedTaskData: TaskProps) => {
    const updatedColumns = { ...filteredColumns };
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

  const handleClose = () => {
    setIsOpen(false);
    setIsEdit(false);
    setTask(undefined);
  };

  const handleDelete = (taskId: string) => {
    setIsDelete(taskId);
  };

  const handleConfirmDelete = (taskId: string) => {
    const updatedColumns = { ...filteredColumns };
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
    setIsDelete(undefined);
    toast({
      title: `Deletada a Tarefa: ${taskTitle}`,
      description: "Todos os dados removidos com sucesso.",
      duration: TOAST_TIME_DURATION,
    });
  };

  useEffect(() => {
    const newFilteredColumns: Columns = {};
    Object.entries(columns).forEach(([columnId, column]) => {
      newFilteredColumns[columnId] = {
        ...column,
        items: column.items.filter((task) =>
          task.title.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      };
    });
    setFilteredColumns(newFilteredColumns);
  }, [searchTerm, columns, setFilteredColumns]);

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className="flex flex-grow justify-between p-5 md:gap-6 sm:gap-10 rounded-md overflow-scroll">
          {Object.entries(filteredColumns).map(([columnId, column]) => (
            <Droppable droppableId={columnId} key={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex flex-col flex-grow w-[21rem] rounded-md"
                >
                  <div
                    className={twMerge(
                      "text-lg rounded-xl p-2 mb-4 font-bold flex items-center justify-center",
                      column.color
                    )}
                  >
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
                              onRemove={() => handleDelete(task.id.toString())}
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
          onHide={handleClose}
          handleAddTask={handleAdd}
          taskEdit={{
            isEdit,
            task: task,
            handleEditTask,
          }}
        />
      )}

      {isDelete && (
        <ConfirmDeleteModal
          onHide={() => setIsDelete(undefined)}
          onConfirm={() => handleConfirmDelete(isDelete)}
        />
      )}
    </>
  );
};
