import React from "react";
import { useSelector, useDispatch } from "react-redux";

function selectUser(reduxState) {
  //   console.log("STATE IN SELECTOR", reduxState);
  return reduxState.user;
}

function selectPizzas(reduxState) {
  return [...reduxState.pizzas].sort((pizzaA, pizzaB) => {
    return pizzaB.bought - pizzaA.bought;
  });
}

function selectLikedPizzas(reduxState) {
  return reduxState.user.likes.map((pizzaId) => {
    return reduxState.pizzas.find((pizza) => pizza.id === pizzaId).name;
  });
}

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  const likedPizzaNames = useSelector(selectLikedPizzas);
  const dispatch = useDispatch();

  //   console.log("PIZZAS:", pizzas);
  //   console.log("USER IN COMPONENT", user);
  function like(pizzaId) {
    console.log("I like dis", pizzaId);
    const action = { type: "LIKE_PIZZA", payload: pizzaId };
    dispatch(action);
  }
  return (
    <div>
      <h1>Hello {user.name}</h1>List
      <h3>
        Liked pizzas:{" "}
        {likedPizzaNames.map((name) => (
          <strong>{name}</strong>
        ))}
      </h3>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <h3>
                {pizza.name} ({pizza.bought})
              </h3>
              <p>{pizza.description}</p>
              <button onClick={() => like(pizza.id)}>❤️</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
