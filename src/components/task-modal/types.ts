import { TASK_MODAL_SCHEMA } from ".";
import { TaskProps } from "@/globals";
import { z } from "zod";

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
  deadline: string;
  endTask?: Date;
  tags: Tag[];
};

export type TaskModalForm = z.infer<typeof TASK_MODAL_SCHEMA>;
