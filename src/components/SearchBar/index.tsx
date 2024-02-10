import React, { FC, useState } from 'react';
import './index.scss';

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [characterName, setCharacterName] = useState('');

  const handleSearch = () => {
    onSearch(characterName);
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          id="characterName"
          placeholder="Luke Skywalker"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <button onClick={handleSearch}>Искать</button>
      </div>
    </div>
  );
};

export default SearchBar;
