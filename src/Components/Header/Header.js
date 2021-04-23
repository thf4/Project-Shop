import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="Lista">
          <li className="liheader">🛍</li>
          <li className="liheader">
            <Link to="/">HOME </Link>
          </li>
          <li className="liheader"> <Link to="/product">PRODUCTS </Link></li>
          <li className="liheader">
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li className="liheader"> SHOP 🛒</li>
          <li className="liheader">
            <input
              type="text"
              id="area-find"
              placeholder="search for anything"
            />
          </li>
          <li className="liheader">
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
