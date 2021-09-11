import React from 'react';
import { getTwTheme } from '../twTheme';

export const Colors = () => {
  const theme = getTwTheme();
  console.log(`theme`, theme); // aditodo remove this

  return (
    <section>
      <h3>Text Colors</h3>
      <p>all text Colors</p>
    </section>
  );
};
