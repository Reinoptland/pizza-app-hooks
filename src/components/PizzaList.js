import React from "react";
import { useSelector } from "react-redux";

function selectUser(reduxState) {
  console.log("STATE IN SELECTOR", reduxState);
  return reduxState.user;
}

export default function PizzaList() {
  const user = useSelector(selectUser);
  console.log("USER IN COMPONENT", user);
  return (
    <div>
      <h1>Hello {user.name}</h1>List
    </div>
  );
}
