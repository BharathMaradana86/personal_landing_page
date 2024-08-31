import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="center">
        <div className='ring'></div>
        <span style={{color:'white'}} className='span'>Loading...</span>
    </div>
  );
};

export default Preloader;
