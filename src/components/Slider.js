import React from 'react';
import { Link } from 'react-router-dom';
// import OfficialLogo from '/components/images/OfficialLogo.png';

const Slider = () => {
  return (
    <div>
        
        <div >
             <img  className='logo'  src='components/images/OfficialLogo.png'/>     
        </div>
      <div className='slider-container'>
        <Link to={`/`}>
          <button>Dashboard</button>
        </Link>

        <Link to={`/question`}>
          <button>Questionnaire</button>
        </Link>

        <Link to={'/create'}>
          <button>Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Slider;
