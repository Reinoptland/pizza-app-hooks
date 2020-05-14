import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaList from "./components/PizzaList";
import PizzaForm from "./components/PizzaForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PizzaList />
        <PizzaForm />
      </header>
    </div>
  );
}

export default App;
