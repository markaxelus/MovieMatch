import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import './HideScroll.css';

const GenreSelector = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isContainerOpen, setIsContainerOpen] = useState(false);

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

  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsContainerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ml-4 p-4 w-full md:w-3/4">
      <div className="mb-4">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenres={selectedGenres}
          handleToggleGenre={handleToggleGenre}
          width="w-full md:w-11/12 lg:w-3/4"
        />
      </div>

      <div className='ml-14'>
        <button
            ref={buttonRef}
            onClick={() => setIsContainerOpen(!isContainerOpen)}
            className="w-32 text-center p-2 bg-custom-1 text-white rounded mb-2"
        >
            {selectedGenres.length > 0 ? "Select Genres" : 'Select Genres'}
        </button>

        <div
            ref={containerRef}
            className={`w-4/12 transition-max-height duration-400 ease-in-out overflow-hidden`}
            style={{ maxHeight: isContainerOpen ? '500px' : '0' }}
        >
            <div className="border rounded p-4 mt-4"> 
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {filteredGenres.map((genre) => (
                  <button
                      key={genre}
                      onClick={() => handleToggleGenre(genre)}
                      className={`block w-full text-center px-3 py-2 rounded ${
                      selectedGenres.includes(genre)
                          ? 'bg-custom-1 text-white'
                          : 'bg-gray-200 text-black'
                      } transition duration-300 ease-in-out`}
                  >
                      {genre}
                  </button>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default GenreSelector;
