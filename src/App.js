import './App.css';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Homepage from "./homepage/homepage";
import Login from "./login/login";
import Signup from "./signup/signup";

function App() {
  return (
      <BrowserRouter>
    <div className="App">

            <Switch>
                <Route exact path={'/home'} component={Homepage}/>
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/'} component={Login} />
            </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;
