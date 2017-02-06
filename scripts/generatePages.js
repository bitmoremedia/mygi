const fs = require('fs-extra');

console.log('Generate Pages START');

// GENERATE GLYCEMIC INDEX PAGES

const KEYWORDS = ["gi", "GI", "Glycemic Index", "glycemic index", "GlycemicIndex", "glycemicindex"];

function generateKeyWordsFromCategory(keyWordPrefixes, category){
  let keywords = [];
  keyWordPrefixes.forEach((prefix)=> {
    keywords.push(`${prefix} of ${category}`);
  });
  return keywords.join();
};

function generateMdTemplate(category){
  let template =
`---
type: GiDataTablePage
title: GI
description: Glycemic Index
keywords: ${KEYWORDS}
---`;
  if (category) {
    const dynamicKeywords = generateKeyWordsFromCategory(KEYWORDS,category);
    template =
`---
type: GiDataTablePage
title: GI of ${category}
description: Glycemic Index of ${category}
keywords: ${dynamicKeywords}
---`;
  }
  return template;
}

const glycemicIndexCategories = fs.readJsonSync('./data/glycemic-index-categories.json');
const targetDirectory = 'glycemic-index';
let pageCount = 0;

// empty/create target directory
fs.emptyDirSync(`./pages/${targetDirectory}`);

// add root index page
fs.outputFileSync(`./pages/${targetDirectory}/index.md`, generateMdTemplate());
pageCount ++;

// add category sub pages
glycemicIndexCategories.forEach((item)=>{
  fs.outputFileSync(`./pages/${targetDirectory}/${item.page}/index.md`, generateMdTemplate(item.category));
  pageCount ++;
});

// add low/medium/high sub pages for each category
['low-gi', 'medium-gi', 'high-gi'].forEach((giType) => {
  fs.outputFileSync(`./pages/${targetDirectory}/${giType}/index.md`, generateMdTemplate());
  pageCount ++;
  glycemicIndexCategories.forEach((item)=>{
    fs.outputFileSync(`./pages/${targetDirectory}/${giType}/${item.page}/index.md`, generateMdTemplate(item.category));
    pageCount ++;
  });
});

console.log(`${pageCount} pages created`);
console.log('Generate Pages END');
