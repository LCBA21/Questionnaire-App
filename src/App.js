import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './components/Create';
import Slider from './components/Slider';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';
import { useState } from 'react';




function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
    <Router>
      <Slider />
      <Routes>
        <Route
          path='/'
          element={<Dashboard todoList={todoList} />}
        />
        <Route
          path='/create'
          element={<Create todoList={todoList} setTodoList={setTodoList} />}
        />
        <Route
          path='/question'
          element={<Questionnaire todoList={todoList} />}
        />
      </Routes>
    </Router>
  </div>

  );
}

export default App;
