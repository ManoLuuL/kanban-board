import { TaskT } from "@/globals";

export type Tag = {
  title: string;
  bg: string;
  text: string;
};

export type AddTaskModalProps = {
  onClose: () => void;
  handleAddTask: (taskData: TaskT) => void;
};
