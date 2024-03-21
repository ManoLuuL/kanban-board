import { Dispatch, SetStateAction } from "react";

import { Columns } from "@/globals";
import { DropResult } from "react-beautiful-dnd";

export type DragEndParams = {
  result: DropResult;
  columns: Columns;
  setColumns: Dispatch<SetStateAction<Columns>>;
};
