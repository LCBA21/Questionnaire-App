import React from 'react';



const Questionnaire = ({ todoList }) => {
  return (
    <div className='div-center'>
      <div className='div-container'>
        <p className='text-header-question'>Questionnaire</p>


    <div>
        {todoList.map((task, index) => (
          <div className='List' key={index}>
            {task}
            <div className='radio-inline'>

            <label >
            <input type="radio" name="optradio" />Agree
            </label>
          
            <label >
            <input type="radio" name="optradio"/>Neutral
            </label>
            
            <label >
            <input type="radio" name="optradio"/>Disagree
            </label>
            </div>
          </div>
        ))}
      </div>


        <button className='btn-submit'>Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
