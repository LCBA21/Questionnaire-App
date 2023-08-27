import React, { useEffect } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Create = ({ todoList, setTodoList }) => {
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Load stored tasks from localStorage on component mount
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, [setTodoList]);

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

  const deleteTask = (index) => {
    const updatedTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedTodoList);
  };

  return (
    <div className='div-center'>
      <div>
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
        {todoList.map((task, index) => (
          <div className='List' key={index}>
            {task}
            <FaPen className='icons-create' />
            <FaTrash className='icons-create' onClick={() => deleteTask(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Create;
