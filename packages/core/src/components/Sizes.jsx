import React from 'react';
import { styled } from '@storybook/theming';
import { Spacer } from './Spacer';

const Heading = styled.h2({
  fontSize: '2rem',
});

const WidthContainer = styled.div({
  display: 'flex',
  backgroundColor: '#edf2f7',
  height: '30px',
});

const WidthItem = styled.div(
  {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#cbd5e0',
    fontSize: '0.75rem',
    color: 'rgb(0 0 0 / 40%)',
  },
  ({ css }) => css,
);

const InnerContent = styled.span({
  whiteSpace: 'nowrap',
});

export function Sizes({ title, property, prefix = '', sizes, css, children }) {
  function renderSize([name, size]) {
    const isNegative = name.startsWith('-');
    if (isNegative) {
      return null;
    }
    const customClass = `${prefix}${property}-${name}`;

    return (
      <Spacer key={name} direction="y" gap={3}>
        <WidthContainer>
          <WidthItem css={css} className={customClass}>
            <InnerContent>{children}</InnerContent>
          </WidthItem>
        </WidthContainer>
        <Spacer gap={10} css={{ color: '#718096', fontSize: '0.875rem' }}>
          <span>Class: {customClass}</span>
          <span>Value: {size}</span>
        </Spacer>
      </Spacer>
    );
  }

  return (
    <Spacer as="section" direction="y" gap={10} css={{ maxWidth: '500px' }}>
      <Heading>{title}</Heading>
      <Spacer direction="y" gap={20}>
        {Object.entries(sizes).map(renderSize)}
      </Spacer>
    </Spacer>
  );
}
