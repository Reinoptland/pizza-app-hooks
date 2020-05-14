import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function PizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  //   console.log("WHAT IS DISPATCH", dispatch);

  function handleSubmit(event) {
    event.preventDefault();

    // console.log(name, description);

    const action = {
      type: "ADD_PIZZA",
      payload: { name: name, description: description },
    };

    dispatch(action);

    setName("");
    setDescription("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}
