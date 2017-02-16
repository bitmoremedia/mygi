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

    a,
    a:hover,
    a:active {
      color: black;
    }

    /* rodal modal overrides */

    body.modal-is-open {
      overflow-y: hidden;
      padding-right: 15px;
    }

    .rodal-close {
      position: absolute;
      cursor: pointer;
      top: -10px;
      right: -10px;
      width: 25px;
      height: 25px;
      background-color: black;
      border-radius: 20px;
    }

    .rodal-close:before, .rodal-close:after {
      background: white;
      height: 3px;
      width: 20px;
      top: 12px;
      left: 2px;
    }

    .rodal-close:hover:before, .rodal-close:hover:after {
        background: white;
    }

  `
};
