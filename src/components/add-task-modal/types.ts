import { TaskProps } from "@/globals";

export type Tag = {
  title: string;
  bg: string;
  text: string;
};

export type AddTaskModalProps = {
  onClose: () => void;
  handleAddTask: (taskData: TaskProps) => void;
};

export type InitialValueDTO = {
  id: string;
  title: string;
  briefDescription: string;
  description: string;
  priority: string;
  deadline: number;
  endTask?: Date;
  tags: Tag[];
};

export type AddTaskModalForm = {
  title: string;
  briefDescription: string;
  description: string;
  priority: string;
  deadline: number;
  endTask?: Date;
  tags?: Tag[];
};
