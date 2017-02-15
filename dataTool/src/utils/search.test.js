import { search } from './search';

const data = [
  { "name": "Paul" },
  { "name": "Barry"},
  { "name": "Larry"},
  { "name": "Beth"},
  { "name": "Bill Oddy"},
  { "name": "Steve Coogan"},
  { "name": "russthedude"},
  { "name": "Dwayne/Dibbly"},
  { "name": "Dwayne Dibbly"},
  { "name": "Dwayne-Dibbly"},
  { "name": "Darren Dibbly"},
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
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns partial matching text items', () => {
    searchText = 'arry';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Barry"},
      { "name": "Larry"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns partial word matches - space delimited', () => {
    searchText = 'Ben Oddy';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Bill Oddy"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns partial word matches - slash delimited', () => {
    searchText = 'Ben/Oddy';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Bill Oddy"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns partial word matches - hyphen delimited', () => {
    searchText = 'Dwayne Dibbly';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Dwayne/Dibbly"},
      { "name": "Dwayne Dibbly"},
      { "name": "Dwayne-Dibbly"},
      { "name": "Darren Dibbly"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns white space in target matches', () => {
    searchText = 'stevecoogan';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "Steve Coogan"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('returns white space in source matches', () => {
    searchText = 'Russ The Dude';
    searchResult = search({searchText, searchList, searchField});
    expectedResult = [
      { "name": "russthedude"},
    ];
    expect(searchResult).toEqual(expectedResult);
  });

  it('specific use case A', () => {
    const searchText = '100% Whole Grain® bread (Natural Ovens)';
    const searchList = [
      { "name" : "Whole wheat/whole meal bread" },
      { "name" : "Wholemeal bread" }
    ];
    expectedResult = searchList;
    const searchResult = search({searchText, searchList, searchField});
    expect(searchResult).toEqual(expectedResult);
  });

});
