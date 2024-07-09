import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MemeList from './MemeList';
import MemeForm from './MemeForm';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>Meme Gallery</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Add Meme</Link>
            </li>
          </ul>
        </nav>
        <main>
        <Routes>
          <Route path="/" exact Component={MemeList} />
          <Route path="/upload" Component={MemeForm} /> 
        </Routes>
        </main>
        </header>
      </div>
    </Router>
  );
}

export default App;
