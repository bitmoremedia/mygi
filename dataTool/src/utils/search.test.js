import { search } from './search';

const data = [
  { "name": "Paul" },
  { "name": "Barry"},
  { "name": "Larry"},
  { "name": "Steve"},
  { "name": "Beth"},
  { "name": "Bill Oddy"},
  { "name": "Steve Coogan"},
  { "name": "russthedude"},
];

describe('Utils: search', ()=>{
  const searchField = 'name';
  const searchList = data;
  let searchResult, searchText, expectedResult;

  it('basic search returns some data', () => {
    searchText = 'Paul';
    searchResult = search({searchText, searchList, searchField});
    expect(searchResult).toBeDefined();
  });

  it('returns case insensitive matches', () => {
    searchText = 'beth';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Beth"},
    ];
    expect(search({searchText, searchList, searchField})).toEqual(expectedResult);
  });

  it('returns partial matching text items', () => {
    searchText = 'arry';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Barry"},
      { "name": "Larry"},
    ];
    expect(search({searchText, searchList, searchField})).toEqual(expectedResult);
  });

  it('returns partial word matches', () => {
    searchText = 'Ben Oddy';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Bill Oddy"},
    ];
    expect(search({searchText, searchList, searchField})).toEqual(expectedResult);
  });

  it('returns white space in target matches', () => {
    searchText = 'stevecoogan';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Steve Coogan"},
    ];
    expect(search({searchText, searchList, searchField})).toEqual(expectedResult);
  });

  it('returns white space in source matches', () => {
    searchText = 'Russ The Dude';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "russthedude"},
    ];
    expect(search({searchText, searchList, searchField})).toEqual(expectedResult);
  });

});
