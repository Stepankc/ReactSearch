import React, { FC, useEffect, useState } from 'react';
import './assets/global.scss';
import API from './api/Api';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import Loader from './ui/Loader';

const App: FC = () => {
  const [charactersData, setCharactersData] = useState<characterProps[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchCharacters = async (name: string) => {
    try {
      setLoading(true);
      const apiResponse = await API.getCharactersByName(name);
      setCharactersData(apiResponse);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={fetchCharacters} />
      {loading ? <Loader /> : <CardList characters={charactersData} />}
    </div>
  );
};

export const AppCore: FC = () => <App />;
