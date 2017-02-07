const fs = require('fs-extra');

console.log('Generate Pages START');

// GENERATE GLYCEMIC INDEX PAGES

const KEYWORDS = ["gi", "GI", "Glycemic Index", "glycemic index", "GlycemicIndex", "glycemicindex"];
const giTypeDescriptonMap = {
  'low-gi' : {
    short: 'Low GI',
    long: 'Low Glycemic Index'
  },
  'medium-gi' : {
    short: 'Medium GI',
    long: 'Medium Glycemic Index'
  },
  'high-gi' : {
    short: 'High GI',
    long: 'High Glycemic Index'
  },
};

function generateKeyWords(keyWordPrefixes, category, giType){
  let keywords = [...KEYWORDS];
  if (category){
    keyWordPrefixes.forEach((prefix)=> {
      keywords.push(`${prefix} of ${category}`);
    });
    keywords.push(`${category}`);
  }
  if (giType){
    let foodType = category || 'Foods';
    keywords.push(`${giTypeDescriptonMap[giType].short} ${foodType}`);
    keywords.push(`${giTypeDescriptonMap[giType].long} ${foodType}`);
  }
  return keywords.join(', ');
};

function generateMdTemplate(category, giType){
  let giTypeShortDescr = (giType) ? giTypeDescriptonMap[giType].short : '';
  let giTypeLongDescr = (giType) ? giTypeDescriptonMap[giType].long : '';

  let title = (giType) ? `${giTypeShortDescr} Foods` : 'Glycemic Index';
  let description = (giType) ? `Glycemic Index of ${giTypeLongDescr} Foods` : 'Glycemic Index Food List';
  let keywords = generateKeyWords(KEYWORDS,category, giType);

  if (category) {
    title = (giType) ? `${giTypeShortDescr} ${category}` : `GI of ${category}`;
    description = (giType) ? `${giTypeLongDescr} ${category}` : `Glycemic Index of ${category}`;
  }

  return `---
type: GiDataTablePage
title: ${title}
description: ${description}
keywords: ${keywords}
---`;
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
  fs.outputFileSync(`./pages/${targetDirectory}/${giType}/index.md`, generateMdTemplate(null, giType));
  pageCount ++;
  glycemicIndexCategories.forEach((item)=>{
    fs.outputFileSync(`./pages/${targetDirectory}/${giType}/${item.page}/index.md`, generateMdTemplate(item.category, giType));
    pageCount ++;
  });
});

console.log(`${pageCount} pages generated`);
console.log('Generate Pages END');
