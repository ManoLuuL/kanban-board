export type TaskProps = {
  id: string;
  title: string;
  briefDescription: string;
  description: string;
  priority: string;
  endTask?: Date;
  deadline: number;
  tags: { title: string; bg: string; text: string }[];
};

type Column = {
  name: string;
  items: TaskProps[];
};

export type Columns = {
  [key: string]: Column;
};
