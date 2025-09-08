import React, { useState } from "react";
import searchIndex from "./SearchIndex";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  let navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    const match = searchIndex.find((page) =>
      page.keywords.toLowerCase().includes(query.toLowerCase())
    );

    if (match) {
      navigate(match.url); // redirect to page
    } else {
      alert("No results found.");
    }
  };
  return (
    <form onSubmit={handleSearch} className='hidden md:flex w-1/4 justify-start mb-2 md:mb-0 order-2 md:order-1'>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-2 py-1 bg-transparent border-b border-white placeholder-white text-white text-sm focus:outline-none"
      />
      <button type="submit" className="hidden ">
        Search
      </button>
    </form>
  )
}

export default SearchBar;
