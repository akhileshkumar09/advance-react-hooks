import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Home';
import Counter from './components/useReducer/Counter';
import FIlteredList from './components/useMemoAndCallback/FIlteredList';
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/filter-list' element={<FIlteredList/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
