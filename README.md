# MyGi

MyGi is the companion website for the MyGi health App (coming soon to iOS and Android) and a best endeavours listing of the Glycemic Index of various foods.

The site is built with the awesome React based static site generator [gatsby](https://github.com/gatsbyjs/gatsby) and hosted via github pages.

## Page Generation

The main filters on the Glycemic Index page (a combination of food category and low/medium/high GI types) each have a markdown file so as to be SEO/no JS friendly

These are generated based on the content of the

**data > glycemic-index-categories.json**

file through running:

```
$ npm run generate
```

## Deployments

Run the following command to deploy code to the github pages branch - the script will: 

- empty the 'public' directory
- copy files from '_public' to 'public'
- generate the GI markdown pages (mentioned above)
- run the gatsby build process
- publish to the gh-pages branch

```
$ npm run deploy
```

If all looks good, then update the version number in package.json (semver stylee) and commit the updated public files (for posterity more than anything)
