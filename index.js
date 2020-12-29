const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// *** Three core concepts:
// * STORE - holds the state of your application
// * ACTION - describes what happened ex. BUY_CAKE
// * REDUCER - ties the store and actions together and tells what to do or change

// *** Three principles:
// * 1) Maintain our application state in single object managed by Redux store
// * 2) Only way to change the state is to emit an action
// * 3) Write pure reducers - reducer should always return newState from (prevState, action)

// * App -(dispatch)-> Action -> Reducer -> Store -(subscribe)-> App... and so on

// ! ACTION - an object with "type" property
// ! this is also an action creator function which returns an action

const buyCake = () => {
  return {
    type: 'BUY_CAKE',
    info: 'First redux action',
  };
};

const buyIceCream = () => {
  return {
    type: 'BUY_ICECREAM',
    info: 'First redux action',
  };
};

// ! REDUCER - pure function that accepts state and action as arguments and returns next state
// ! make sure to always recreate state inside reducer as we return the whole state

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case 'BUY_CAKE':
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case 'BUY_ICECREAM':
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// * we can also have more reducers
// * but then we have to combine them
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});

// ! STORE
// * we create a store by passing in the reducer
const store = createStore(rootReducer);

// * clg the initial state
console.log('Initial state', store.getState());

// * we subscribe to updates AND save the return function to unsubscribe at the end
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

// * dispatch actions
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// * unsubscribe
unsubscribe();
