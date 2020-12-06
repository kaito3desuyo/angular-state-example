import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/types/todo';
import { addTodo, removeTodo, updateTodo } from './ngrx-state.actions';

export interface State extends EntityState<Todo> {}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => {
        return adapter.addOne(todo, state);
    }),
    on(updateTodo, (state, { todo }) => {
        return adapter.updateOne(todo, state);
    }),
    on(removeTodo, (state, { id }) => {
        return adapter.removeOne(id, state);
    })
);

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const selectTodoIds = selectIds;

export const selectTodoEntities = selectEntities;

export const selectAllTodos = selectAll;

export const selectTodoTotal = selectTotal;
