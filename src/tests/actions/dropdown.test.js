import {
  toggleNav,
  toggleGenres,
  toggleAccount,
  toggleSort,
  closeAll,
} from '../../actions/dropdown';

describe('Dropdown actions test', () => {
  it('should generate closeAll action object', () => {
    const action = closeAll();
    expect(action).toEqual({
      type: 'CLOSE_ALL',
    });
  });

  it('should generate toggleNav action object', () => {
    const action = toggleNav();
    expect(action).toEqual({
      type: 'TOGGLE_NAV',
    });
  });

  it('should generate toggleGenres action object', () => {
    const action = toggleGenres();
    expect(action).toEqual({
      type: 'TOGGLE_GENRES',
    });
  });

  it('should generate toggleAccount action object', () => {
    const action = toggleAccount();
    expect(action).toEqual({
      type: 'TOGGLE_ACCOUNT',
    });
  });

  it('should generate togglesSORT action object', () => {
    const action = toggleSort();
    expect(action).toEqual({
      type: 'TOGGLE_SORT',
    });
  });
});
