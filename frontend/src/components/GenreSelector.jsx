import { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import React from 'react'
import "./HideScroll.css"

const GenreSelector = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const genres = [
        'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime',
        'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror',
        'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sports', 'Thriller',
        'War', 'Western'
        ];

        
    const handleToggleGenre = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
        setSearchQuery('');
        };

    const filteredGenres = genres.filter((genre) => 
        genre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
          ) {
            setIsDropdownOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

  return (
    <div className='w-32 ml-4'>
        <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenres={selectedGenres}
        handleToggleGenre={handleToggleGenre}
        />
        <button
            ref={buttonRef}
            onClick = {() => setIsDropdownOpen(!isDropdownOpen)}
            className='w-32 text-center p-2 bg-gray-200 rounded mb-2'
        >
            {selectedGenres.length > 0 ? "Genres" : "Genres"}
        </button>

        <div
            ref={dropdownRef}
            className="transition-all duration-300 ease-in-out overflow-hidden "
            style={{ maxHeight: isDropdownOpen ? '200px' : '0' }}
        >
            <div className='max-h-40 overflow-y-auto scrollbar-hide'>
                {filteredGenres.map((genre) => (
                    <button
                        key={genre}
                        onClick={() => handleToggleGenre(genre)}
                        className={`block w-32 text-center px-3 py-1 rounded ${
                          selectedGenres.includes(genre)
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-200 text-black'
                        } transition duration-300 ease-in-out`}
                    >
                        {genre}
                    </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default GenreSelector