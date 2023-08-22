import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import Dashboard from './components/Dashboard';
// import Create from './components/Create';
// import Slider from './components/Slider';
// import Questionnaire from './components/Questionnaire';
import Create from './components/Create';
import Slider from './components/Slider';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';
// './components/images/OfficialLogo.png'

function App() {
  return (
    <div className="App">
      <Router>
      <Slider/>

          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/question' element={<Questionnaire/>} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
