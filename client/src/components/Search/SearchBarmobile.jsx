import React, { useState } from "react";
import searchIndex from "./SearchIndex";
import { useNavigate } from "react-router-dom";
const SearchBarmobile = () => {
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
        <form onSubmit={handleSearch} className='w-full max-w-xs mb-8 z-20'>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b border-white placeholder-white text-white text-base py-2 focus:outline-none"
            />
            <button type="submit" className="hidden ">
                Search
            </button>
        </form>
    )
}

export default SearchBarmobile;
