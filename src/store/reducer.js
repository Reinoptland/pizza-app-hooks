const initialState = {
  user: {
    name: "Helva",
    likes: [161235, 67283],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // mutation :( state.push(action.payload)?

      // console.log("STATE:", state, "ACTION:", action);
      const newPizza = {
        id: state.pizzas.length,
        name: action.payload.name,
        description: action.payload.description,
        bought: 0,
      };

      //   console.log("NEW PIZZA:", newPizza);
      return { ...state, pizzas: [...state.pizzas, newPizza] };
    }

    case "LIKE_PIZZA": {
      console.log("STATE:", state, "ACTION", action);

      return {
        ...state,
        user: { ...state.user, likes: [...state.user.likes, action.payload] },
      };
    }

    default: {
      return state;
    }
  }
}
