import { styled } from '@storybook/theming';

export const Spacer = styled.div(
  {
    display: 'flex',
  },
  (props) => {
    const { direction = 'x', gap = 0, css = {} } = props;

    return {
      ...css,
      flexDirection: direction === 'y' ? 'column' : 'row',
      gap: `${gap}px`,
    };
  },
);
