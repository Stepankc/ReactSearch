import React from 'react';
import './index.scss';

const CardItem: React.FC<characterProps> = (props) => {
  return (
    <>
      <div className="card">
        <div>
          <h4 className="title" title="item.title">
            {props.name}
          </h4>
          <div className="card-img">
            <img src={props.image} alt="" className="img" />
          </div>
        </div>
        <div className="card-info">
          <p>height: {props.height}</p>
          <p>mass: {props.mass}</p>
          <p>hair_color: {props.hair_color}</p>
          <p>birth_year: {props.birth_year}</p>
          <p>gender: {props.gender}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
