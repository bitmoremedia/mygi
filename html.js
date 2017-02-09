import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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