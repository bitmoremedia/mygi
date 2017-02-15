export const search = ({ searchText, searchList, searchField }) => {
  const partialStringMatch = (item, text) =>{
    return (
      item.trim().toLowerCase().indexOf(text.trim().toLowerCase()) > -1
      ||
      text.trim().toLowerCase().indexOf(item.trim().toLowerCase()) > -1
    )
  };
  const partialWordMatch = (itemWords, searchTextWords) =>{
    let patialWordMatch = false;
    itemWords.forEach((itemWord)=>{
      searchTextWords.forEach((searchTextWord)=>{
        if ( partialStringMatch(itemWord, searchTextWord) ){
          patialWordMatch = true;
        }
      });
    });
    return patialWordMatch;
  };
  const match = ({item, searchText, searchField}) => {
    // no values defined
    if (!item[searchField] || !searchText) {
      return false;
    }
    // case insensitive partial string match
    if ( partialStringMatch(item[searchField], searchText)) {
      return true;
    }
    // case insensitive partial word matches (space delimited)
    const itemWords = item[searchField].trim().toLowerCase().split(" ");
    const searchTextWords = searchText.trim().toLowerCase().split(" ");
    if (partialWordMatch(itemWords,searchTextWords)) {
      return true;
    }
    // case insensitive partial word matches (slash delimited)
    const itemWordsSlash = item[searchField].trim().toLowerCase().split("/");
    const searchTextWordsSlash = searchText.trim().toLowerCase().split("/");
    if (partialWordMatch(itemWordsSlash,searchTextWordsSlash)) {
      return true;
    }
    // case insensitive partial word matches (hyphen delimited)
    const itemWordsHyphen = item[searchField].trim().toLowerCase().split("-");
    const searchTextWordsHyphen = searchText.trim().toLowerCase().split("-");
    if (partialWordMatch(itemWordsHyphen,searchTextWordsHyphen)) {
      return true;
    }
    // no white space mega match
    const itemWordsNoWhiteSpace = item[searchField].replace(/\s/g,'');
    const searchTextWordsNoWhiteSpace = searchText.replace(/\s/g,'');
    if ( partialStringMatch(itemWordsNoWhiteSpace, searchTextWordsNoWhiteSpace) ){
      return true;
    }
    return false;
  };
  return searchList.filter((item)=>match({item, searchText, searchField}));
};
