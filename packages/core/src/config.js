import resolveConfig from 'tailwindcss/resolveConfig';
import { tailwindDecorator } from './';

export function createConfig(twConfig) {
  const twTheme = resolveConfig(twConfig).theme;

  return {
    title: 'Tokens',
    parameters: {
      twTheme,
    },
    decorators: [tailwindDecorator],
  };
}
