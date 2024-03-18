import { TaskProps } from "@/globals";

export type EditTaskModalProps = {
  onClose: () => void;
  task?: TaskProps;
  handleEditTask(taskId: string, updatedTaskData: TaskProps): void;
};
