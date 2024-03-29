import { IoSearchOutline } from "react-icons/io5";
import { UserAccountMenu } from "./components";
import { twMerge } from "tailwind-merge";
import { useSearch } from "@/globals";

export const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className={twMerge(
        "h-full w-full z-20",
        "flex items-center justify-between",
        "px-6",
        "border-b border-gray-300 bg-gray-800"
      )}
    >
      <div className={twMerge("flex items-center gap-3")}>
        <span className="text-cyan-500 font-semibold md:text-lg text-base whitespace-nowrap">
          Kanban Board
        </span>
      </div>
      <div
        className={twMerge(
          "sm:w-80 md:w-1/2",
          "bg-gray-900 rounded-lg",
          "px-3 py-3 flex items-center gap-2"
        )}
      >
        <IoSearchOutline color={"#999"} />
        <input
          type="text"
          placeholder="Search"
          className={twMerge("w-full", "bg-gray-900 outline-none", "text-base")}
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="md:flex items-center gap-4">
        <UserAccountMenu />
      </div>
    </div>
  );
};
