import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const places = [
  `Beautiful luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
  `Private room`
];

ReactDOM.render(<App places={places} placeAmount={321} />, document.querySelector(`#root`));
