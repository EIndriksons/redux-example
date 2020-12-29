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
