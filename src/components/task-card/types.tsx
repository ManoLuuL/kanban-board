/* eslint-disable @typescript-eslint/no-explicit-any */

import { TaskProps } from "../../globals";

export type TaskCardProps = {
  task: TaskProps;
  provided: any;
  onRemove(): void;
  onEdit(): void;
};
