import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <ul id="Lista">
          <li>🛍</li>
          <li> HOME </li>
          <li><button>PRODUCTS</button> </li>
          <li> ABOUT US</li>
          <li> SHOP 🛒</li>
          <li><input type="text" id="area-find" placeholder="search for anything"/></li>
          <li><button id="button" for="input" >Search</button></li>
        </ul>
  
      </header>
    </div>
  );
}

export default App;
