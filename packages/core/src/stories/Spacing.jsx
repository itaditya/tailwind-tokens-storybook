import React from 'react';
import { Sizes } from '../components/Sizes';
import { Spacer } from '../components/Spacer';
import { getTwTheme } from '../twTheme';

const Spacing = () => {
  const theme = getTwTheme();
  const tokens = theme.width;

  return (
    <section>
      <h1>Spacing</h1>
      <p>All Widths</p>
      <Spacer direction="y" gap={50}>
        <Sizes title="Width" sizes={tokens} property="w" />
        <Sizes title="Width" sizes={tokens} property="w" />
      </Spacer>
    </section>
  );
};

export { Spacing };
