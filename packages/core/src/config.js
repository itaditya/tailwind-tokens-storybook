import { setTwTheme } from './twTheme';

export function createConfig(twConfig) {
  setTwTheme(twConfig);

  return {
    title: 'Tailwind Theme',
    parameters: {
      viewMode: 'story',
      previewTabs: {
        'storybook/docs/panel': { hidden: true },
      },
      docs: { disable: true },
    },
  };
}
