import giCategories from '../data/glycemic-index-categories.json'

export const categoryPathList = () => giCategories.map(category => category.page)

export const categoryPathMap = () => {
  const map = {}
  giCategories.forEach((item) => {
    map[item.category] = item.page
  })
  return map
}

export const pathCategoryMap = () => {
  const map = {}
  giCategories.forEach((item) => {
    map[item.page] = item.category
  })
  return map
}

const giSubPath = (path) => {
  let pathName = path.substr(path.lastIndexOf('/glycemic-index/'))
  pathName = pathName.substring('/glycemic-index/'.length, pathName.length - 1)
  return pathName
}

export const categoryFromPath = (path) => {
  // we assume all paths that use this function have a prefix of 'glycemic-index'
  if (path && path.indexOf('/glycemic-index/') > -1) {
    let categoryPath
    const pathName = giSubPath(path)
    // check path for GI type filter ( high-gi / medium-gi / low-gi )
    if (pathName.indexOf('-gi/') > -1) {
      categoryPath = pathName.substring(pathName.indexOf('-gi/') + '-gi/'.length)
    } else {
      categoryPath = pathName
    }
    return pathCategoryMap()[categoryPath]
  }
  return undefined
}

export const giTypeFilterFromPath = (path) => {
  let giFilter
  // we assume all paths that use this function have a prefix of 'glycemic-index'
  if (path && path.indexOf('/glycemic-index/') > -1) {
    const pathName = giSubPath(path)
    // check if path is a gi filter
    if (['high-gi', 'medium-gi', 'low-gi'].indexOf(pathName) > -1) {
      giFilter = pathName
    }
    const offset = '-gi/'.length - 1
    // check if path contains a gi filter
    if (pathName.indexOf('-gi/') > -1) {
      giFilter = pathName.substring(0, pathName.indexOf('-gi/') + offset)
    }
  }
  return giFilter
}

export const isOfGiType = (giValue, giType) => {
  switch (giType) {
    case 'high-gi':
      return (giValue > 69)
    case 'medium-gi':
      return (giValue > 55 && giValue < 70)
    case 'low-gi':
      return (giValue < 56)
    default:
      return false
  }
}

export const giTypeDescr = (giType) => {
  switch (giType) {
    case 'high-gi':
      return 'High'
    case 'medium-gi':
      return 'Medium'
    case 'low-gi':
      return 'Low'
    default:
      return ''
  }
}

export const giType = (giValue) => {
  if (giValue > 69) {
    return 'high-gi'
  }
  if (giValue < 56) {
    return 'low-gi'
  }
  return 'medium-gi'
}
