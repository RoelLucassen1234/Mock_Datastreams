import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Register from "./components/register";
import Login from "./components/login";
import Admin from "./components/admin";
import Home from "./components/home";
import Data from "./components/data";
import Profile from "./components/profile";
import SetPassword from "./components/setpassword";
import Verify from "./components/verify";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Register}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/data" component={Data}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/setpassword" component={SetPassword}></Route>
          <Route exact path="/verify" component={Verify}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
