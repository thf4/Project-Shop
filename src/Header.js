/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Header.css";

function  Header() {
  return (
    <div className="App">
      <header className="App-header">
        <ul id="Lista">
          <li>🛍</li>
          <li> HOME </li>
          <li> PRODUCTS </li>
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
            <form>
            <button id="button" for="input">
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
