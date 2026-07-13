import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/searchSlice";

const SearchBar = () => {

  // Redux dispatch function
  const dispatch = useDispatch();

  // Get current search text from Redux store
  const searchText = useSelector((state) => state.search.searchText);

  return (
    <div className="w-full flex items-center gap-4">

      {/* Search input container */}
      <div className="flex-1 w-full max-w-md">

        <input
          type="text"
          value={searchText}
          placeholder="Search products..."

          // Update search text in Redux on every keystroke
          onChange={(e) => dispatch(setSearchText(e.target.value))}

          className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

    </div>
  );
};

export default SearchBar;