import "./App.css";
import React from "react";
import LandingPage from "./containers/landingPage";
import Home from "./containers/Home";
import NavBar from "./components/navBar";
import DogDetail from "./containers/DogDetail";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idRaza" component={DogDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
