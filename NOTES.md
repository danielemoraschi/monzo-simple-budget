Reducers
```
// state argument is *not* root state object
function counter(state = 0, action) {
  // ...
}

// state argument is *not* root state object
function todos(state = [], action) {
  // ...
}

// finally, root reducer delegates handling parts of its state
function app(state = {}, action) {
  return {
    counter: counter(state.counter, action), // only part of the state is passed
    todos: todos(state.todos, action), // only part of the state is passed
  };
}

// create with no initial state—useful for initialization
let store = createStore(app);
console.log(store.getState()); // { counter: 0, todos: [] }

// ... or create with some initial state—useful for hydration
store = createStore(app, { counter: 10 });
console.log(store.getState()); // { counter: 10, todos: [] }
```