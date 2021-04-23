import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Carrosel from "./Pages/Carrosel/Carrosel";
import CardProduct from "./Components/CardProdutos/cards";
import Footer from "./Pages/Footer/Footer";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/aboutus">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Route>
        <Carrosel />
      </Route>
      <Route>
        <CardProduct />
      </Route>
      <Router>
        <Footer />
      </Router>
    </Router>
  );
};
export default App;
