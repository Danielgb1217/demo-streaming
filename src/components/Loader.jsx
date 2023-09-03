import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='centrarLoad'>
      <div className="lds-ripple">
        <div>
        </div>
        <div>
          <h1>Loading...</h1>
        </div>
      </div>
    </div>



  )
}

export default Loader