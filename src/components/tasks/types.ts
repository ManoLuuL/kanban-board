type TagsParams = {
  title: string;
  bg: string;
  text: string;
};
type TaskProps = {
  id: string;
  title: string;
  description: string;
  priority: string;
  deadline: number;
  image?: string;
  alt?: string;
  tags: TagsParams[];
};

export type TasksProps = {
  task: TaskProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provided: any;
};
