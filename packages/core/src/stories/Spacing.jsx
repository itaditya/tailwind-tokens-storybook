import React from 'react';
import { Sizes } from '../components/Sizes';
import { getTwTheme } from '../twTheme';

const Spacing = () => {
  const theme = getTwTheme();
  const tokens = theme.width;

  return (
    <section>
      <h3>Width</h3>
      <p>All Widths</p>
      <Sizes title="Width" sizes={tokens} property="w" />
    </section>
  );
};

export { Spacing };
