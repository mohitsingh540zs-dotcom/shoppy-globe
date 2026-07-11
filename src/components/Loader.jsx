const Loader = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
      <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

      <h2 className="text-xl font-semibold text-gray-700">
        Loading...
      </h2>

      <p className="text-gray-500">
        Please wait while we fetch the products.
      </p>
    </div>
  );
};

export default Loader;