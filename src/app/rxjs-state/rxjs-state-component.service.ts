import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../types/todo';

@Injectable()
export class RxjsStateComponentService {
    private _list$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
    list$: Observable<Todo[]> = this._list$.asObservable();
    set list(todos: Todo[]) {
        this._list$.next(todos);
    }

    private _onlyViewNotDone$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
        false
    );
    onlyViewNotDone$: Observable<boolean> = this._onlyViewNotDone$.asObservable();
    set onlyViewNotDone(bool: boolean) {
        this._onlyViewNotDone$.next(bool);
    }

    constructor() {}
}
