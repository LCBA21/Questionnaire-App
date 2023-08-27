import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useState } from 'react';


const Questionnaire = ({ todoList }) => {
  return (
    <div className='div-center'>
      <div className='div-container'>
        <p className='text-header-question'>Questionnaire</p>


          <div className=''>
        {todoList.map((task, index) => (
          <div className='List' key={index}>
            {task}
            <FaPen className='icons-create' />
            <FaTrash className='icons-create'  />
          </div>
        ))}
      </div>


        <button className='btn-submit'>Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
