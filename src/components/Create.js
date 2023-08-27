import React, { useState, useEffect } from 'react';
import {FaPen} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'




const Create = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Load stored tasks from localStorage on component mount
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    // Save updated tasks to localStorage whenever todoList changes
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
    setNewTask(''); // Clear the input field
  };

  return (
    <div className='div-center'>
      <div >
      <p className='text-header-question'>Create a Questionnaire</p>
      </div>

      <div>
        <input className='input-question' value={newTask} onChange={handleChange} />
      </div>

      <div className='div-btn-add'>
        <button className='btn-Add' onClick={addTask}>Add</button>
      </div>

      <div className='div-header-list'>
      <p className='text-header-list'>List of Questions</p>
      </div>


      <div className=''>
        {
        
        todoList.map((task, index) => {
          return <div className='List' key={index}>{task} 
          <FaPen
          className='icons-create'

          />
          
          <FaTrash
          className='icons-create'

          />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Create;
