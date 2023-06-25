import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import Faq from './pages/Faq';
import Assistance from './pages/Assistance';
import Tasks from './pages/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/assistance" element={<Assistance/>} />
      </Routes>
    </Router>
  );
}
export default App;
