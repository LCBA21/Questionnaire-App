import React from 'react';
import { Link } from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa'
import {FaClipboard} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'




const Slider = () => {
  return (
    <div>
        
        <div >
             <img  className='logo'  src='components/images/OfficialLogo.png'/>     
        </div>
      <div className='slider-container'>
         
        <Link to={`/`}>
          <div>
          <FaClipboard className='icons-slider'/>
          </div>

          <div>
          <button className='btn-slider'>Dashboard</button>
          </div>
        </Link>

        <Link to={`/question`}>
          <div>
          <FaQuestionCircle className='icons-slider'/>
          </div>

          <div>
          <button className='btn-slider'>Questionnaire</button>
          </div>
        </Link>

        <Link to={'/create'}>
          <div>
          <FaPlusSquare className='icons-slider'/>
          </div>

          <div>
          <button className='btn-slider'>Create</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Slider;
