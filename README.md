# MyGi

MyGi is the companion website for the MyGi health App (coming soon to iOS and Android) and a best endeavours listing of the Glycemic Index of various foods.

Tech stack

- [Gatsby](https://github.com/gatsbyjs/gatsby) - React based static site generator
- [Preact](https://github.com/developit/preact) - 3KB React Alternative
- [SCSS](http://sass-lang.com/) - site styles
- [Github](https://github.com) - hosting and version control
- [Jest](https://facebook.github.io/jest/) - unit tests (assertions and snapshot) and coverage reports
- [Enzyme](https://github.com/airbnb/enzyme) - more unit tests
- [Airbnb ESLint Config](https://github.com/airbnb/javascript) -  linting

This repo also contains a dataTool Single Page Application which can be run locally and is used for collating the various source data feeds to provide the master Glycemic Index data for the site

Tech stack

- [Create React App](https://github.com/facebookincubator/create-react-app) - React SPA starter (un-ejected)
- [REDUX](https://github.com/reactjs/redux) - state management
- [Styled Components](https://styled-components.com/) - for Component styling
- [Story Book](https://getstorybook.io/) - for sandboxed development and testing of components (game changer)
- [Jest](https://facebook.github.io/jest/) - unit tests (assertions and snapshot) and coverage reports
- [Enzyme](https://github.com/airbnb/enzyme) - more unit tests
- [NodeJS](https://nodejs.org/en/) & [Express](http://expressjs.com/) - gloriously simple JSON file based local persistence API

## Main Commands

| Scripts     | Description           |
| ------------- | --------------------- |
| develop       | this will kick off a local gatsby development [environment](http://localhost:8000) |
| data-tool     | this will start the dataTool in a local [environment](http://localhost:9000) which can be used to update the core GI Data values  |
| publish-data | this will publish any changes made in the data tool across to the main site data directory |
| deploy        | this will run 'build' processes and then publish the content of the 'public' directory to the live server via github pages      |

## Other Commands

| Scripts      | Description           |
| ------------- | --------------------- |
| test          | run the Jest test suite for the static site components  |
| coverage      | view test suite coverage for the static site components |
| extract       | run the data extraction processes, adding files for any that are missing (only really useful for when new data sources are added) |
| reset-to-average | override any manual GI values with the average value from all identified data sources |
| build         | runs the build in isolation without a deployment - useful for local testing of the build output (i.e. the 'public' directory)  |
| clean         | this will empty the existing 'public' directory and copy assets from '_public' in to it. Not that useful in isolation but good to know about - as if you want to keep static assets in the 'public' directory they will need to live in '_public'. This is run as part of the build process |
| generate      | see 'GI Index Page Generation' section below - this script generates the GI Index sub pages that are useful for SEO/no JS versions of the site. This is run as part of the build process   |

## GI Index Page Generation

The main filters on the Glycemic Index page (a combination of food category and low/medium/high GI types) each have a markdown file so as to be SEO/no JS friendly

These are generated based on the content of the

**data > glycemic-index-categories.json**

by running

```
$ npm run generate
```

## Deployments

Run the following command to deploy code to the github pages branch:

```
$ npm run deploy
```

This script will:

- empty the 'public' directory
- copy files from '_public' to 'public'
- generate our custom dynamic GI markdown pages
- run the gatsby build process
- publish to the gh-pages branch

If all looks good, then update the version number in package.json (semver stylee) and commit the updated public files. If not then rollback and we'll forget this ever happened

## The Data Tool

The Data Tool itself is probably more interesting than the static site that it is there to support. It is developed as a local only SPA with a simple NodeJS back end propped up by JSON files. Simple but kind of elegant. And all our data is forever version controlled thanks to the wonder of git.


## Data Tool Commands

Found in **dataTool** sub directory

Note: if you need a 'back-end' then be sure to call the below from the root directory first

```
$ npm run data-tool
```

| Scripts       | Description           |
| ------------- | --------------------- |
| start         | starts the data tool development [environment](http://localhost:3000/) |
| build         | builds the data tool. note: this is what is used as the front end for the main 'data-tool' command |
| storybook          | runs the main storybook [environment](http://localhost:9009/) for our site common components |
| storybook-examples | runs the examples storybook [environment](http://localhost:9010/) |
| test          | run test suite |
| coverage      | view test coverage |


## E2E Testing

E2E testing of the main app is facilitated through nightwatch.js and Selenium

Pre reqs for running locally:

- Java Development Kit (JDK) v7 or higher
- have the test server running '$ npm run test-server'

To run the full test suite run

```
$ npm run e2e
```

To run a single test run

```
$ npm run e2e e2e/tests/aboutPage.js
```

The above commands will run e2e tests against the current site in the 'public' folder (hence you need to run the test-server first)

[COMING SOON] You can also run the same e2e tests against the 'development' code line or the 'live' website itself by running

```
$ npm run e2e-dev
$ npm run e2e-live
```
