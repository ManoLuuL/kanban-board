import { TaskProps } from "@/globals";

export type Tag = {
  title: string;
  bg: string;
  text: string;
};

export type TaskModalProps = {
  onClose: () => void;
  handleAddTask(taskData: TaskProps): void;
  taskEdit?: {
    isEdit: boolean;
    task?: TaskProps;
    handleEditTask(taskId: string, updatedTaskData: TaskProps): void;
  };
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

export type TaskModalForm = {
  title: string;
  briefDescription: string;
  description: string;
  priority: string;
  deadline: number;
  endTask?: Date;
  tags: Tag[];
};
