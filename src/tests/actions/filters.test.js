import {
  setTextFilter,
  sortByRating,
  sortByAlphabet,
  sortByPopularity,
} from '../../actions/filters';

describe('Filters actions test', () => {
  it('should generate setTextFilter action object', () => {
    const action = setTextFilter('movie');
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'movie',
    });
  });

  it('should generate sortByRating action object', () => {
    const action = sortByRating();
    expect(action).toEqual({
      type: 'SORT_BY_RATING',
    });
  });

  it('should generate sortByAlphabet action object', () => {
    const action = sortByAlphabet();
    expect(action).toEqual({
      type: 'SORT_BY_ALPHABET',
    });
  });

  it('should generate sortByPopularity action object', () => {
    const action = sortByPopularity();
    expect(action).toEqual({
      type: 'SORT_BY_POPULARITY',
    });
  });
});
