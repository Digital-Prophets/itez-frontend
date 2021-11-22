import { IconContext } from "react-icons";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center">
        <IconContext.Provider
          value={{
            style: { verticalAlign: "middle", paddingRight: "0.8em" },
            size: "35",
            color: "#2C3E50",
          }}
        >
          {" "}
          <GoSearch />
        </IconContext.Provider>
        <input
          type="text"
          name="name"
          placeholder="Search"
          className="w-2/3 border-b-2 bg-transparent placeholder-black-1 text-black-1 border-black-1  outline-none "
        />
      </div>
    </>
  );
};
export default SearchBar;
