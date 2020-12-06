import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromNgrxState from './ngrx-state.reducer';

export const ngrxStateFeatureKey = 'ngrxState';

export type State = fromNgrxState.State;

export const reducers: ActionReducer<State> = fromNgrxState.reducer;

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? []
    : [];
