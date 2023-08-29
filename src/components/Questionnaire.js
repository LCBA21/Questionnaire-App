import React, { useState, useEffect } from "react";

const Questionnaire = ({ todoList }) => {
  const [radioValues, setRadioValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedResponses = localStorage.getItem('questionnaireResponses');
    if (storedResponses) {
      const parsedResponses = JSON.parse(storedResponses);
      const responseValues = {};
      parsedResponses.forEach(response => {
        if (response.value) {
          responseValues[response.value] = (responseValues[response.value] || 0) + 1;
        }
      });
      setRadioValues(responseValues);
    }
  }, []);

  const handleRadioChange = (index, value) => {
    setRadioValues((prevValues) => ({
      ...prevValues,
      [index]: value,
    }));
  };

  const handleSubmit = () => {
    const radioWithQuestions = todoList.map((task, index) => ({
      question: task,
      value: radioValues[index] || null,
    }));

    localStorage.setItem('questionnaireResponses', JSON.stringify(radioWithQuestions));
    setSubmitted(true);
  };

  return (
    <div className='div-center'>
      <div className='div-container'>
        <p className='text-header-question'>Questionnaire</p>

        <div className=''>
          {todoList.map((task, index) => (
            <div className='List' key={index}>
              {task}

              <div className='radio-inline'>
                <label>
                  <input
                    type='radio'
                    name={`optradio-${index}`}
                    checked={radioValues[index] === 'agree'}
                    onChange={() => handleRadioChange(index, 'agree')}
                  />
                  Agree
                </label>

                <label>
                  <input
                    type='radio'
                    name={`optradio-${index}`}
                    checked={radioValues[index] === 'neutral'}
                    onChange={() => handleRadioChange(index, 'neutral')}
                  />
                  Neutral
                </label>

                <label>
                  <input
                    type='radio'
                    name={`optradio-${index}`}
                    checked={radioValues[index] === 'disagree'}
                    onChange={() => handleRadioChange(index, 'disagree')}
                  />
                  Disagree
                </label>
              </div>
            </div>
          ))}
        </div>

        <button className='btn-submit' onClick={handleSubmit}>
          Submit
        </button>

        {submitted && (
          <div className='responses-count'>
            <h3>Number of Questions: {todoList.length}</h3>
            <h3>Responses Count:</h3>
            <ul>
              <li>Agree: {radioValues['agree'] || 0}</li>
              <li>Neutral: {radioValues['neutral'] || 0}</li>
              <li>Disagree: {radioValues['disagree'] || 0}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
