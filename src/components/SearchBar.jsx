import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
    }
  };

  return (
    <div className="flex justify-center w-full my-4">
      <input
        type="text"
        className="p-2 mr-0 text-gray-800 bg-white border-t border-b border-l border-gray-200 rounded-l-lg"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="p-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
