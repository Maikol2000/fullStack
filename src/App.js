// import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ButtonNew from "./container/Button.tsx";
import SignUp from "./container/SignUp.tsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ButtonNew />
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
