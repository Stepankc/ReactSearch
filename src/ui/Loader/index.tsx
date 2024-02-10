import React from 'react';
import './index.scss';

const Loader: React.FC = () => {
  return (
    <>
      <div className="page-loader">
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
