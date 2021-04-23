import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="Lista">
          <li>🛍</li>
          <li>
            <Link to="/">HOME </Link>
          </li>
          <li> PRODUCTS </li>
          <li>
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li> SHOP 🛒</li>
          <li>
            <input
              type="text"
              id="area-find"
              placeholder="search for anything"
            />
          </li>
          <li>
            <form>
              <button id="button" >
                Search
              </button>
            </form>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
