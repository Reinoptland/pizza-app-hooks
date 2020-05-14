# Data model

- user:
- pizzas:

```javascript
state = {
  user: {
    name: "Rein",
    likes: [2],
  },
  pizzas: [
    { id: 1, name: "Margarita", ingredients: [] },
    { id: 2, name: "Tonno", ingredients: [] },
    { id: 3, name: "Pineapple", ingredients: [] },
  ],
};
```

# Setup Redux

- Setup the redux store
  - `createStore()`
  - `reducer` with initialState
  - export your `store`
  - Use the Provider in index.js
  - done!
  - Test: Redux devtools

# Make Components

- Profile
- PizzaCard
- Add Pizza Form

# Get the data from the redux store, and use it the components

- import useSelector (new)
- write a selector function (returns part of the state)
- You pass your selector into useSelector
- Display the data

# Implement behaviour

- Liking

  - event listeners / handlers
  - dispatch an action

- Handle action in the reducer
  - write "case" in our reducer
  - Do reducer logic .. <--- hard part { ....state, something }

# Strategy

- Go with the flow
- Check yourself
  - console.log
  - redux devtools
