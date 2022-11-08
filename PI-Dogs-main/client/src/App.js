import "./App.css";
import React from "react";
import LandingPage from "./containers/landingPage";
import Home from "./containers/Home";
import NavBar from "./components/navBar";
import DogDetail from "./containers/DogDetail";
import FormContainer from "./containers/formContainer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <NavBar />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={FormContainer} />
        <Route exact path="/detail/:idRaza" component={DogDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
