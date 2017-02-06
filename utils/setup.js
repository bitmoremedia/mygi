import giCategories from '../data/glycemic-index-categories';

export const categoryPathMap = () => {
  const map = {};
  giCategories.forEach((item)=>{
    map[item.category] = item.page;
  });
  return map;
};

export const pathCategoryMap = () => {
  const map = {};
  giCategories.forEach((item)=>{
    map[item.page] = item.category;
  });
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
