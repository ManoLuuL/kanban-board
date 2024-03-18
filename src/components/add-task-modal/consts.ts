import { InitialValueDTO, Tag } from "./types";

import { v4 as uuidV4 } from "uuid";

export const DEFAULT_INPUT_STYLE =
  "w-full h-12 px-3 outline-none rounded-md bg-gray-700 text-gray-50 border border-slate-300 text-sm font-medium custom-placeholder-color";

export const INITIAL_DATA: InitialValueDTO = {
  id: uuidV4(),
  title: "",
  briefDescription: "",
  description: "",
  priority: "",
  deadline: 0,
  image: "",
  alt: "",
  endTask: undefined,
  tags: [] as Tag[],
};
