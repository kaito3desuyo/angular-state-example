import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/types/todo';

export const loadNgrxStates = createAction('[NgrxState] Load NgrxStates');

export const loadNgrxStatesSuccess = createAction(
    '[NgrxState] Load NgrxStates Success',
    props<{ data: any }>()
);

export const loadNgrxStatesFailure = createAction(
    '[NgrxState] Load NgrxStates Failure',
    props<{ error: any }>()
);

export const addTodo = createAction(
    '[NgrxState] Add Todo',
    props<{ todo: Todo }>()
);

export const updateTodo = createAction(
    '[NgrxState] Update Todo',
    props<{ todo: Update<Todo> }>()
);

export const removeTodo = createAction(
    '[NgrxState] Remove Todo',
    props<{ id: string }>()
);
