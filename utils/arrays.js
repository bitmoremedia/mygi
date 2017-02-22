export const sortArrayByProperty = (propertyParam) => {
  let sortOrder = 1
  let property = propertyParam
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return (a, b) => {
    let result = 0
    if (a[property] < b[property]) {
      result = -1
    } else if (a[property] > b[property]) {
      result = 1
    }
    return result * sortOrder
  }
}

export const sortArrayByMultipleProperties = function sortArrayByMultipleProperties(...args) {
  const props = args
  return (obj1, obj2) => {
    let i = 0, result = 0
    const numberOfProperties = props.length
    while (result === 0 && i < numberOfProperties) {
      result = sortArrayByProperty(props[i])(obj1, obj2)
      i += 1
    }
    return result
  }
}
