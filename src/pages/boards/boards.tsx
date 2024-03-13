import { BoardColumns, BoardsColumnsProps } from "../../components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { BOARD_DEFAULT_COLUMNS } from "./consts";
import { useState } from "react";

export const Boards = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", content: "Task 1" },
    { id: "task-2", content: "Task 2" },
    { id: "task-3", content: "Task 3" },
    { id: "task-4", content: "Task 4" },
  ]);

  const [columns, setColumns] = useState({
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Doing",
      taskIds: ["task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-4"],
    },
  });

  const columnOrder = ["column-1", "column-2", "column-3"];

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setColumns({
        ...columns,
        [newColumn.id]: newColumn,
      });
    } else {
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const endTaskIds = Array.from(endColumn.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = {
        ...endColumn,
        taskIds: endTaskIds,
      };

      setColumns({
        ...columns,
        [newStartColumn.id]: newStartColumn,
        [newEndColumn.id]: newEndColumn,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex justify-center p-8">
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map(
            (taskId: string) => tasks.find((task) => task.id === taskId)!
          );
          return (
            <BoardColumns
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={columnTasks}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
};
