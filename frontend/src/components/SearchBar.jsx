import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, selectedGenres, handleToggleGenre, width }) => {
  return (
    <div className={`border rounded-full p-2 mb-4 ${width}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
        className="ml-12 pt-3 w-11/12 p-2 outline-none mb-2"
      />
      <div className="flex flex-wrap ml-12">
        {selectedGenres.map((genre) => (
          <div
            key={genre}
            className="flex items-center space-x-2 bg-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
          >
            <span>{genre}</span>
            <button
              onClick={() => handleToggleGenre(genre)}
              className="text-red-500 font-bold hover:text-red-700"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
    
export default SearchBar;
