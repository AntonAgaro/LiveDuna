import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import './App.scss';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/registration" component={Registration}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;