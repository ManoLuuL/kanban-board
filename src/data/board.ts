import { Columns } from "../globals";
import { v4 as uuidv4 } from "uuid";

export const Board: Columns = {
  backlog: {
    name: "Backlog",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        briefDescription: "Descripiton short",
        description:
          "Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..Lorem ipsum dolor sit amet ..",
        priority: "medium",
        endTask: new Date(),
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        endTask: new Date(),
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Back-end", bg: "bg-green-500", text: "text-white" },
        ],
      },
    ],
  },
  pending: {
    name: "Pendente",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Back-end", bg: "bg-green-500", text: "text-white" },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
        ],
      },
    ],
  },
  todo: {
    name: "To Do",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
        ],
      },
    ],
  },
  doing: {
    name: "Doing",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "low",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
        ],
      },
      {
        id: uuidv4(),
        title: "Admin Panel Back-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "medium",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Back-end", bg: "bg-green-500", text: "text-white" },
        ],
      },
    ],
  },
  done: {
    name: "Done",
    items: [
      {
        id: uuidv4(),
        title: "Admin Panel Front-end",
        briefDescription: "Descripiton short",
        description: "Lorem ipsum dolor sit amet ..",
        priority: "high",
        deadline: 50,
        tags: [
          { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
          { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
        ],
      },
    ],
  },
};
