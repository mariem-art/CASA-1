import React from 'react';
import Image from '../Img-1.png';
import '../CSS.Components/Img.css';

function Img() {
  return (
    <div className='section-1'>
      <div className="Section-image">
        <img src={Image} className="App-Image" alt="Image" />
      </div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Img;