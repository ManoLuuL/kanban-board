import { Dispatch, SetStateAction } from "react";

import { Columns } from "@/globals";

export type SearchContextProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  filteredColumns: Columns;
  setFilteredColumns: Dispatch<SetStateAction<Columns>>;
};
