import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

// import AddTutorial from "./components/AddTutorial";
import AddTutorial from './components/AddTutorial';
// import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div className="App">
      <nav class="navbar sticky-top navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <div className="navbar-nav">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          {/* <Route path="/" element={<TutorialsList/>} /> */}
          {/* <Route path="/tutorials" element={<TutorialsList/>} /> */}
          <Route path="/add" element={<AddTutorial/>} />
          {/* <Route path="/tutorials/:id" element={<Tutorial/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
