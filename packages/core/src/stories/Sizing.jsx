import React from 'react';
import { Sizes } from '../components/Sizes';
import { Spacer } from '../components/Spacer';
import { getTwTheme } from '../twTheme';

const Sizing = () => {
  const theme = getTwTheme();

  return (
    <section>
      <h1>Sizing</h1>
      <p>width, height</p>
      <Spacer direction="y" gap={50}>
        <Sizes title="Width" sizes={theme.width} property="w" children="Inner Content" />
        <Sizes title="Min Width" sizes={theme.minWidth} property="min-w" children="Inner Content" />
        <Sizes title="Max Width" sizes={theme.maxWidth} property="max-w" children="Inner Content" />
        {/* <Sizes title="Height" sizes={theme.height} property="h" children="Inner Content" /> */}
      </Spacer>
    </section>
  );
};

export { Sizing };
