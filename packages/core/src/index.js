import React from 'react';

export const tailwindDecorator = (storyFn, { parameters }) => {
  console.log(`parameters`, parameters); // aditodo remove this
  return (
    <div>
      <h1>Aditya</h1>
      <p>kdg</p>
    </div>
  );
};
