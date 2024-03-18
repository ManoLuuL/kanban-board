import { TaskT } from "@/globals";

export type EditTaskModalProps = {
  onClose: () => void;
  task?: TaskT;
  handleEditTask: (taskId: string, updatedTaskData: TaskT) => void;
};
