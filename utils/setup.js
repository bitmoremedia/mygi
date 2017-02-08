import giCategories from '../data/glycemic-index-categories';

export const categoryPathList = () => {
  return giCategories.map((category)=>category.page);
  //return ["beans", "breads", "cereals", "dairy", "fruits", "snacks-and-sweets", "staples", "vegetables"];
};

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

export const giTypeFilterFromPath = (path) => {
  let giFilter;
  // we assume all paths that use this function have a prefix of 'glycemic-index'
  if (path && path.indexOf('/glycemic-index/') > -1) {
    const pathName = path.substring('/glycemic-index/'.length, path.length-1);
    // check if path is a gi filter
    if ( ['high-gi','medium-gi','low-gi'].indexOf(pathName) > -1 ){
      giFilter = pathName;
    }
    // check if path contains a gi filter
    if (pathName.indexOf('-gi/') > -1) {
      giFilter = pathName.substring(0, pathName.indexOf('-gi/') + '-gi/'.length-1);
    }
  }
  return giFilter;
};

export const isOfGiType = (giValue, giType) => {
  switch (giType) {
    case 'high-gi':
      return (giValue > 69);
      break;
    case 'medium-gi':
      return (giValue > 55 && giValue < 70);
      break;
    case 'low-gi':
      return (giValue < 56);
      break;
    default:
      return false;
  }
};

export const giTypeDescr = (giType) => {
  switch (giType) {
    case 'high-gi':
      return 'High';
      break;
    case 'medium-gi':
      return 'Medium';
      break;
    case 'low-gi':
      return 'Low';
      break;
    default:
      return '';
  }
};

export const giType = (giValue) => {
  if ( giValue > 69 ){
    return 'high-gi';
  }
  if ( giValue < 56 ){
    return 'low-gi';
  }
  return 'medium-gi';
};
