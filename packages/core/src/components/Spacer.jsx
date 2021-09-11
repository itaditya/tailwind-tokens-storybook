import { styled } from '@storybook/theming';

export const Spacer = styled.div(
  {
    display: 'flex',
  },
  ({ direction = 'x', gap = 0 }) => ({
    flexDirection: direction === 'y' ? 'column' : 'row',
    gap: `${gap}px`,
  }),
);
