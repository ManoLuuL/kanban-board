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
  image: string;
  alt: string;
  endTask: Date | undefined;
  tags: Tag[];
};
