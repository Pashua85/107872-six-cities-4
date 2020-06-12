import React from 'react';
import Main from '../main/main';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {places, placeAmount} = props;
  return <Main places={places} placeAmount={placeAmount} />;
};

export default App;
