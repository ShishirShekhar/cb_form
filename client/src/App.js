import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={"/data/" + process.env.REACT_APP_USER + "/" + process.env.REACT_APP_PSWD}element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
