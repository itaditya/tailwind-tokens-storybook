import React from 'react';
import { Sizes } from '../components/Sizes';
import { Spacer } from '../components/Spacer';
import { getTwTheme } from '../twTheme';

const Spacing = () => {
  const theme = getTwTheme();

  return (
    <section>
      <h1>Spacing</h1>
      <p>Spacing like width, padding, margin</p>
      <Spacer direction="y" gap={50}>
        <Sizes title="Padding" sizes={theme.padding} property="pl" />
        <Sizes
          title="Margin"
          sizes={theme.margin}
          property="ml"
          css={{ padding: '0 5px' }}
          children="Item"
        />
      </Spacer>
    </section>
  );
};

export { Spacing };
