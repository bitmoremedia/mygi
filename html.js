import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import packageJson from './package.json';

const BUILD_TIME = new Date().getTime();

const HTML = (props) => {
  const head = Helmet.rewind();

  // only include bundle.js if we are running in production mode
  // and noProductionJavascript is set as true
  let js = <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />;
  if (process.env.NODE_ENV === 'production' && config.noProductionJavascript ) {
    js = null;
  }

  // include link to the css file if we are running in production mode
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = <link rel="stylesheet" href={prefixLink(`/styles.css?t=${BUILD_TIME}`)} />;
  }

  // no js script
  const noJsScript = `
    <script>
      document.body.className = document.body.className.replace("no-js","");
    </script>
  `;

  return (
    <html lang="en" data-version={packageJson.version}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="MyGi - Glycemic Index" />
        <meta property="og:description" content="MyGi App companion website and home of the officially unofficial Glyemic Index Food List" />
        <meta property="og:image" content="https://mygi.io/mygi-app-icon.png" />
        <meta property="og:url" content="https://mygi.io" />
        <meta property="og:site_name" content="MyGi" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {css}
      </head>
      <body className="no-js">
        <div className="full-height" id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        {js}
        <div dangerouslySetInnerHTML={{ __html: noJsScript }} />
      </body>
    </html>
  );
};

export default HTML;
