import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ngrxStateFeatureKey } from '.';
import * as fromNgrxState from './ngrx-state.reducer';

const getState = createFeatureSelector<fromNgrxState.State>(
    ngrxStateFeatureKey
);

export const selectAllTodos = createSelector(
    getState,
    fromNgrxState.selectAllTodos
);
