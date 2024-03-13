import { BoardsColumnsProps } from "../../components";
import { getRandomColors } from "../../utils";

export const BOARD_DEFAULT_COLUMNS: BoardsColumnsProps[] = [
  {
    title: "To Do",
    tasks: [
      {
        title: "Task 1",
        description: "Description of Task 1",
        priority: "High",
        deadline: 60, // 1 dia a partir de agora
        tags: [
          { title: "Test", ...getRandomColors() },
          { title: "Front", ...getRandomColors() },
        ],
        index: 1,
      },
    ],
  },
  {
    title: "In Progress",
    tasks: [],
  },
];
