import React from "react";
import { useSelector } from "react-redux";

function selectUser(reduxState) {
  //   console.log("STATE IN SELECTOR", reduxState);
  return reduxState.user;
}

function selectPizzas(reduxState) {
  return reduxState.pizzas;
}

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  console.log("PIZZAS:", pizzas);
  console.log("USER IN COMPONENT", user);
  return (
    <div>
      <h1>Hello {user.name}</h1>List
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
