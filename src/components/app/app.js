import React from 'react';
import Main from '../main/main';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesAmount} = props;
  return <Main placesAmount={placesAmount} />;
};

export default App;
