import { setTwTheme } from './twTheme';

export function createConfig(twConfig) {
  setTwTheme(twConfig);

  return {
    title: 'Tailwind Theme',
  };
}
