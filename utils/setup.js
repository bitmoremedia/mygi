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
  // for now we assume all paths that use this function have a prefix of 'categories'
  if ( path.indexOf('/categories/') > -1 ){
    const pathName = path.substring(12, path.length-1);
    console.log({pathName});
    return pathCategoryMap()[pathName];
  }
  return undefined;
};
