import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/v' element={<View/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
