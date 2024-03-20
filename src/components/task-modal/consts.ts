import { InitialValueDTO, Tag } from "./types";

import { v4 as uuidV4 } from "uuid";

export const TASK_MODAL_DEFAULT_INPUT_STYLE =
  "w-full h-12 px-3 outline-none rounded-md bg-gray-700 text-gray-50 border border-slate-300 text-sm font-medium";

export const TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE =
  "border-red-500 text-red-500";

export const TASK_MODAL_INITIAL_DATA: InitialValueDTO = {
  id: uuidV4(),
  title: "",
  briefDescription: "",
  description: "",
  priority: "",
  deadline: 0,
  endTask: undefined,
  tags: [] as Tag[],
};

export const TASK_MODAL_TAG_OPTION: Tag[] = [
  { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
  { title: "Back-end", bg: "bg-green-500", text: "text-white" },
  { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
  { title: "Erro", bg: "bg-red-500", text: "text-white" },
];
