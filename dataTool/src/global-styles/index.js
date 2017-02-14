/* eslint-disable */
import { injectGlobal } from 'styled-components';
import normalizeCss from 'normalize.css';
import rodalCSS from 'rodal/lib/rodal.css';

export default () => {
  injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');
    body {
      font-family: "Space Mono", monospace, sans-serif;
      font-variant-ligatures: no-common-ligatures;
    }
  `
};
