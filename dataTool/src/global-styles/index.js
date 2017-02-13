import { injectGlobal } from 'styled-components';
import normalizeCss from './normalize';

export default () => {
  // eslint-disable-next-line
  injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');
    body {
      font-family: "Space Mono", monospace, sans-serif;
      font-variant-ligatures: no-common-ligatures;
    }
    ${normalizeCss}
  `
};
