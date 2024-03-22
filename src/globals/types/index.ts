export type TaskProps = {
  id: string;
  title: string;
  briefDescription: string;
  description: string;
  priority: string;
  deadline: string;
  tags: { title: string; bg: string; text: string }[];
  responsible: string;
  endTask?: Date;
};

type Column = {
  name: string;
  color: string;
  items: TaskProps[];
};

export type Columns = {
  [key: string]: Column;
};
