import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './pages/about';
import RandomComponent from './pages/random';
import SignIn from './pages/signIn';

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/signIn">Sign In</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>

      <div className="main">
        <Routes>
          <Route path="/" element={<RandomComponent />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignIn />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<div>Shop Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
