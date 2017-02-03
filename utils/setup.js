export const categoryPathMap = () => {
  return {
    "Beans" : "beans",
    "Breads" : "breads",
    "Breakfast Cereals" : "breakfast-cereals",
    "Dairy" : "dairy",
    "Fruits" : "fruits",
    "Snacks & Sweet Foods" : "snacks-and-sweet-foods",
    "Staples" : "staples",
    "Vegetables" : "vegetables",
  };
};

export const pathCategoryMap = () => {
  const map = {};
  for (let category in categoryPathMap()) {
    map[categoryPathMap()[category]] = category;
  }
  return map;
};

export const categoryFromPath = (path) => {
  // we assume all paths that use this function have a prefix of 'categories'
  if ( path && path.indexOf('/glycemic-index/') > -1 ){
    const pathName = path.substring('/glycemic-index/'.length, path.length-1);
    return pathCategoryMap()[pathName];
  }
  return undefined;
};

export const appendToKeyWords = (wordsToAdd) => {
  const keyWordPrefixes = ["gi", "GI", "Glycemic Index", "glycemic index", "GlycemicIndex", "glycemicindex"];
  let keywords = [];
  keyWordPrefixes.forEach((prefix)=> {
    keywords.push(prefix+" "+wordsToAdd);
  });
  return keywords.join();
};
