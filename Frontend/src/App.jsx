import React from 'react';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';
import Course from './courses/Course';
import Signup from './components/Signup';
import Connect from './connect/Connect';

function App() {
  return (
    <>
      <div className="bg-white text-black dark:bg-cyan-400 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/connect" element={<Connect/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
