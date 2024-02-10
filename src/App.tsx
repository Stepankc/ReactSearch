import React, { FC, useEffect, useState } from 'react';
import './assets/global.scss';
import API from './api/Api';
import CardList from './components/CardList';

const App: FC = () => {
  const [charactersData, setCharactersData] = useState<characterProps[]>([]);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const apiResponse = await API.getCharactersByName('sky');
        setCharactersData(apiResponse);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharactersData();
  }, []);

  return (
    <div>
      <CardList characters={charactersData} />
    </div>
  );
};

export const AppCore: FC = () => <App />;
