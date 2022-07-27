// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Feed/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/home" element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
