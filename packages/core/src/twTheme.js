import resolveConfig from 'tailwindcss/resolveConfig';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

let theme = null;

export function getTwTheme() {
  return theme || {};
}

export function setTwTheme(twConfig) {
  const twTheme = resolveConfig(twConfig).theme;
  const flatTextColors = flattenColorPalette(twTheme.textColor);
  console.log(`flatTextColors`, flatTextColors); // aditodo remove this
  theme = twTheme;
}
