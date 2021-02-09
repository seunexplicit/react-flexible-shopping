
import './App.css';
import './Style/Main.Style.css';
import TopHeader from './components/TopHeader.Component';
import Account from './components/Account.Component';
import ProductsComponent from './components/Products.Component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="body">
      <TopHeader></TopHeader>
      <div>
        <Router>
          <Switch>
            <Route path="/market">
              <ProductsComponent></ProductsComponent>
            </Route>
            <Route path="/account">
              <Account></Account>
            </Route>
            <Route path="/">
              <div id="intent">
                 <ul className="inline no-bullet flex-row center-display wrap">
                  <li className="flex-row center-display">
                    <Link className="bold-link" to="/market">
                      Buy Product
                    </Link>
                  </li>
                  <li className="flex-row center-display">
                    <Link className="bold-link" to="/account">
                      Sell Product
                    </Link>
                  </li>
                </ul>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
