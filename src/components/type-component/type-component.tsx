import React from 'react';

interface TypeComponentProps {
  text: string
}

const TypeComponent = ({text}: TypeComponentProps) => {
  return (<h1>{text}</h1>)
};

export default TypeComponent;
