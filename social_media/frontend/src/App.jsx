import { Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Reg from './Reg.jsx';
import Home from './home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Reg />} />
    </Routes>
  );
}

export default App;
