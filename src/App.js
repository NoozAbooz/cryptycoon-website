import React from 'react';
import Navbar from './components/Navbar';
import Body from './components/Body';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import IDK1 from './routes/IDK1';
import IDK2 from './routes/IDK2';
import Home from './routes/Home';


function App() {
  return (
    <div >
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/IDK1' element={<IDK1/>} />
        <Route path='/IDK2' element={<IDK2/>} />
      </Routes>
      </div>

      </div>
  );
}

export default App;
