import React from 'react';

// eslint-disable-next-line
interface TypeComponentProps {
  text: string
}

const TypeComponent = ({text}: TypeComponentProps) => {
  return (<h1>{text}</h1>)
};

export default TypeComponent;
