import './App.css';
import Chapter1 from './chapter1';
import Login from './login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Chapter1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
