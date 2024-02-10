import React from 'react';
import CardItem from '../CardItem';
import './index.scss'

const CardList: React.FC<{ characters: characterProps[] }> = ({
  characters,
}) => {
  return (
    <div className="container">
      {characters.map((character, index) => (
        <CardItem {...character} key={index} />
      ))}
    </div>
  );
};

export default CardList;
