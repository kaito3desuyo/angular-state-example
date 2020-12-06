import * as fromNgrxState from './ngrx-state.actions';

describe('loadNgrxStates', () => {
  it('should return an action', () => {
    expect(fromNgrxState.loadNgrxStates().type).toBe('[NgrxState] Load NgrxStates');
  });
});
