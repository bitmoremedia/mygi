import fs from 'fs-extra';
import sm from 'sitemap';

function pagesToSitemap(pages) {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      };
    }
  });
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined);
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'https://mygi.io',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  });
  console.log('Generating sitemap.xml');
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  );
}

exports.postBuild = (pages, callback) => {
  generateSiteMap(pages);
  callback();
}

exports.modifyWebpackConfig = (config, stage) => {
  if (stage !== `develop-html`) {
    config._config.resolve.alias = {
      react: `preact-compat`,
      'react-dom': `preact-compat`
    };
  }
  return config;
}
