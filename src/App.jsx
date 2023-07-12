import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  const [circles, setCircles] = useState([{ id: 1, counter: 0, color: 'yellow' }]);


  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Task1 circles={circles} setCircles={setCircles} />} />
      <Route path="/task2" element={<Task2 circles={circles} />} />
      <Route path="/task3" element={<Task3 />} />
      <Route path="/task4" element={<Task4 />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
 
  )
}

export default App


