import { Dispatch, SetStateAction } from "react";

import { TaskT } from "@/globals";

export type Tag = {
  title: string;
  bg: string;
  text: string;
};

export type AddTaskModalProps = {
  onClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleAddTask: (taskData: TaskT) => void;
};
