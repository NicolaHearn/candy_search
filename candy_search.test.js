const searchCandies = require('./candy_search');

describe('searchCandies', () => {
  it('returns the name of single item as an array', () => {
    expect(searchCandies('Aero', 5)).toEqual(['Aero']);
  });

  it('returns the name of single item as an array if it exists', () => {
    expect(searchCandies('Aero', 5)).toEqual(['Aero']);
  });
  
  it('returns mulitple names that matches the search criteria', () => {
    expect(searchCandies('Ma', 5)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns multiple names that match the search string and also are below the price', () => {
    expect(searchCandies('Ma', 3.00)).toEqual(['Mars']);
  });

  it('returns multiple names when given a lowercase search prefix', () => {
    expect(searchCandies('ma', 5)).toEqual(['Mars', 'Maltesers']);
  });
});

