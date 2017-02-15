export const search = ({ searchText, searchList, searchField }) => {
  const partialStringMatch = (item, text) =>{
    return (item.trim().toLowerCase().indexOf(text.trim().toLowerCase()) > -1)
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
    // case insensitive partial word matches
    let patialWordMatch;
    const itemWords = item[searchField].trim().toLowerCase().split(" ");
    const searchTextWords = searchText.trim().toLowerCase().split(" ");
    itemWords.forEach((itemWord)=>{
      searchTextWords.forEach((searchTextWord)=>{
        if ( partialStringMatch(itemWord, searchTextWord) ){
          patialWordMatch = true;
        }
      });
    });
    if (patialWordMatch){
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
