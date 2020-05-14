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

# Get the data from the redux store, and use it the components

- import useSelector (new)
- write a selector function (returns part of the state)
- You pass your selector into useSelector
- Display the data

# Implement behaviour

- Add a pizza
  - Add Pizza Form
  - useState, to store the state of the form
  - event listeners and handlers -> check console.log
  - create an action: object with type and payload
  - useDispatch to get the `dispatch` function
  - dispatch(action) -> check redux devtools (action tab)
  - handle the action in the reducer -> check redux devtools (diff tab)
  - celebration

# Liking

    - UI, button
    - event listener / handler
    - create action
    - dispatch action
    - handle action in reducer
    - useSelector and make selector function
    - display the favorites

# Strategy

- Go with the flow
- Check yourself
  - console.log
  - redux devtools
