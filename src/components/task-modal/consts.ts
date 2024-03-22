import { InitialValueDTO, Tag } from "./types";

import { v4 as uuidV4 } from "uuid";
import { z } from "zod";

export const TASK_MODAL_DEFAULT_INPUT_STYLE =
  "w-full h-12 px-3 outline-none rounded-md bg-[#111827] text-gray-50 border border-[#424b57] text-sm font-medium";

export const TASK_MODAL_DEFAULT_LABEL_STYLE = "mb-2 space-y-1";

export const TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE =
  "border-red-500 text-red-500";

export const TASK_MODAL_INITIAL_DATA: InitialValueDTO = {
  id: uuidV4(),
  title: "",
  briefDescription: "",
  description: "",
  priority: "",
  deadline: "",
  endTask: undefined,
  tags: [] as Tag[],
};

export const TASK_MODAL_TAG_OPTION: Tag[] = [
  { title: "Front-end", bg: "bg-blue-500", text: "text-white" },
  { title: "Back-end", bg: "bg-green-500", text: "text-white" },
  { title: "Teste", bg: "bg-yellow-500", text: "text-white" },
  { title: "Erro", bg: "bg-red-500", text: "text-white" },
];

export const TASK_MODAL_SCHEMA = z.object({
  title: z.string().min(5, {
    message: "Mínimo de 5 caracteres.",
  }),
  briefDescription: z
    .string()
    .min(5, {
      message: "Mínimo de 5 caracteres.",
    })
    .max(50, {
      message: "Máximo de 50 caracteres.",
    }),
  description: z
    .string()
    .min(10, {
      message: "Mínimo de 10 caracteres.",
    })
    .max(260, {
      message: "Máximo de caracteres atingido.",
    }),
  priority: z.string().min(1, {
    message: "Mínimo de 1 caracteres.",
  }),
  endTask: z.date().optional(),
  deadline: z.string(),
  tags: z
    .array(
      z.object({
        title: z.string(),
        bg: z.string(),
        text: z.string(),
      })
    )
    .min(1, {
      message: "Mínimo de 1 Tag.",
    })
    .max(3, {
      message: "Máximo de Tags atingido.",
    }),
});
