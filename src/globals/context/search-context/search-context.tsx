import { ReactNode, createContext, useState } from "react";

import { Columns } from "@/globals";
import { SearchContextProps } from "./types";

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined
);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredColumns, setFilteredColumns] = useState<Columns>({});

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, filteredColumns, setFilteredColumns }}
    >
      {children}
    </SearchContext.Provider>
  );
};
