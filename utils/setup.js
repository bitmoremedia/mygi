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
  // we assume all paths that use this function have a prefix of 'glycemic-index'
  if (path && path.indexOf('/glycemic-index/') > -1) {
    let categoryPath;
    const pathName = path.substring('/glycemic-index/'.length, path.length-1);
    // check path for GI type filter ( high-gi / medium-gi / low-gi )
    if (pathName.indexOf('-gi/') > -1) {
      categoryPath = pathName.substring(pathName.indexOf('-gi/') + '-gi/'.length);
    } else {
      categoryPath = pathName;
    }
    return pathCategoryMap()[categoryPath];
  }
  return undefined;
};
