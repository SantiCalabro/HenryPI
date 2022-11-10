import "./App.css";
import React from "react";
import LandingPage from "./containers/landingPage";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import DogDetail from "./containers/DogDetail";
import FormContainer from "./containers/formContainer";
import ErrorPage from "./containers/Error";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={FormContainer} />
          <Route exact path="/detail/:idRaza" component={DogDetail} />
          <Route path={"*"} component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
