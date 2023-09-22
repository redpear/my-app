
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS Frontend
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          
        </ul>

      </nav>

      <Routes>
        <Route path='/home' Component={Home} />&nbsp;
        <Route path='/department' Component={Department} />&nbsp;
        <Route path='/employee' Component={Employee} />
      </Routes>



    </div>
    </BrowserRouter>
  );
}

export default App;
