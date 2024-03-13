type TagsParams = {
  title: string;
  bg: string;
  text: string;
};
type TaskProps = {
  index: number;
  title: string;
  description: string;
  priority: string;
  deadline: number;
  image?: string;
  alt?: string;
  tags: TagsParams[];
};

export type TasksProps = TaskProps;
