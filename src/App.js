import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import exercisesList from "./components/exercisesList";
import editExercise from "./components/editExercise";
import createExercise from "./components/createExercise";
import createUser from "./components/createUser";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <br />
        <Route path="/" exact component={exercisesList} />
        <Route path="/edit/:id" component={editExercise} />
        <Route path="/create" component={createExercise} />
        <Route path="/user" component={createUser} />
      </div>
    </Router>
  );
}

export default App;
