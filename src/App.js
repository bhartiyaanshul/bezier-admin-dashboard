import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AdminDashboard } from './pages/AdminDashboard/AdminDashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AdminDashboard />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
