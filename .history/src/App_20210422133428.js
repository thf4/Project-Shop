/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="Lista">
          <li>🛍</li>
          <li> HOME </li>
           
            <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
           
          <li> ABOUT US</li>
          <li> SHOP 🛒</li>
          <li>
            <input
              type="text"
              id="area-find"
              placeholder="search for anything"
            />
          </li>
          <li>
            <button id="button" for="input">
              Search
            </button>
          </li>
        </ul>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
