import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

// * this is the convention
// * this function gets redux state as parameter and returns an object
// * its necessary to get values from the state inside this functional body
// ! Additional number of props CakeContainer will receive
// ! So we will also have access to numOfCakes from props.numOfCakes
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// * another convention
// ! will map dispatch of an action creator to a prop in CakeContainer
// ! So we will also have access to buyCake() from props.buyCake()
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
