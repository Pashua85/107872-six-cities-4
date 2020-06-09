import React from 'react';
import Main from '../main/main';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {propertiesAmount} = props;
  return <Main propertiesAmount={propertiesAmount} />;
};

export default App;
