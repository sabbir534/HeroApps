const SearchApp = ({ searchTerm, setSearchTerm }) => {
  return (
    <label className="flex items-center jusiify-between w-full border-1 border-[#737171] rounded-md p-2">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        required
        placeholder="Search Apps"
        className="bg-transparent ml-2 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </label>
  );
};
export default SearchApp;
