import React from 'react';
import { Link } from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa'
import {FaClipboard} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import logo from '../components/OfficialLogo2.png'




const Slider = () => {
  return (
    <div>


      <div className='slider-container'>
      <img className='resize-logo' src={logo}/>

         
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
