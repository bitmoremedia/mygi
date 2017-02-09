# MyGi

MyGi is the companion website for the MyGi health App (coming soon to iOS and Android) and a best endeavours listing of the Glycemic Index of various foods.

The site is built with the awesome React based static site generator [gatsby](https://github.com/gatsbyjs/gatsby) and hosted on gihub.

## Page Generation

The main filters on the Glycemic Index page (a combination of food category and low/medium/high GI types) each have a markdown file so as to be SEO/no JS friendly

These are generated based on the content of the

**data > glycemic-index-categories.json**

file through running:

```
$ npm run generate
```

## Deployments

Run the following command to deploy your local version of the **public** code to the github pages branch

```
$ npm run deploy
```

If all looks good, then update the version number in package.json (semver stylee) and commit the updated public files (for posterity more than anything)
