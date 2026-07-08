const SearchBar = () => {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;